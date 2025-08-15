import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './Admission.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    generalInfo: string;
    generalInfoText: string;
    documentsTitle: string;
    documentsText: string;
    downloadButton: string;
    videoTitle: string;
    videoSubtitle: string;
    watchOnYouTube: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Приём 2024',
    subtitle: 'Добро пожаловать в СПбГУ в Ташкенте',
    generalInfo: 'Общая информация',
    generalInfoText: 'Узнайте о программах обучения, требованиях к поступающим и процессе подачи документов в филиал СПбГУ в Ташкенте.',
    documentsTitle: 'Документы для поступления',
    documentsText: 'Ознакомьтесь с полным списком необходимых документов для поступления в наш университет.',
    downloadButton: 'Скачать документ',
    videoTitle: 'Инструкция для иностранных абитуриентов',
    videoSubtitle: 'Работа с личным кабинетом',
    watchOnYouTube: 'Посмотреть на YouTube'
  },
  uz: {
    title: 'Qabul 2024',
    subtitle: 'Toshkentdagi SPbDUga xush kelibsiz',
    generalInfo: 'Umumiy ma\'lumot',
    generalInfoText: 'Toshkentdagi SPbDU filialida o\'qish dasturlari, abituriyentlarga qo\'yiladigan talablar va hujjatlarni topshirish jarayoni haqida bilib oling.',
    documentsTitle: 'Qabul uchun hujjatlar',
    documentsText: 'Bizning universitetga qabul uchun zarur bo\'lgan hujjatlar ro\'yxatini ko\'rib chiqing.',
    downloadButton: 'Hujjatni yuklab olish',
    videoTitle: 'Chet ellik abituriyentlar uchun yo\'riqnoma',
    videoSubtitle: 'Shaxsiy kabinet bilan ishlash',
    watchOnYouTube: 'YouTube\'da ko\'rish'
  },
  en: {
    title: 'Admission 2024',
    subtitle: 'Welcome to SPbU in Tashkent',
    generalInfo: 'General Information',
    generalInfoText: 'Learn about study programs, admission requirements, and the document submission process at SPbU Tashkent branch.',
    documentsTitle: 'Admission Documents',
    documentsText: 'Review the complete list of required documents for admission to our university.',
    downloadButton: 'Download Document',
    videoTitle: 'Instructions for Foreign Applicants',
    videoSubtitle: 'Working with Personal Account',
    watchOnYouTube: 'Watch on YouTube'
  }
};

const Admission: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="admission-page">
      <div className="admission-header">
        <div className="header-content">
          <h1>{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
          <div className="header-decoration"></div>
        </div>
      </div>

      <div className="admission-container">
        <div className="info-section">
          <div className="info-card">
            <div className="card-icon">📋</div>
            <h2>{t.generalInfo}</h2>
            <p>{t.generalInfoText}</p>
          </div>
        </div>

        <div className="documents-section">
          <h2>{t.documentsTitle}</h2>
          <p className="section-description">{t.documentsText}</p>
          
          <div className="document-card">
            <div className="document-preview">
              <div className="pdf-icon">📄</div>
              <div className="document-info">
                <h3>Прием_2024.pdf</h3>
                <p>Документ с информацией о приеме 2024</p>
              </div>
            </div>
            <div className="document-actions">
              <a 
                href="/files/Прием_2024.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="preview-button"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                Предварительный просмотр
              </a>
              <a 
                href="/files/Прием_2024.pdf" 
                download
                className="download-button"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                {t.downloadButton}
              </a>
            </div>
          </div>
        </div>

        <div className="video-section">
          <h2>{t.videoTitle}</h2>
          <p className="section-description">{t.videoSubtitle}</p>
          
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/5f5BRLgkgKM"
                title={t.videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>{t.videoTitle}</h3>
              <p>{t.videoSubtitle}</p>
              <a 
                href="https://www.youtube.com/watch?v=5f5BRLgkgKM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="youtube-button"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {t.watchOnYouTube}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
