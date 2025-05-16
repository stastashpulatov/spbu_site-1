import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './BranchDocument.scss';

type DocumentItem = {
  type: string;
  date: string;
  title: string;
  downloadText: string;
  url?: string; // URL to the document file
};

type Translations = {
  [key in Language]: {
    title: string;
    documents: DocumentItem[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Официальные документы',
    documents: [
      {
        type: 'Постановление',
        date: '30.09.2021',
        title: 'Постановление Правительства Республики Узбекистан от 30.09.2021 №ПП-4942 «Об организации деятельности филиала федерального государственного бюджетного образовательного учреждения высшего образования "Санкт-Петербургский государственный университет" в г. Ташкенте»',
        downloadText: 'Скачать PDF',
        url: '/documents/postanovlenie-4942.pdf' // Add your document URL here
      },
      {
        type: 'Соглашение',
        date: '19.01.2021',
        title: 'Соглашение между Правительством Российской Федерации и Правительством Республики Узбекистан от 19.01.2021 «О создании и функционировании филиала образовательной организации высшего образования Санкт-Петербургского государственного университета в Республике Узбекистан»',
        downloadText: 'Скачать PDF'
      },
      {
        type: 'Лицензия',
        date: '15.03.2022',
        title: 'Лицензия на осуществление образовательной деятельности и ведение филиалом образовательной деятельности на русском языке Российской Федерации (№ СТ-18-78)',
        downloadText: 'Скачать PDF'
      }
    ]
  },
  uz: {
    title: 'Asosiy hujjatlar',
    documents: [
      {
        type: 'Qaror',
        date: '30.09.2021',
        title: 'O\'zbekiston Respublikasi Vazirlar Mahkamasining 30.09.2021 yildagi №PP-4942 "Toshkent shahrida "Sankt-Peterburg davlat universiteti" federal davlat byudjet oliy ta\'lim muassasasi filialining faoliyatini tashkil etish to\'g\'risida" qarori',
        downloadText: 'PDF yuklab olish'
      },
      {
        type: 'Kelishuv',
        date: '19.01.2021',
        title: 'Rossiya Federatsiyasi Hukumati va O\'zbekiston Respublikasi Hukumati o\'rtasida 19.01.2021 yildagi "O\'zbekiston Respublikasida Sankt-Peterburg davlat universiteti oliy ta\'lim tashkiloti filialini tashkil etish va faoliyat yuritish to\'g\'risida" kelishuvi',
        downloadText: 'PDF yuklab olish'
      },
      {
        type: 'Litsenziya',
        date: '15.03.2022',
        title: 'Ta\'lim faoliyatini amalga oshirish va filial tomonidan Rossiya Federatsiyasining rus tilida ta\'lim faoliyatini olib borish uchun litsenziya (№ СТ-18-78)',
        downloadText: 'PDF yuklab olish'
      }
    ]
  },
  en: {
    title: 'Basic Documents',
    documents: [
      {
        type: 'Decree',
        date: '30.09.2021',
        title: 'Decree of the Government of the Republic of Uzbekistan dated 30.09.2021 No. PP-4942 "On the organization of activities of the branch of the federal state budgetary educational institution of higher education "St. Petersburg State University" in Tashkent"',
        downloadText: 'Download PDF'
      },
      {
        type: 'Agreement',
        date: '19.01.2021',
        title: 'Agreement between the Government of the Russian Federation and the Government of the Republic of Uzbekistan dated 19.01.2021 "On the establishment and functioning of a branch of the educational organization of higher education of St. Petersburg State University in the Republic of Uzbekistan"',
        downloadText: 'Download PDF'
      },
      {
        type: 'License',
        date: '15.03.2022',
        title: 'License for educational activities and conducting educational activities by the branch in the Russian language of the Russian Federation (No. СТ-18-78)',
        downloadText: 'Download PDF'
      }
    ]
  }
};

const BranchDocument: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchDocument must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`branch-document ${theme}`}>
      <HomeButton />
      <div className="content-container">
        <h1 className="page-title">{t.title}</h1>
        
        <div className="documents-list">
          {t.documents.map((doc, index) => (
            <div className="document-card" key={index}>
              <div className="document-icon">
                <i className="far fa-file-alt"></i>
              </div>
              <div className="document-content">
                <div className="document-header">
                  <span className="document-type">{doc.type}</span>
                  <span className="document-date">{doc.date}</span>
                </div>
                <p className="document-title">{doc.title}</p>
                <a 
                  href={doc.url || '#'} 
                  className="download-button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => !doc.url && e.preventDefault()}
                >
                  <i className="fas fa-download"></i> {doc.downloadText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchDocument;
