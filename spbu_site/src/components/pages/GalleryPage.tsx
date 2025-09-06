import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './GalleryPage.scss';

interface GalleryItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  description: string;
  description_uz: string;
  description_en: string;
  image: string;
  category: string;
  upload_date: string;
  is_visible: boolean;
}

type Translations = {
  [key in Language]: {
    title: string;
    description: string;
    loadingMessage: string;
    errorMessage: string;
    noImagesMessage: string;
    allCategories: string;
    categories: {
      events: string;
      campus: string;
      students: string;
      faculty: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'Галерея',
    description: 'Фотографии жизни университета',
    loadingMessage: 'Загрузка галереи...',
    errorMessage: 'Не удалось загрузить галерею. Пожалуйста, попробуйте позже.',
    noImagesMessage: 'Изображения отсутствуют',
    allCategories: 'Все категории',
    categories: {
      events: 'Мероприятия',
      campus: 'Кампус',
      students: 'Студенты',
      faculty: 'Преподаватели'
    }
  },
  uz: {
    title: 'Galereya',
    description: 'Universitet hayotidan fotosuratlar',
    loadingMessage: 'Galereya yuklanmoqda...',
    errorMessage: 'Galereyani yuklashda xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.',
    noImagesMessage: 'Rasmlar mavjud emas',
    allCategories: 'Barcha kategoriyalar',
    categories: {
      events: 'Tadbirlar',
      campus: 'Kampus',
      students: 'Talabalar',
      faculty: 'O\'qituvchilar'
    }
  },
  en: {
    title: 'Gallery',
    description: 'Photos from university life',
    loadingMessage: 'Loading gallery...',
    errorMessage: 'Failed to load gallery. Please try again later.',
    noImagesMessage: 'No images available',
    allCategories: 'All Categories',
    categories: {
      events: 'Events',
      campus: 'Campus',
      students: 'Students',
      faculty: 'Faculty'
    }
  }
};

const GalleryPage: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('GalleryPage must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        // Здесь должен быть реальный API вызов
        // const response = await getGallery();
        
        // Fallback данные для демонстрации
        const fallbackGallery: GalleryItem[] = [
          {
            id: 1,
            title: 'День открытых дверей',
            title_uz: 'Ochiq eshiklar kuni',
            title_en: 'Open Day',
            description: 'Студенты и преподаватели на дне открытых дверей',
            description_uz: 'Ochiq eshiklar kunida talabalar va o\'qituvchilar',
            description_en: 'Students and faculty at the open day',
            image: '/images/photo_2025-09-05_14-23-24.png',
            category: 'events',
            upload_date: new Date().toISOString(),
            is_visible: true
          },
          {
            id: 2,
            title: 'Здание университета',
            title_uz: 'Universitet binosi',
            title_en: 'University Building',
            description: 'Главное здание филиала СПбГУ в Ташкенте',
            description_uz: 'SPbGU Toshkent filialining asosiy binosi',
            description_en: 'Main building of SPbU branch in Tashkent',
            image: '/images/logo.png',
            category: 'campus',
            upload_date: new Date(Date.now() - 86400000).toISOString(),
            is_visible: true
          },
          {
            id: 3,
            title: 'Студенты на занятиях',
            title_uz: 'Darsda talabalar',
            title_en: 'Students in Class',
            description: 'Студенты активно участвуют в учебном процессе',
            description_uz: 'Talabalar o\'quv jarayonida faol ishtirok etmoqda',
            description_en: 'Students actively participate in the learning process',
            image: '/images/branch-team.png',
            category: 'students',
            upload_date: new Date(Date.now() - 2 * 86400000).toISOString(),
            is_visible: true
          }
        ];
        
        setGalleryItems(fallbackGallery);
        setError(null);
      } catch (err) {
        console.error('Error fetching gallery:', err);
        setError(t.errorMessage);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGallery();
  }, [t.errorMessage]);

  const getLocalizedTitle = (item: GalleryItem) => {
    switch (language) {
      case 'uz':
        return item.title_uz || item.title;
      case 'en':
        return item.title_en || item.title;
      default:
        return item.title;
    }
  };

  const getLocalizedDescription = (item: GalleryItem) => {
    switch (language) {
      case 'uz':
        return item.description_uz || item.description;
      case 'en':
        return item.description_en || item.description;
      default:
        return item.description;
    }
  };

  const categories = ['all', 'events', 'campus', 'students', 'faculty'];
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return <div className="gallery-loading">{t.loadingMessage}</div>;
  }

  if (error && galleryItems.length === 0) {
    return <div className="gallery-error">{error}</div>;
  }

  return (
    <div className="gallery-page">
      <div className="gallery-page-header">
        <h1>{t.title}</h1>
        <p className="gallery-page-description">
          {t.description}
        </p>
      </div>

      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? t.allCategories : t.categories[category as keyof typeof t.categories]}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="gallery-empty">{t.noImagesMessage}</div>
      ) : (
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-item-image">
                <img src={item.image} alt={getLocalizedTitle(item)} />
                <div className="gallery-item-overlay">
                  <h3>{getLocalizedTitle(item)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.image} alt={getLocalizedTitle(selectedImage)} />
            <div className="gallery-modal-info">
              <h3>{getLocalizedTitle(selectedImage)}</h3>
              <p>{getLocalizedDescription(selectedImage)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
