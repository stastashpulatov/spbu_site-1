import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MaintenancePage from '../pages/MaintenancePage';

interface MaintenanceData {
  is_active: boolean;
  title: string;
  message: string;
  start_time: string;
  estimated_end_time: string;
  remaining_time: number | null;
  is_expired: boolean;
}

interface MaintenanceCheckProps {
  children: React.ReactNode;
}

const MaintenanceCheck: React.FC<MaintenanceCheckProps> = ({ children }) => {
  const [maintenanceData, setMaintenanceData] = useState<MaintenanceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiAvailable, setApiAvailable] = useState(false);
  const navigate = useNavigate();

  const checkMaintenanceStatus = useCallback(async () => {
    try {
      console.log('🔍 Проверяю статус тех. работ...');
      
      const response = await fetch('http://localhost:8000/api/maintenance/status/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      console.log('📡 Статус ответа:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.warn(`⚠️ Неверный тип контента: ${contentType}, показываю обычную страницу`);
        setLoading(false);
        return;
      }
      
      const data = await response.json();
      console.log('📊 Получены данные:', data);
      
      setMaintenanceData(data);
      setError(null);
      setApiAvailable(true);
      
      // Если тех. работы активны, перенаправляем на страницу тех. работ
      if (data.is_active) {
        console.log('🔧 Тех. работы активны, перенаправляю на /maintenance');
        navigate('/maintenance');
      } else {
        console.log('✅ Тех. работы не активны, показываю обычную страницу');
      }
    } catch (err) {
      console.error('❌ Ошибка проверки тех. работ:', err);
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
      setApiAvailable(false);
      
      // При любой ошибке показываем обычную страницу
      console.warn('⚠️ Показываю обычную страницу из-за ошибки');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    // Добавляем небольшую задержку перед проверкой
    const timer = setTimeout(() => {
      checkMaintenanceStatus();
    }, 100);
    
    // Автоматически обновляем статус каждые 5 секунд для быстрого реагирования
    const interval = setInterval(() => checkMaintenanceStatus(), 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [checkMaintenanceStatus]);

  // Если загрузка, показываем обычную страницу
  if (loading) {
    console.log('Загрузка, показываю обычную страницу');
    return <>{children}</>;
  }

  // Если ошибка или API недоступен, показываем обычную страницу
  if (error || !apiAvailable) {
    console.warn('Не удалось проверить тех. работы или API недоступен, показываю обычную страницу');
    return <>{children}</>;
  }

  // Если тех. работы активны, показываем страницу тех. работ
  if (maintenanceData?.is_active) {
    console.log('Показываю страницу тех. работ');
    return <MaintenancePage />;
  }

  // Если тех. работы не активны, показываем обычную страницу
  console.log('Показываю обычную страницу');
  return <>{children}</>;
};

export default MaintenanceCheck;
