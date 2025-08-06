import React, { useEffect, useState } from 'react';
import { getNews } from '../../utils/api';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import './NewsBar.scss';

interface NewsItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  publication_date: string;
}

const NewsBar: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews(1);
        // Берём только первые 4 новости
        setNews(response.data.results.slice(0, 4));
      } catch (e) {
        setNews([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return null;
  if (!news.length) return null;

  return (
    <div className="news-bar">
      <div className="news-bar-title">Новости:</div>
      <div className="news-bar-list">
        {news.map((item) => (
          <Link to={`/news`} className="news-bar-item" key={item.id}>
            {language === 'ru' ? item.title : language === 'uz' ? item.title_uz : item.title_en}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsBar;