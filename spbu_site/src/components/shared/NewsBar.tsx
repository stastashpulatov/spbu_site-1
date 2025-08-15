import React, { useEffect, useState, useRef } from 'react';
import { getNews } from '../../utils/api';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import './NewsBar.scss';

interface NewsItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  description: string;
  description_uz: string;
  description_en: string;
  image_url: string | null;
  publication_date: string;
}

const NewsBar: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews(1);
        // Берём только первые 5 новостей для слайдера
        const newsData = response.data.results.slice(0, 5);
        setNews(newsData);
      } catch (e) {
        console.error('Error fetching news:', e);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Функция для перехода к следующему слайду
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  // Функция для перехода к предыдущему слайду
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  // Функция для перехода к конкретному слайду
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Автоматическое переключение слайдов
  useEffect(() => {
    if (news.length > 1 && !isPaused) {
      // Очищаем предыдущий интервал
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Создаем новый интервал
      intervalRef.current = setInterval(() => {
        goToNextSlide();
      }, 5000); // Смена слайда каждые 5 секунд
    }

    // Очистка при размонтировании
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [news.length, isPaused]);

  // Очистка интервала при размонтировании компонента
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="news-slider">
        <div className="news-slider-loading">
          <div className="loading-spinner"></div>
          <p>Загрузка новостей...</p>
        </div>
      </div>
    );
  }

  if (!news.length) {
    return null;
  }

  const currentNews = news[currentSlide];
  const title = language === 'ru' ? currentNews.title : 
                language === 'uz' ? currentNews.title_uz : 
                currentNews.title_en;
  const description = language === 'ru' ? currentNews.description : 
                     language === 'uz' ? currentNews.description_uz : 
                     currentNews.description_en;

  return (
    <div 
      className="news-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="news-slider-header">
        <h2 className="news-slider-title">Новости</h2>
        <div className="news-slider-controls">
          <button 
            className="news-slider-btn prev" 
            onClick={goToPrevSlide}
            aria-label="Предыдущая новость"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="news-slider-btn next" 
            onClick={goToNextSlide}
            aria-label="Следующая новость"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="news-slider-content">
        <div className="news-slide">
          <div className="news-slide-image">
            {currentNews.image_url ? (
              <img 
                src={currentNews.image_url} 
                alt={title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`news-slide-placeholder ${currentNews.image_url ? 'hidden' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H7L9 1H15L17 3H21C21.5304 3 22.0391 3.21071 22.4142 3.58579C22.7893 3.96086 23 4.46957 23 5V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="news-slide-content">
            <h3 className="news-slide-title">{title}</h3>
            <p className="news-slide-description">
              {description.length > 150 ? `${description.substring(0, 150)}...` : description}
            </p>
            <div className="news-slide-meta">
              <span className="news-slide-date">
                {new Date(currentNews.publication_date).toLocaleDateString(
                  language === 'ru' ? 'ru-RU' : 
                  language === 'uz' ? 'uz-UZ' : 'en-US'
                )}
              </span>
              <Link to={`/news/${currentNews.id}`} className="news-slide-link">
                Читать далее
              </Link>
            </div>
          </div>
        </div>
      </div>

      {news.length > 1 && (
        <div className="news-slider-indicators">
          {news.map((_, index) => (
            <button
              key={index}
              className={`news-slider-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к новости ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Индикатор автоматического переключения */}
      {news.length > 1 && (
        <div className="news-slider-auto-indicator">
          <div className="auto-indicator-text">
            {isPaused ? 'Автопереключение приостановлено' : 'Автопереключение каждые 5 секунд'}
          </div>
          <div className="auto-indicator-dots">
            {news.map((_, index) => (
              <div 
                key={index}
                className={`auto-indicator-dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsBar;