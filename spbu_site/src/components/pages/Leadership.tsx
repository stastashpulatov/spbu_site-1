import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './Leadership.scss';

type LeadershipInfo = {
  name: string;
  position: string;
  image: string;
  email: string;
  phone: string;
  office: string;
};

type Translations = {
  [key in Language]: {
    title: string;
    contactInfo: {
      email: string;
      phone: string;
      office: string;
    };
    leadership: LeadershipInfo[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Руководство',
    contactInfo: {
      email: 'Эл. почта',
      phone: 'Телефон',
      office: 'Кабинет'
    },
    leadership: [
      {
        name: 'Ходжаев Алишер Сайдуллаевич',
        position: 'Директор филиала',
        image: '/images/director.png',
        email: 'a.khodjaev@spbu.ru',
        phone: '+998 71 203 22 06',
        office: '201'
      }
    ]
  },
  uz: {
    title: 'Rahbariyat',
    contactInfo: {
      email: 'Email',
      phone: 'Telefon',
      office: 'Kabinet'
    },
    leadership: [
      {
        name: 'Xo\'jayev Alisher Saydullayevich',
        position: 'Filial direktori',
        image: '/images/director.png',
        email: 'a.khodjaev@spbu.ru',
        phone: '+998 71 203 22 06',
        office: '201'
      }
    ]
  },
  en: {
    title: 'Leadership',
    contactInfo: {
      email: 'Email',
      phone: 'Phone',
      office: 'Office'
    },
    leadership: [
      {
        name: 'Alisher Khodjaev',
        position: 'Branch Director',
        image: '/images/director.png',
        email: 'a.khodjaev@spbu.ru',
        phone: '+998 71 203 22 06',
        office: '201'
      }
    ]
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
      <HomeButton />
      <div className="content-container">
        <h1>{t.title}</h1>
        <div className="leadership-grid">
          {t.leadership.map((leader, index) => (
            <div key={index} className="leader-card">
              <div className="image-container">
                <img src={leader.image} alt={leader.name} />
              </div>
              <div className="info-container">
                <h2>{leader.name}</h2>
                <h3>{leader.position}</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="label">{t.contactInfo.email}:</span>
                    <a href={`mailto:${leader.email}`} className="value">
                      {leader.email}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="label">{t.contactInfo.phone}:</span>
                    <a href={`tel:${leader.phone}`} className="value">
                      {leader.phone}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="label">{t.contactInfo.office}:</span>
                    <span className="value">{leader.office}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
