import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import './Leadership.scss';

type LeadershipInfo = {
  [key in Language]: {
    title: string;
    director: {
      name: string;
      position: string;
      degree: string;
    };
  };
};

const translations: LeadershipInfo = {
  ru: {
    title: 'Руководство',
    director: {
      name: 'Зиядуллаев Махмуджон Джуракулович',
      position: 'Директор филиала',
      degree: 'Доктор юридических наук (DSc), доцент'
    }
  },
  uz: {
    title: 'Rahbariyat',
    director: {
      name: 'Ziyadullayev Mahmudjon Djurakulovich',
      position: 'Filial direktori',
      degree: 'Yuridik fanlar doktori (DSc), dotsent'
    }
  },
  en: {
    title: 'Leadership',
    director: {
      name: 'Ziyadullaev Mahmudjon Djurakulovich',
      position: 'Branch Director',
      degree: 'Doctor of Law (DSc), Associate Professor'
    }
  }
};

const Leadership: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('Leadership must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`leadership ${theme}`}>
      <div className="content-container">
        <h1 className="title">{t.title}</h1>
        <div className="leadership-grid">
          <div className="leader-card">
            <div className="image-container">
              <img 
                src="/images/director.png" 
                alt={t.director.name}
                className="leader-image"
              />
            </div>
            <div className="leader-info">
              <h2 className="position">{t.director.position}</h2>
              <h3 className="name">{t.director.name}</h3>
              <p className="degree">{t.director.degree}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
