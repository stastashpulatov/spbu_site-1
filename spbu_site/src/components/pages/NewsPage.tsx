import React, { useState, useEffect } from 'react';
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

const NewsPage: React.FC = () => {
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
      setError('Не удалось загрузить новости. Пожалуйста, попробуйте позже.');
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

  if (loading && newsItems.length === 0) {
    return <div className="news-loading">Загрузка новостей...</div>;
  }

  if (error && newsItems.length === 0) {
    return <div className="news-error">{error}</div>;
  }

  return (
    <div className="news-page">
      <div className="news-page-header">
        <h1>Новости</h1>
        <p className="news-page-description">
          Последние новости и события университета
        </p>
      </div>

      {newsItems.length === 0 ? (
        <div className="news-empty">Новости отсутствуют</div>
      ) : (
        <>
          <div className="news-list">
            {newsItems.map(item => (
              <div key={item.id} className="news-item">
                {item.image && (
                  <div className="news-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <div className="news-item-content">
                  <div className="news-item-date">{formatDate(item.publication_date)}</div>
                  <h2 className="news-item-title">{item.title}</h2>
                  <p className="news-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="news-pagination">
              <button 
                className="pagination-button prev"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Предыдущая
              </button>
              
              <div className="pagination-pages">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button 
                className="pagination-button next"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Следующая
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsPage;
