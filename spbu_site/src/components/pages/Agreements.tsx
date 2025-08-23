import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './Agreements.scss';

type Translations = {
  [key in Language]: {
    title: string;
    agreements: {
      id: number;
      title: string;
      link: string;
      date: string;
      type: string;
    }[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Соглашения',
    agreements: [
      {
        id: 1,
        title: 'Соглашение между Правительством Российской Федерации и Правительством Республики Узбекистан от 19.01.2021 «О создании и функционировании филиала образовательной организации высшего образования Санкт-Петербургского государственного университета в Республике Узбекистан»',
        link: '/files/Межправительственное_соглашение_филиалы_Узбекистан.pdf',
        date: '19.01.2021',
        type: 'Межправительственное'
      },
      {
        id: 2,
        title: 'Соглашение о сотрудничестве между Министерством высшего и среднего специального образования Республики Узбекистан и Санкт-Петербургским государственным университетом',
        link: '/files/Соглашение_о_сотрудничестве.pdf',
        date: '25.02.2021',
        type: 'Межведомственное'
      },
      {
        id: 3,
        title: 'Соглашение о сотрудничестве между Санкт-Петербургским государственным университетом и Национальным университетом Узбекистана имени Мирзо Улугбека',
        link: '/files/Соглашение_НУУз.pdf',
        date: '15.03.2021',
        type: 'Межвузовское'
      },
      {
        id: 4,
        title: 'Соглашение о сотрудничестве между Санкт-Петербургским государственным университетом и Ташкентским государственным экономическим университетом',
        link: '/files/Соглашение_ТГЭУ.pdf',
        date: '20.03.2021',
        type: 'Межвузовское'
      },
      {
        id: 5,
        title: 'Соглашение о сотрудничестве между Санкт-Петербургским государственным университетом и Университетом мировой экономики и дипломатии',
        link: '/files/Соглашение_УМЭД.pdf',
        date: '25.03.2021',
        type: 'Межвузовское'
      }
    ]
  },
  uz: {
    title: 'Kelishuvlar',
    agreements: [
      {
        id: 1,
        title: 'Rossiya Federatsiyasi Hukumati va O\'zbekiston Respublikasi Hukumati o\'rtasidagi kelishuv 19.01.2021 «O\'zbekiston Respublikasida Sankt-Peterburg davlat universiteti oliy ta\'lim muassasasi filialini yaratish va uning faoliyatini amalga oshirish to\'g\'risida»',
        link: '/files/Межправительственное_соглашение_филиалы_Узбекистан.pdf',
        date: '19.01.2021',
        type: 'Hukumatiaro'
      },
      {
        id: 2,
        title: 'O\'zbekiston Respublikasi oliy va o\'rta maxsus ta\'lim vazirligi va Sankt-Peterburg davlat universiteti o\'rtasidagi hamkorlik to\'g\'risidagi kelishuv',
        link: '/files/Соглашение_о_сотрудничестве.pdf',
        date: '25.02.2021',
        type: 'Vazirliklararo'
      },
      {
        id: 3,
        title: 'Sankt-Peterburg davlat universiteti va Mirzo Ulug\'bek nomidagi O\'zbekiston milliy universiteti o\'rtasidagi hamkorlik to\'g\'risidagi kelishuv',
        link: '/files/Соглашение_НУУз.pdf',
        date: '15.03.2021',
        type: 'Universitetlararo'
      },
      {
        id: 4,
        title: 'Sankt-Peterburg davlat universiteti va Toshkent davlat iqtisodiyot universiteti o\'rtasidagi hamkorlik to\'g\'risidagi kelishuv',
        link: '/files/Соглашение_ТГЭУ.pdf',
        date: '20.03.2021',
        type: 'Universitetlararo'
      },
      {
        id: 5,
        title: 'Sankt-Peterburg davlat universiteti va Jahon iqtisodiyoti va diplomatiyasi universiteti o\'rtasidagi hamkorlik to\'g\'risidagi kelishuv',
        link: '/files/Соглашение_УМЭД.pdf',
        date: '25.03.2021',
        type: 'Universitetlararo'
      }
    ]
  },
  en: {
    title: 'Agreements',
    agreements: [
      {
        id: 1,
        title: 'Agreement between the Government of the Russian Federation and the Government of the Republic of Uzbekistan dated 19.01.2021 "On the creation and functioning of a branch of the higher education organization Saint Petersburg State University in the Republic of Uzbekistan"',
        link: '/files/Межправительственное_соглашение_филиалы_Узбекистан.pdf',
        date: '19.01.2021',
        type: 'Intergovernmental'
      },
      {
        id: 2,
        title: 'Agreement on cooperation between the Ministry of Higher and Secondary Special Education of the Republic of Uzbekistan and Saint Petersburg State University',
        link: '/files/Соглашение_о_сотрудничестве.pdf',
        date: '25.02.2021',
        type: 'Interdepartmental'
      },
      {
        id: 3,
        title: 'Agreement on cooperation between Saint Petersburg State University and Mirzo Ulugbek National University of Uzbekistan',
        link: '/files/Соглашение_НУУз.pdf',
        date: '15.03.2021',
        type: 'Interuniversity'
      },
      {
        id: 4,
        title: 'Agreement on cooperation between Saint Petersburg State University and Tashkent State University of Economics',
        link: '/files/Соглашение_ТГЭУ.pdf',
        date: '20.03.2021',
        type: 'Interuniversity'
      },
      {
        id: 5,
        title: 'Agreement on cooperation between Saint Petersburg State University and University of World Economy and Diplomacy',
        link: '/files/Соглашение_УМЭД.pdf',
        date: '25.03.2021',
        type: 'Interuniversity'
      }
    ]
  }
};

const Agreements: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('Agreements must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="agreements-page">
      <div className="content-container">
        <h1 className="page-title">{t.title}</h1>
        
        <div className="documents-list">
          {t.agreements.map((doc) => (
            <div key={doc.id} className="document-item">
              <div className="document-content">
                <div className="document-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="document-info">
                  <div className="document-meta">
                    <span className="document-type">{doc.type}</span>
                    <span className="document-date">{doc.date}</span>
                  </div>
                  <div className="document-title">
                    {doc.title}
                  </div>
                </div>
                <a href={doc.link} className="download-button" download target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {language === 'ru' ? 'Скачать PDF' : language === 'uz' ? 'PDF yuklab olish' : 'Download PDF'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agreements;
