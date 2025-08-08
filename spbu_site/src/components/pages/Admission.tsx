import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
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
      
      <section className="hero">
        <div className="content">
          <h1>{content.title}</h1>
          <h2>{content.subtitle}</h2>
        </div>
      </section>

      <section className="document-section">
        <h2>{content.documentTitle}</h2>
        <div className="document-container">
          <embed src="/files/Прием_2024.pdf" type="application/pdf" />
          <a 
            href="/files/Прием_2024.pdf" 
            download
            className="download-button"
          >
            {content.downloadButton}
          </a>
        </div>
      </section>

      <section className="video-section">
        <h2>{content.videoTitle}</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5f5BRLgkgKM"
            title={content.videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default Admission;
