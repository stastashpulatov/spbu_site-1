import React from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import { ExternalLink } from 'lucide-react';
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
  const { theme } = useTheme();
  const langContext = React.useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('UniversityInfo must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`university-info ${theme}`}>
      <div className="content-container">
        <div className="text-content">
          <h1 className="title">{t.title}</h1>
          <p className="description">{t.description}</p>
        </div>
        <a
          href="https://spbu.ru/sveden/common"
          target="_blank"
          rel="noopener noreferrer"
          className="info-button"
        >
          <span>{t.button}</span>
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default UniversityInfo;
