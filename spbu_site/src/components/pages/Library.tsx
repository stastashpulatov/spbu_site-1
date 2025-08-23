import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './Library.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    aboutTitle: string;
    aboutText: string;
    resourcesTitle: string;
    resources: {
      title: string;
      description: string;
    }[];
    ctaTitle: string;
    ctaText: string;
    buttonText: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Научная библиотека имени М. Горького',
    subtitle: 'Одна из крупнейших университетских библиотек России',
    aboutTitle: 'О библиотеке',
    aboutText: 'Научная библиотека им. М. Горького СПбГУ — одна из старейших и крупнейших библиотек России. Основанная в 1783 году она прошла долгий путь развития и сегодня представляет собой современный информационный центр, обеспечивающий доступ к знаниям и информационным ресурсам для студентов, преподавателей и исследователей университета.',
    resourcesTitle: 'Ресурсы и возможности',
    resources: [
      {
        title: 'Электронные ресурсы',
        description: 'Доступ к электронным книгам, журналам и базам данных'
      },
      {
        title: 'Читальные залы',
        description: 'Комфортные пространства для работы и обучения'
      },
      {
        title: 'Редкие издания',
        description: 'Коллекция уникальных и исторических материалов'
      },
      {
        title: 'Онлайн-каталог',
        description: 'Удобный поиск по всем ресурсам библиотеки'
      }
    ],
    ctaTitle: 'Перейти на сайт библиотеки',
    ctaText: 'Для получения полной информации о работе библиотеки, доступа к каталогу и электронным ресурсам перейдите на официальный сайт:',
    buttonText: 'Открыть сайт библиотеки'
  },
  uz: {
    title: 'M. Gorkiy nomidagi ilmiy kutubxona',
    subtitle: 'Rossiyaning eng yirik universitet kutubxonalaridan biri',
    aboutTitle: 'Kutubxona haqida',
    aboutText: 'SPbDU M. Gorkiy nomidagi ilmiy kutubxona - Rossiyaning eng qadimgi va eng yirik kutubxonalaridan biri. 1783 yilda tashkil etilgan u uzoq rivojlanish yo\'lini bosib o\'tdi va bugungi kunda universitet talabalari, o\'qituvchilari va tadqiqotchilari uchun bilim va axborot resurslariga kirishni ta\'minlovchi zamonaviy axborot markazidir.',
    resourcesTitle: 'Resurslar va imkoniyatlar',
    resources: [
      {
        title: 'Elektron resurslar',
        description: 'Elektron kitoblar, jurnallar va ma\'lumotlar bazalariga kirish'
      },
      {
        title: 'O\'qish zallari',
        description: 'Ishlash va o\'qish uchun qulay makonlar'
      },
      {
        title: 'Nadir nashrlar',
        description: 'Nozik va tarixiy materiallar to\'plami'
      },
      {
        title: 'Onlayn katalog',
        description: 'Kutubxona barcha resurslari bo\'yicha qulay qidiruv'
      }
    ],
    ctaTitle: 'Kutubxona saytiga o\'tish',
    ctaText: 'Kutubxona ishi haqida to\'liq ma\'lumot olish, katalog va elektron resurslarga kirish uchun rasmiy saytga o\'ting:',
    buttonText: 'Kutubxona saytini ochish'
  },
  en: {
    title: 'M. Gorky Scientific Library',
    subtitle: 'One of the largest university libraries in Russia',
    aboutTitle: 'About the Library',
    aboutText: 'The M. Gorky Scientific Library of SPbU is one of the oldest and largest libraries in Russia. Founded in 1783, it has gone through a long path of development and today represents a modern information center that provides access to knowledge and information resources for university students, teachers, and researchers.',
    resourcesTitle: 'Resources and Opportunities',
    resources: [
      {
        title: 'Electronic Resources',
        description: 'Access to electronic books, journals, and databases'
      },
      {
        title: 'Reading Rooms',
        description: 'Comfortable spaces for work and study'
      },
      {
        title: 'Rare Editions',
        description: 'Collection of unique and historical materials'
      },
      {
        title: 'Online Catalog',
        description: 'Convenient search across all library resources'
      }
    ],
    ctaTitle: 'Go to Library Website',
    ctaText: 'For complete information about the library\'s work, access to the catalog and electronic resources, visit the official website:',
    buttonText: 'Open Library Website'
  }
};

const Library: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('Library must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  const handleLibraryClick = () => {
    window.open('https://library.spbu.ru/ru/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="library-page">
      <div className="hero-section">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
      </div>

      <div className="content-section">
        <div className="info-card">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>

        <div className="resources-section">
          <h2>{t.resourcesTitle}</h2>
          <div className="resources-grid">
            {t.resources.map((resource, index) => (
              <div key={index} className="resource-item">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <button onClick={handleLibraryClick} className="library-button">
            {t.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
