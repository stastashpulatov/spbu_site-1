import React, { useState, useEffect, useContext } from 'react';
import { getSchedule } from '../../utils/api';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './Schedule.scss';

const DAY_ORDER = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

interface Group {
  id: number;
  name: string;
}

interface Room {
  id: number;
  name: string;
}

interface ScheduleItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
  location: Room;
  teacher: string | null;
  group: Group;
  is_visible: boolean;
}

interface ScheduleProps {
  group?: string;
}

const Schedule: React.FC<ScheduleProps> = ({ group }) => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('Schedule must be used within Language Provider');
  }
  
  const { language } = langContext;
  
  const [scheduleData, setScheduleData] = useState<Record<string, ScheduleItem[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<string>('monday');

  const translations: Record<Language, {
    dayNames: Record<string, string>;
    notSpecified: string;
    noClasses: string;
    loading: string;
    notFound: string;
  }> = {
    ru: {
      dayNames: {
        monday: 'Понедельник',
        tuesday: 'Вторник',
        wednesday: 'Среда',
        thursday: 'Четверг',
        friday: 'Пятница',
        saturday: 'Суббота',
        sunday: 'Воскресенье',
      },
      notSpecified: 'Не указано',
      noClasses: 'Нет занятий в этот день',
      loading: 'Загрузка расписания...',
      notFound: 'Расписание не найдено',
    },
    uz: {
      dayNames: {
        monday: 'Dushanba',
        tuesday: 'Seshanba',
        wednesday: 'Chorshanba',
        thursday: 'Payshanba',
        friday: 'Juma',
        saturday: 'Shanba',
        sunday: 'Yakshanba',
      },
      notSpecified: 'Ko\'rsatilmagan',
      noClasses: 'Bu kunda darslar yo\'q',
      loading: 'Jadval yuklanmoqda...',
      notFound: 'Jadval topilmadi',
    },
    en: {
      dayNames: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
      notSpecified: 'Not specified',
      noClasses: 'No classes on this day',
      loading: 'Loading schedule...',
      notFound: 'Schedule not found',
    },
  };
  
  const t = translations[language];

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        const params: { group?: string } = {};
        if (group) params.group = group;
        
        console.log('Fetching schedule with params:', params);
        console.log('API URL:', import.meta.env.VITE_API_URL || 'Not set');
        
        const response = await getSchedule(params);
        console.log('Schedule API response:', response.data);
        
        // Group schedule items by day
        const groupedByDay: Record<string, ScheduleItem[]> = {};
        
        // Проверяем разные форматы ответа API
        let scheduleItems: ScheduleItem[] = [];
        
        if (response.data.results && Array.isArray(response.data.results)) {
          // Формат с пагинацией
          scheduleItems = response.data.results;
        } else if (Array.isArray(response.data)) {
          // Простой массив
          scheduleItems = response.data;
        } else {
          console.error('Unexpected API response format:', response.data);
          setError('Получен неверный формат данных от сервера.');
          setLoading(false);
          return;
        }
        
        if (scheduleItems.length === 0) {
          console.log('No schedule items found');
          setError('Расписание не найдено. Возможно, оно еще не добавлено в систему.');
          setLoading(false);
          return;
        }
        
        // Группируем по дням недели
        scheduleItems.forEach((item: ScheduleItem) => {
          if (!groupedByDay[item.day_of_week]) {
            groupedByDay[item.day_of_week] = [];
          }
          groupedByDay[item.day_of_week].push(item);
        });
        
        // Сортируем по времени начала
        Object.keys(groupedByDay).forEach(day => {
          groupedByDay[day].sort((a, b) => 
            a.start_time.localeCompare(b.start_time)
          );
        });
        
        setScheduleData(groupedByDay);
        
        // Устанавливаем активный день
        if (Object.keys(groupedByDay).length > 0) {
          const firstDay = DAY_ORDER.find(day => groupedByDay[day]?.length > 0) || 'monday';
          setActiveDay(firstDay);
        }
        
        setError(null);
      } catch (err: unknown) {
        console.error('Error fetching schedule:', err);
        let message = 'Не удалось загрузить расписание. Проверьте подключение к серверу.';
        // Attempt to extract more details if this looks like an axios error
        if (typeof err === 'object' && err !== null) {
          const anyErr = err as { message?: string; response?: { data?: { detail?: string } } };
          message = anyErr.response?.data?.detail || anyErr.message || message;
        }
        setError(message);
        setScheduleData({});
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [group]);

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5); // Format "HH:MM" from "HH:MM:SS"
  };

  if (loading) {
    return <div className="schedule-loading">{t.loading}</div>;
  }

  if (error) {
    return <div className="schedule-error">{error}</div>;
  }

  if (Object.keys(scheduleData).length === 0) {
    return <div className="schedule-empty">{t.notFound}</div>;
  }

  return (
    <div className="schedule-container">
      <div className="schedule-tabs">
        {DAY_ORDER.map(day => (
          scheduleData[day] && scheduleData[day].length > 0 && (
            <button
              key={day}
              className={`schedule-tab ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {t.dayNames[day]}
            </button>
          )
        ))}
      </div>
      
      <div className="schedule-content">
        {scheduleData[activeDay] && scheduleData[activeDay].length > 0 ? (
          <div className="schedule-items">
            {scheduleData[activeDay].map(item => (
              <div key={item.id} className="schedule-item">
                <div className="schedule-item-time">
                  <span className="start-time">{formatTime(item.start_time)}</span>
                  <span className="time-separator">-</span>
                  <span className="end-time">{formatTime(item.end_time)}</span>
                </div>
                <div className="schedule-item-details">
                  <h3 className="schedule-item-title">
                    {language === 'ru' ? item.title : language === 'uz' ? item.title_uz : item.title_en}
                  </h3>
                  <div className="schedule-item-info">
                    <span className="schedule-item-location">
                      <i className="location-icon">📍</i> {item.location?.name || t.notSpecified}
                    </span>
                    <span className="schedule-item-teacher">
                      <i className="teacher-icon">👨‍🏫</i> {item.teacher || t.notSpecified}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="schedule-empty-day">
            {t.noClasses}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
