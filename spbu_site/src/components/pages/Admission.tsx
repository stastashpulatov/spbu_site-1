import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './Admission.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    downloadButton: string;
    documentTitle: string;
    videoTitle: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Приём 2024',
    subtitle: 'Общая информация',
    downloadButton: 'Скачать документ',
    documentTitle: 'Документы для поступления',
    videoTitle: 'Инструкция для поступающих'
  },
  uz: {
    title: 'Qabul 2024',
    subtitle: 'Umumiy ma\'lumot',
    downloadButton: 'Hujjatni yuklab olish',
    documentTitle: 'Qabul uchun hujjatlar',
    videoTitle: 'Abituriyentlar uchun yo\'riqnoma'
  },
  en: {
    title: 'Admission 2024',
    subtitle: 'General Information',
    downloadButton: 'Download Document',
    documentTitle: 'Admission Documents',
    videoTitle: 'Instructions for Applicants'
  }
};

const Admission: React.FC = () => {
  const langContext = useContext(LanguageContext);
  const { theme } = useTheme();
  
  if (!langContext) {
    throw new Error('Admission must be used within Language Provider');
  }
  
  const { language } = langContext;
  const content = translations[language];

  return (
    <div className={`admission-page ${theme}`}>
      <HomeButton />

      <section className="hero">
        <div className="content">
          <h1>{content.title}</h1>
          <h2>{content.subtitle}</h2>
        </div>
      </section>

      <section className="document-section">
        <h2>{content.documentTitle}</h2>
        <div className="document-container">
          <div className="document-placeholder">
            <p>Документы для поступления будут доступны в ближайшее время</p>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2>{content.videoTitle}</h2>
        <div className="video-container">
          <div className="video-placeholder">
            <p>Видео будет добавлено позже</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
