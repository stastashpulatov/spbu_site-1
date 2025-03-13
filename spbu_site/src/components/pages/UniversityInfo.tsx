import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './UniversityInfo.scss';

type Translations = {
  [key in Language]: {
    title: string;
    description: string;
    button: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Сведения об СПбГУ',
    description: 'Вы будете перенаправлены на официальную страницу СПбГУ с основными сведениями об университете.',
    button: 'Перейти к сведениям'
  },
  uz: {
    title: 'SPbDU haqida ma\'lumot',
    description: 'Siz universitet haqidagi asosiy ma\'lumotlar bilan SPbDUning rasmiy veb-sahifasiga yo\'naltirilasiz.',
    button: 'Ma\'lumotlarga o\'tish'
  },
  en: {
    title: 'Information about SPbU',
    description: 'You will be redirected to the official SPbU webpage with basic information about the university.',
    button: 'Go to information'
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
          onClick={() => {
            window.open('https://spbu.ru/sveden/common', '_blank', 'noopener,noreferrer');
          }}
        >
          {t.button}
        </a>
      </div>
    </div>
  );
};

export default UniversityInfo;
