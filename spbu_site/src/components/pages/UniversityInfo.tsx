import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './UniversityInfo.scss';

type Translations = {
  [key in Language]: {
    title: string;
    description: string;
    button: string;
    submenu: {
      title: string;
      description: string;
      link: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'Сведения об СПбГУ',
    description: 'Вы будете перенаправлены на официальную страницу СПбГУ с основными сведениями об университете.',
    button: 'Перейти к сведениям',
    submenu: {
      title: 'Сведения об СПбГУ',
      description: 'Вы будете перенаправлены на официальную страницу СПбГУ с основными сведениями об университете.',
      link: 'https://spbu.ru/sveden/common'
    }
  },
  uz: {
    title: 'SPbDU haqida ma\'lumot',
    description: 'Siz universitet haqidagi asosiy ma\'lumotlar bilan SPbDUning rasmiy veb-sahifasiga yo\'naltirilasiz.',
    button: 'Ma\'lumotlarga o\'tish',
    submenu: {
      title: 'SPbDU haqida ma\'lumot',
      description: 'Siz universitet haqidagi asosiy ma\'lumotlar bilan SPbDUning rasmiy veb-sahifasiga yo\'naltirilasiz.',
      link: 'https://spbu.ru/sveden/common'
    }
  },
  en: {
    title: 'Information about SPbU',
    description: 'You will be redirected to the official SPbU webpage with basic information about the university.',
    button: 'Go to information',
    submenu: {
      title: 'Information about SPbU',
      description: 'You will be redirected to the official SPbU webpage with basic information about the university.',
      link: 'https://spbu.ru/sveden/common'
    }
  }
};

const UniversityInfo: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('UniversityInfo must be used within a LanguageProvider');
  
  const { language } = context;
  const t = translations[language];

  return (
    <div className="university-info">
      <div className="info-content">
        <h1>{t.title}</h1>
        <p>{t.description}</p>
        <a
          href="https://spbu.ru/sveden/common"
          target="_blank"
          rel="noopener noreferrer"
          className="info-link"
        >
          {t.button}
        </a>
      </div>
      <div className="submenu">
        {Object.values(translations).map((submenu, index) => (
          <div key={index}>
            <h1>{submenu.submenu.title}</h1>
            <p>{submenu.submenu.description}</p>
            <a href={submenu.submenu.link} className="btn">{submenu.button}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityInfo;
