import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './EventsPage.scss';

interface EventItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  description: string;
  description_uz: string;
  description_en: string;
  event_date: string;
  location: string;
  image: string | null;
  is_visible: boolean;
}

type Translations = {
  [key in Language]: {
    title: string;
    description: string;
    loadingMessage: string;
    errorMessage: string;
    noEventsMessage: string;
    location: string;
    date: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Мероприятия',
    description: 'Предстоящие и прошедшие мероприятия университета',
    loadingMessage: 'Загрузка мероприятий...',
    errorMessage: 'Не удалось загрузить мероприятия. Пожалуйста, попробуйте позже.',
    noEventsMessage: 'Мероприятия отсутствуют',
    location: 'Место проведения',
    date: 'Дата'
  },
  uz: {
    title: 'Tadbirlar',
    description: 'Universitetning kelajakdagi va o\'tgan tadbirlari',
    loadingMessage: 'Tadbirlar yuklanmoqda...',
    errorMessage: 'Tadbirlarni yuklashda xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.',
    noEventsMessage: 'Tadbirlar mavjud emas',
    location: 'O\'tkazilish joyi',
    date: 'Sana'
  },
  en: {
    title: 'Events',
    description: 'Upcoming and past university events',
    loadingMessage: 'Loading events...',
    errorMessage: 'Failed to load events. Please try again later.',
    noEventsMessage: 'No events available',
    location: 'Location',
    date: 'Date'
  }
};

const EventsPage: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('EventsPage must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Симуляция загрузки данных
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // Здесь должен быть реальный API вызов
        // const response = await getEvents();
        
        // Fallback данные для демонстрации
        const fallbackEvents: EventItem[] = [
          {
            id: 1,
            title: 'День открытых дверей',
            title_uz: 'Ochiq eshiklar kuni',
            title_en: 'Open Day',
            description: 'Приглашаем всех желающих посетить наш филиал и узнать больше о программах обучения.',
            description_uz: 'Barcha qiziqishlilarni filialimizga tashrif buyurishga va o\'quv dasturlari haqida ko\'proq ma\'lumot olishga taklif qilamiz.',
            description_en: 'We invite everyone to visit our branch and learn more about our educational programs.',
            event_date: new Date(Date.now() + 7 * 86400000).toISOString(),
            location: 'Главный корпус, аудитория 101',
            image: null,
            is_visible: true
          },
          {
            id: 2,
            title: 'Научная конференция',
            title_uz: 'Ilmiy konferentsiya',
            title_en: 'Scientific Conference',
            description: 'Ежегодная научная конференция студентов и преподавателей.',
            description_uz: 'Talabalar va o\'qituvchilarning yillik ilmiy konferentsiyasi.',
            description_en: 'Annual scientific conference of students and teachers.',
            event_date: new Date(Date.now() + 14 * 86400000).toISOString(),
            location: 'Конференц-зал',
            image: null,
            is_visible: true
          }
        ];
        
        setEvents(fallbackEvents);
        setError(null);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(t.errorMessage);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, [t.errorMessage]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getLocalizedTitle = (item: EventItem) => {
    switch (language) {
      case 'uz':
        return item.title_uz || item.title;
      case 'en':
        return item.title_en || item.title;
      default:
        return item.title;
    }
  };

  const getLocalizedDescription = (item: EventItem) => {
    switch (language) {
      case 'uz':
        return item.description_uz || item.description;
      case 'en':
        return item.description_en || item.description;
      default:
        return item.description;
    }
  };

  if (loading) {
    return <div className="events-loading">{t.loadingMessage}</div>;
  }

  if (error && events.length === 0) {
    return <div className="events-error">{error}</div>;
  }

  return (
    <div className="events-page">
      <div className="events-page-header">
        <h1>{t.title}</h1>
        <p className="events-page-description">
          {t.description}
        </p>
      </div>

      {events.length === 0 ? (
        <div className="events-empty">{t.noEventsMessage}</div>
      ) : (
        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-item">
              {event.image && (
                <div className="event-item-image">
                  <img src={event.image} alt={getLocalizedTitle(event)} />
                </div>
              )}
              <div className="event-item-content">
                <div className="event-item-date">
                  <strong>{t.date}:</strong> {formatDate(event.event_date)}
                </div>
                <h2 className="event-item-title">{getLocalizedTitle(event)}</h2>
                <p className="event-item-description">{getLocalizedDescription(event)}</p>
                <div className="event-item-location">
                  <strong>{t.location}:</strong> {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
