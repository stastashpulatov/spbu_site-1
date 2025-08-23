import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MaintenancePage.scss';

interface MaintenanceData {
  is_active: boolean;
  title: string;
  message: string;
  start_time: string;
  estimated_end_time: string;
  remaining_time: number | null;
  is_expired: boolean;
}

const MaintenancePage: React.FC = () => {
  const [maintenanceData, setMaintenanceData] = useState<MaintenanceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMaintenanceStatus();
    
    // Автоматически обновляем статус каждые 5 секунд для быстрого реагирования
    const statusInterval = setInterval(() => {
      fetchMaintenanceStatus();
    }, 5000);
    
    return () => {
      clearInterval(statusInterval);
    };
  }, []);

  useEffect(() => {
    let interval: number;
    
    if (maintenanceData?.is_active && maintenanceData.remaining_time && maintenanceData.remaining_time > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev && prev > 0) {
            return prev - 1;
          }
          return 0;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [maintenanceData]);

  const fetchMaintenanceStatus = async () => {
    try {
      console.log('🔍 MaintenancePage: Проверяю статус тех. работ...');
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/maintenance/status/');
      
      if (!response.ok) {
        throw new Error('Ошибка при получении статуса технических работ');
      }
      
      const data = await response.json();
      console.log('📊 MaintenancePage: Получены данные:', data);
      setMaintenanceData(data);
      
      // Если тех. работы отключились, перенаправляем на главную
      if (!data.is_active) {
        console.log('✅ MaintenancePage: Тех. работы отключились, перенаправляю на главную');
        navigate('/');
        return;
      }
      
      if (data.remaining_time) {
        setTimeLeft(data.remaining_time);
      }
      
      setError(null);
    } catch (err) {
      console.error('❌ MaintenancePage: Ошибка:', err);
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
      return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  };

  if (loading) {
    return (
      <div className="maintenance-page">
        <div className="maintenance-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Загрузка...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="maintenance-page">
        <div className="maintenance-container">
          <div className="error-message">
            <h2>Ошибка</h2>
            <p>{error}</p>
            <button onClick={fetchMaintenanceStatus} className="retry-button">
              Попробовать снова
            </button>
            <p className="fallback-message">
              Если проблема сохраняется, вернитесь на главную страницу
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!maintenanceData?.is_active) {
    return (
      <div className="maintenance-page">
        <div className="maintenance-container">
          <div className="no-maintenance">
            <h2>Технические работы не проводятся</h2>
            <p>Сайт работает в обычном режиме. Перезагрузите страницу.</p>
            <button onClick={fetchMaintenanceStatus} className="refresh-button">
              Обновить статус
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="maintenance-page">
      <div className="maintenance-container">
        <div className="maintenance-header">
          <div className="maintenance-icon">🔧</div>
          <h1>{maintenanceData.title}</h1>
        </div>
        
        <div className="maintenance-message">
          <p>{maintenanceData.message}</p>
        </div>
        
        {maintenanceData.estimated_end_time && (
          <div className="maintenance-timer">
            <h3>Оставшееся время:</h3>
            <div className="timer-display">
              {timeLeft !== null && timeLeft > 0 ? (
                <span className="time-left">{formatTime(timeLeft)}</span>
              ) : (
                <span className="time-expired">Время истекло</span>
              )}
            </div>
          </div>
        )}
        
        <div className="maintenance-info">
          <div className="info-item">
            <strong>Начало работ:</strong>
            <span>{new Date(maintenanceData.start_time).toLocaleString('ru-RU')}</span>
          </div>
          
          {maintenanceData.estimated_end_time && (
            <div className="info-item">
              <strong>Ожидаемое завершение:</strong>
              <span>{new Date(maintenanceData.estimated_end_time).toLocaleString('ru-RU')}</span>
            </div>
          )}
        </div>
        
        <div className="maintenance-actions">
          <button onClick={fetchMaintenanceStatus} className="refresh-button">
            Обновить статус
          </button>
          <button onClick={() => navigate('/')} className="return-button">
            Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
