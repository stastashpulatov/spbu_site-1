import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchVacant.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    empty: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Вакантные места для приема (перевода) обучающихся',
    subtitle: 'Информация о количестве вакантных мест для приёма (перевода)',
    empty: 'Отсутствует',
  },
  uz: {
    title: "Qabul (ko'chirish) uchun bo'sh o'rinlar",
    subtitle: "Qabul (ko'chirish) uchun bo'sh o'rinlar soni haqida ma'lumot",
    empty: 'Mavjud emas',
  },
  en: {
    title: 'Vacant places for admission (transfer)',
    subtitle: 'Information on the number of vacant places for admission (transfer)',
    empty: 'Absent',
  },
};

const BranchVacant: React.FC = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) throw new Error('BranchVacant must be used within Language Provider');
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-common">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">📋</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="info-section vacant-block">
          <h2 className="section-title centered-title">{t.subtitle}</h2>
          <div className="table-container">
            <div className="table-wrapper">
              <table className="info-table vacant-table" role="table">
                <thead>
                  <tr>
                    <th rowSpan={2}>Код специальности, направления подготовки, шифр группы научных специальностей</th>
                    <th rowSpan={2}>Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей</th>
                    <th rowSpan={2}>Уровень образования</th>
                    <th rowSpan={2}>Образовательная программа, направленность, профиль, шифр и наименование научной специальности</th>
                    <th rowSpan={2}>Курс</th>
                    <th rowSpan={2}>Форма обучения</th>
                    <th colSpan={4} className="group-head">Количество вакантных мест для приема (перевода) на места, финансируемые за счет</th>
                  </tr>
                  <tr className="subhead">
                    <th>бюджетных ассигнований федерального бюджета</th>
                    <th>бюджетов субъектов Российской Федерации</th>
                    <th>местных бюджетов</th>
                    <th>по договорам об образовании за счет средств физических и (или) юридических лиц</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <td key={i}>{t.empty}</td>
                    ))}
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

export default BranchVacant;


