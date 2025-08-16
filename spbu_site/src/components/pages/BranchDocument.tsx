import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
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
        title: 'Постановление Президента Республики Узбекистан от 30.09.2021 №ПП-4942 «Об организации деятельности филиала федерального государственного бюджетного образовательного учреждения высшего образования "Санкт-Петербургский государственный университет" в г. Ташкенте»',
        downloadText: 'Скачать PDF',
        url: '/files/Поставновление_Президента_Республики_Узбекистан_Об_организации_деятельности.pdf'
      },
      {
        type: 'Соглашение',
        date: '19.01.2021',
        title: 'Соглашение между Правительством Российской Федерации и Правительством Республики Узбекистан от 19.01.2021 «О создании и функционировании филиала образовательной организации высшего образования Санкт-Петербургского государственного университета в Республике Узбекистан»',
        downloadText: 'Скачать PDF',
        url: '/files/Межправительственное_соглашение.pdf' // РЕКОМЕНДАЦИЯ: Переименуйте файл 'Межправительственное_соглашение_филиалы_Узбекистан copy.pdf' в 'Межправительственное_соглашение.pdf'
      },
      {
        type: 'Лицензия',
        date: '15.03.2022',
        title: 'Лицензия на осуществление образовательной деятельности (№ СТ-18-78)',
        downloadText: 'Скачать PDF',
        url: '/files/Лицензия.pdf'
      },
      {
        type: 'Положение',
        date: '', // Дата не указана
        title: 'Положение о филиале федерального государственного бюджетного образовательного учреждения высшего образования «Санкт-Петербургский государственный университет» в г. Ташкенте',
        downloadText: 'Скачать PDF',
        url: '/files/ПОЛОЖЕНИЕ_о_филиале_СПбГУ_в_г_Ташкенте.pdf'
      },
      {
        type: 'Свидетельство',
        date: '', // Дата не указана
        title: 'Свидетельство о государственной регистрации некоммерческой организации',
        downloadText: 'Скачать PDF',
        url: '/files/Свидетельство_о_регистрации.pdf' // РЕКОМЕНДАЦИЯ: Переименуйте файл 'Свидетельство о регистрации.pdf' в 'Свидетельство_о_регистрации.pdf'
      },
      {
        type: 'Приемная кампания',
        date: '2024',
        title: 'Правила приема на обучение по программам бакалавриата в филиал СПбГУ в г. Ташкенте в 2024 году',
        downloadText: 'Скачать PDF',
        url: '/files/Прием_2024.pdf'
      }
    ]
  },
  uz: {
    title: 'Asosiy hujjatlar',
    documents: [
      {
        type: 'Qaror',
        date: '30.09.2021',
        title: 'O‘zbekiston Respublikasi Prezidentining 30.09.2021 yildagi PQ-4942-sonli «Toshkent shahrida "Sankt-Peterburg davlat universiteti" federal davlat byudjet oliy ta’lim muassasasi filialining faoliyatini tashkil etish to‘g‘risida»gi qarori',
        downloadText: 'PDF yuklab olish',
        url: '/files/Поставновление_Президента_Республики_Узбекистан_Об_организации_деятельности.pdf'
      },
      {
        type: 'Kelishuv',
        date: '19.01.2021',
        title: 'Rossiya Federatsiyasi Hukumati va O‘zbekiston Respublikasi Hukumati o‘rtasida 19.01.2021 yildagi «O‘zbekiston Respublikasida Sankt-Peterburg davlat universiteti oliy ta’lim tashkiloti filialini tashkil etish va faoliyat yuritish to‘g‘risida»gi kelishuvi',
        downloadText: 'PDF yuklab olish',
        url: '/files/Межправительственное_соглашение.pdf'
      },
      {
        type: 'Litsenziya',
        date: '15.03.2022',
        title: 'Ta’lim faoliyatini amalga oshirish uchun litsenziya (№ СТ-18-78)',
        downloadText: 'PDF yuklab olish',
        url: '/files/Лицензия.pdf'
      },
      {
        type: 'Nizom',
        date: '', // Sana ko'rsatilmagan
        title: '"Sankt-Peterburg davlat universiteti" federal davlat byudjet oliy ta\'lim muassasasining Toshkent shahridagi filiali toʻgʻrisidagi nizom',
        downloadText: 'PDF yuklab olish',
        url: '/files/ПОЛОЖЕНИЕ_о_филиале_СПбГУ_в_г_Ташкенте.pdf'
      },
      {
        type: 'Guvohnoma',
        date: '', // Sana ko'rsatilmagan
        title: 'Notijorat tashkilotni davlat roʻyxatidan oʻtkazish toʻgʻrisidagi guvohnoma',
        downloadText: 'PDF yuklab olish',
        url: '/files/Свидетельство_о_регистрации.pdf'
      },
      {
        type: 'Qabul kampaniyasi',
        date: '2024',
        title: '2024 yilda SPbDUning Toshkent shahridagi filialiga bakalavriat dasturlari bo‘yicha o‘qishga qabul qilish qoidalari',
        downloadText: 'PDF yuklab olish',
        url: '/files/Прием_2024.pdf'
      }
    ]
  },
  en: {
    title: 'Basic Documents',
    documents: [
      {
        type: 'Decree',
        date: '30.09.2021',
        title: 'Decree of the President of the Republic of Uzbekistan dated 30.09.2021 No. PP-4942 "On the organization of activities of the branch of the federal state budgetary educational institution of higher education "St. Petersburg State University" in Tashkent"',
        downloadText: 'Download PDF',
        url: '/files/Поставновление_Президента_Республики_Узбекистан_Об_организации_деятельности.pdf'
      },
      {
        type: 'Agreement',
        date: '19.01.2021',
        title: 'Agreement between the Government of the Russian Federation and the Government of the Republic of Uzbekistan dated 19.01.2021 "On the establishment and functioning of a branch of the educational organization of higher education of St. Petersburg State University in the Republic of Uzbekistan"',
        downloadText: 'Download PDF',
        url: '/files/Межправительственное_соглашение.pdf'
      },
      {
        type: 'License',
        date: '15.03.2022',
        title: 'License for educational activities (No. СТ-18-78)',
        downloadText: 'Download PDF',
        url: '/files/Лицензия.pdf'
      },
      {
        type: 'Regulation',
        date: '', // Date not specified
        title: 'Regulations on the branch of the "St. Petersburg State University" federal state budgetary educational institution of higher education in Tashkent',
        downloadText: 'Download PDF',
        url: '/files/ПОЛОЖЕНИЕ_о_филиале_СПбГУ_в_г_Ташкенте.pdf'
      },
      {
        type: 'Certificate',
        date: '', // Date not specified
        title: 'Certificate of state registration of a non-profit organization',
        downloadText: 'Download PDF',
        url: '/files/Свидетельство_о_регистрации.pdf'
      },
      {
        type: 'Admission Campaign',
        date: '2024',
        title: 'Rules of admission for bachelor\'s degree programs at the SPbU branch in Tashkent in 2024',
        downloadText: 'Download PDF',
        url: '/files/Прием_2024.pdf'
      }
    ]
  }
};

const BranchDocument: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchDocument must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-document">
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