import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchInter.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    tableHeaders: {
      country: string;
      organization: string;
      details: string;
    };
    empty: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Международное сотрудничество',
    subtitle: 'Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки',
    tableHeaders: {
      country: 'Название государства',
      organization: 'Наименование организации',
      details: 'Реквизиты договора',
    },
    empty: 'Отсутствует',
  },
  uz: {
    title: 'Xalqaro hamkorlik',
    subtitle: "Ta'lim va fan sohasida xorijiy va (yoki) xalqaro tashkilotlar bilan tuzilgan va tuzilishi rejalashtirilgan shartnomalar to'g'risida ma'lumot",
    tableHeaders: {
      country: 'Davlat nomi',
      organization: 'Tashkilot nomi',
      details: 'Shartnoma rekvizitlari',
    },
    empty: 'Mavjud emas',
  },
  en: {
    title: 'International cooperation',
    subtitle: 'Information about concluded and planned agreements with foreign and (or) international organizations on education and science',
    tableHeaders: {
      country: 'Country name',
      organization: 'Organization name',
      details: 'Agreement details',
    },
    empty: 'Absent',
  },
};

const BranchInter: React.FC = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) throw new Error('BranchInter must be used within Language Provider');
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-common">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">🌍</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="info-section inter-block">
          <h2 className="section-title centered-title">{t.subtitle}</h2>
          <div className="table-container">
            <div className="table-wrapper">
              <table className="info-table inter-table" role="table">
                <thead>
                  <tr>
                    <th scope="col">{t.tableHeaders.country}</th>
                    <th scope="col">{t.tableHeaders.organization}</th>
                    <th scope="col">{t.tableHeaders.details}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label={t.tableHeaders.country}>{t.empty}</td>
                    <td data-label={t.tableHeaders.organization}>{t.empty}</td>
                    <td data-label={t.tableHeaders.details}>{t.empty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchInter;