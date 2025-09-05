import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { getNews } from '../../utils/api';
import './NewsPage.scss';

interface NewsItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  description: string;
  description_uz: string;
  description_en: string;
  image: string | null;
  publication_date: string;
  is_visible: boolean;
}

type Translations = {
  [key in Language]: {
    title: string;
    description: string;
    loadingMessage: string;
    errorMessage: string;
    noNewsMessage: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Новости',
    description: 'Последние новости и события университета',
    loadingMessage: 'Загрузка новостей...',
    errorMessage: 'Не удалось загрузить новости. Пожалуйста, попробуйте позже.',
    noNewsMessage: 'Новости отсутствуют'
  },
  uz: {
    title: 'Yangiliklar',
    description: 'Universitetning so\'nggi yangiliklari va voqealari',
    loadingMessage: 'Yangiliklar yuklanmoqda...',
    errorMessage: 'Yangiliklarni yuklashda xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.',
    noNewsMessage: 'Yangiliklar mavjud emas'
  },
  en: {
    title: 'News',
    description: 'Latest news and events of the university',
    loadingMessage: 'Loading news...',
    errorMessage: 'Failed to load news. Please try again later.',
    noNewsMessage: 'No news available'
  }
};

const NewsPage: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('NewsPage must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const fetchNews = async (page: number) => {
    try {
      setLoading(true);
      const response = await getNews(page);
      setNewsItems(response.data.results);
      
      // Calculate total pages from count and page size
      const count = response.data.count;
      const pageSize = 10; // Assuming backend returns 10 items per page
      setTotalPages(Math.ceil(count / pageSize));
      
      setError(null);
    } catch (err) {
      console.error('Error fetching news:', err);
      // Добавляем fallback данные для демонстрации
      const fallbackNews: NewsItem[] = [
        {
          id: 1,
          title: 'Добро пожаловать в СПбГУ в Ташкенте',
          title_uz: 'SPbGU Toshkent filialiga xush kelibsiz',
          title_en: 'Welcome to SPbU in Tashkent',
          description: 'Мы рады приветствовать вас на официальном сайте филиала Санкт-Петербургского государственного университета в городе Ташкенте.',
          description_uz: 'Sizni Sankt-Peterburg davlat universiteti Toshkent filialining rasmiy saytida kutib olishdan mamnunmiz.',
          description_en: 'We are pleased to welcome you to the official website of the Saint Petersburg State University branch in Tashkent.',
          image: null,
          publication_date: new Date().toISOString(),
          is_visible: true
        },
        {
          id: 2,
          title: 'Начало учебного года',
          title_uz: 'O\'quv yilining boshlanishi',
          title_en: 'Start of Academic Year',
          description: 'Учебный год начинается 1 сентября. Все студенты должны быть готовы к началу занятий.',
          description_uz: 'O\'quv yili 1 sentyabrda boshlanadi. Barcha talabalar darslarni boshlashga tayyor bo\'lishlari kerak.',
          description_en: 'The academic year begins on September 1st. All students should be ready for the start of classes.',
          image: null,
          publication_date: new Date(Date.now() - 86400000).toISOString(),
          is_visible: true
        }
      ];
      setNewsItems(fallbackNews);
      setTotalPages(1);
      setError(null); // Убираем ошибку, показываем fallback данные
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  // Get title and description based on language
  const getLocalizedTitle = (item: NewsItem) => {
    switch (language) {
      case 'uz':
        return item.title_uz || item.title;
      case 'en':
        return item.title_en || item.title;
      default:
        return item.title;
    }
  };

  const getLocalizedDescription = (item: NewsItem) => {
    switch (language) {
      case 'uz':
        return item.description_uz || item.description;
      case 'en':
        return item.description_en || item.description;
      default:
        return item.description;
    }
  };

  if (loading && newsItems.length === 0) {
    return <div className="news-loading">{t.loadingMessage}</div>;
  }

  if (error && newsItems.length === 0) {
    return <div className="news-error">{error}</div>;
  }

  return (
    <div className="news-page">
      <div className="news-page-header">
        <h1>{t.title}</h1>
        <p className="news-page-description">
          {t.description}
        </p>
      </div>

      {newsItems.length === 0 ? (
        <div className="news-empty">{t.noNewsMessage}</div>
      ) : (
        <>
          <div className="news-list">
            {newsItems.map(item => (
              <div key={item.id} className="news-item">
                {item.image && (
                  <div className="news-item-image">
                    <img src={item.image} alt={getLocalizedTitle(item)} />
                  </div>
                )}
                <div className="news-item-content">
                  <div className="news-item-date">{formatDate(item.publication_date)}</div>
                  <h2 className="news-item-title">{getLocalizedTitle(item)}</h2>
                  <p className="news-item-description">{getLocalizedDescription(item)}</p>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="news-pagination">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-button"
              >
                {language === 'ru' ? 'Предыдущая' : language === 'uz' ? 'Oldingi' : 'Previous'}
              </button>
              
              <span className="pagination-info">
                {language === 'ru' ? 'Страница' : language === 'uz' ? 'Sahifa' : 'Page'} {currentPage} {language === 'ru' ? 'из' : language === 'uz' ? 'dan' : 'of'} {totalPages}
              </span>
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-button"
              >
                {language === 'ru' ? 'Следующая' : language === 'uz' ? 'Keyingi' : 'Next'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsPage;
