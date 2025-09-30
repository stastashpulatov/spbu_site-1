import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchVacant.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    empty: string;
    tableHeaders: {
      code: string;
      name: string;
      level: string;
      program: string;
      course: string;
      form: string;
      fundingTitle: string;
      federal: string;
      regional: string;
      local: string;
      contract: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'Вакантные места для приема (перевода) обучающихся',
    subtitle: 'Информация о количестве вакантных мест для приёма (перевода)',
    empty: 'Отсутствует',
    tableHeaders: {
      code: 'Код специальности, направления подготовки, шифр группы научных специальностей',
      name: 'Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей',
      level: 'Уровень образования',
      program: 'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
      course: 'Курс',
      form: 'Форма обучения',
      fundingTitle: 'Количество вакантных мест для приема (перевода) на места, финансируемые за счет',
      federal: 'бюджетных ассигнований федерального бюджета',
      regional: 'бюджетов субъектов Российской Федерации',
      local: 'местных бюджетов',
      contract: 'по договорам об образовании за счет средств физических и (или) юридических лиц'
    }
  },
  uz: {
    title: "Qabul (ko'chirish) uchun bo'sh o'rinlar",
    subtitle: "Qabul (ko'chirish) uchun bo'sh o'rinlar soni haqida ma'lumot",
    empty: 'Mavjud emas',
    tableHeaders: {
      code: 'Mutaxassislik kodi, tayyorlov yo\'nalishi, ilmiy mutaxassisliklar guruhi shifri',
      name: 'Kasb, mutaxassislik, tayyorlov yo\'nalishi nomi, ilmiy mutaxassisliklar guruhining nomi',
      level: "Ta'lim darajasi",
      program: "Ta'lim dasturi, yo'nalishi, profili, ilmiy mutaxassislik shifri va nomi",
      course: 'Kurs',
      form: "Ta'lim shakli",
      fundingTitle: "Qabul (ko'chirish) uchun bo'sh o'rinlar soni quyidagi manbalar hisobidan moliyalashtiriladigan joylar uchun",
      federal: 'Federal byudjet mablag\'lari',
      regional: 'Rossiya Federatsiyasi sub\'yektlari byudjeti',
      local: 'Mahalliy byudjetlar',
      contract: 'Jismoniy va (yoki) yuridik shaxslarning mablag\'lari hisobidan ta\'lim to\'g\'risidagi shartnomalar bo\'yicha'
    }
  },
  en: {
    title: 'Vacant places for admission (transfer)',
    subtitle: 'Information on the number of vacant places for admission (transfer)',
    empty: 'Absent',
    tableHeaders: {
      code: 'Specialty code, training direction, scientific specialties group code',
      name: 'Name of profession, specialty, training direction, name of scientific specialties group',
      level: 'Education level',
      program: 'Educational program, orientation, profile, code and name of scientific specialty',
      course: 'Course',
      form: 'Form of education',
      fundingTitle: 'Number of vacant places for admission (transfer) to places financed by',
      federal: 'Federal budget allocations',
      regional: 'Budgets of the subjects of the Russian Federation',
      local: 'Local budgets',
      contract: 'Contracts for education at the expense of funds of individuals and (or) legal entities'
    }
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
          <span className="main-header-icon">🎯</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="info-section vacant-block">
          <h2 className="section-title centered-title">{t.subtitle}</h2>
          <div className="table-container">
            <div className="table-wrapper">
              <table className="info-table vacant-table" role="table">
                <thead>
                  <tr>
                    <th rowSpan={2}>{t.tableHeaders.code}</th>
                    <th rowSpan={2}>{t.tableHeaders.name}</th>
                    <th rowSpan={2}>{t.tableHeaders.level}</th>
                    <th rowSpan={2}>{t.tableHeaders.program}</th>
                    <th rowSpan={2}>{t.tableHeaders.course}</th>
                    <th rowSpan={2}>{t.tableHeaders.form}</th>
                    <th colSpan={4} className="group-head">{t.tableHeaders.fundingTitle}</th>
                  </tr>
                  <tr className="subhead">
                    <th>{t.tableHeaders.federal}</th>
                    <th>{t.tableHeaders.regional}</th>
                    <th>{t.tableHeaders.local}</th>
                    <th>{t.tableHeaders.contract}</th>
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


