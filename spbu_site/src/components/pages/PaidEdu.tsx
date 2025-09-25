import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './PaidEdu.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    tableHeaders: { document: string };
    rows: { text: string; href: string }[];
    note?: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Платные образовательные услуги',
    subtitle: 'Образцы и приказы по платным образовательным услугам',
    tableHeaders: { document: 'Документ' },
    rows: [
      { text: 'Образец договора об оказании платных образовательных услуг', href: '/files/dogovor_VO_2024.doc' },
      { text: 'Приказ об установлении размера платы за обучение по основным образовательным программам, реализуемым в филиале СПбГУ в г. Ташкенте, на 2025/2026 учебный год', href: '/files/Приказ_по_стоимости_2025.pdf' },
      { text: 'Приказ об установлении размера платы за обучение по основной образовательной программе «Международный бизнес в цифровой экономике», реализуемой в филиале СПбГУ в г. Ташкенте, для обучающихся 2023 года поступления на 2025/2026 учебный год', href: '/files/Приказ_по_стоимости_2025_доп.pdf' },
    ],
    note: 'Документ об установлении размера платы, взимаемой с родителей (законных представителей) за присмотр и уход за детьми, осваивающими образовательные программы дошкольного образования — отсутствует.'
  },
  uz: {
    title: 'Pullik taʼlim xizmatlari',
    subtitle: 'Pullik taʼlim boʼyicha namunalar va buyruqlar',
    tableHeaders: { document: 'Hujjat' },
    rows: [
      { text: 'Pullik taʼlim xizmatlarini koʼrsatish shartnomasi namunasi', href: '#' },
      { text: 'SPbDU Toshkent filialida 2025/2026 oʼquv yili uchun oʼqish toʼlovi miqdorini belgilash toʼgʼrisidagi buyruq', href: '#' },
      { text: '“Raqamli iqtisodiyotda xalqaro biznes” asosiy taʼlim dasturi boʼyicha 2023 yilda qabul qilingan talabalar uchun 2025/2026 oʼquv yili uchun oʼqish toʼlovi miqdorini belgilash toʼgʼrisidagi buyruq', href: '#' },
    ],
    note: 'Maktabgacha taʼlim dasturlarini egallayotgan bolalar uchun kuzatuv va parvarishlash narxi toʼgʼrisidagi hujjat — mavjud emas.'
  },
  en: {
    title: 'Paid Educational Services',
    subtitle: 'Samples and orders for paid educational services',
    tableHeaders: { document: 'Document' },
    rows: [
      { text: 'Sample contract for the provision of paid educational services', href: '#' },
      { text: 'Order establishing tuition fees for the 2025/2026 academic year at SPbU Tashkent branch', href: '#' },
      { text: 'Order establishing tuition fees for the program “International Business in the Digital Economy” (admitted in 2023) for 2025/2026', href: '#' },
    ],
    note: 'Document on fees for childcare in preschool programs — not available.'
  },
};

const PaidEdu: React.FC = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) {
    throw new Error('PaidEdu must be used within Language Provider');
  }
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-common">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">💼</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="info-section">
          <h2 className="section-title centered-title">{t.subtitle}</h2>
          <div className="section-content">
            <ul className="docs-list">
              {t.rows.map((row, idx) => (
                <li key={idx}>
                  <a className="doc-link" href={row.href} target="_blank" rel="noopener noreferrer">
                    <span className="doc-link-text">{row.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            {t.note && <p className="section-subtitle">{t.note}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidEdu;


