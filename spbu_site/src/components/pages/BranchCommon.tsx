import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './BranchCommon.scss';

type Translations = {
  [key in Language]: {
    title: string;
    tableHeaders: {
      field: string;
      value: string;
    };
    tableData: {
      field: string;
      value: React.ReactNode;
    }[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Основные сведения',
    tableHeaders: {
      field: 'Наименование',
      value: 'Значение'
    },
    tableData: [
      {
        field: 'Полное наименование образовательной организации',
        value: ''
      },
      {
        field: 'Сокращенное наименование образовательной организации (при наличии)',
        value: ''
      },
      {
        field: 'Дата создания образовательной организации',
        value: ''
      },
      {
        field: 'Адрес местонахождения образовательной организации',
        value: ''
      },
      {
        field: 'Филиалы образовательной организации',
        value: ''
      },
      {
        field: 'Представительства образовательной организации',
        value: ''
      },
      {
        field: 'Режим, график работы',
        value: <>
          
        </>
      },
      {
        field: 'Контактные телефоны',
        value: ''
      },
      {
        field: 'Адреса электронной почты',
        value: ''
      }
    ]
  },
  uz: {
    title: 'Asosiy ma\'lumotlar',
    tableHeaders: {
      field: 'Nomi',
      value: 'Qiymati'
    },
    tableData: [
      {
        field: 'Ta\'lim tashkilotining to\'liq nomi',
        value: 'O\'zbekiston Respublikasi Olmaliq shahridagi "MISIS" Milliy tadqiqot texnologiya universiteti federal davlat avtonom oliy ta\'lim muassasasi filiali, "MISIS" MTTU Olmaliq filiali "MISIS" MTTU OF'
      },
      {
        field: 'Ta\'lim tashkilotining qisqartirilgan nomi (mavjud bo\'lsa)',
        value: '"MISIS" MTTU Olmaliq filiali "MISIS" MTTU OF'
      },
      {
        field: 'Ta\'lim tashkiloti tashkil etilgan sana',
        value: '11.05.2018'
      },
      {
        field: 'Ta\'lim tashkilotining joylashgan manzili',
        value: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy'
      },
      {
        field: 'Ta\'lim tashkilotining filiallari',
        value: 'mavjud emas'
      },
      {
        field: 'Ta\'lim tashkilotining vakolatxonalari',
        value: 'mavjud emas'
      },
      {
        field: 'Ish tartibi, ish jadvali',
        value: <>
          Dushanba - Juma: 9:00 - 18:00. Tushlik: 13:00 - 14:00.<br/>
          Shanba: 9:00 - 16:00
        </>
      },
      {
        field: 'Aloqa telefonlari',
        value: '+998 70 614-22-64:'
      },
      {
        field: 'Elektron pochta manzillari',
        value: 'info@misis.uz'
      }
    ]
  },
  en: {
    title: 'Basic information',
    tableHeaders: {
      field: 'Name',
      value: 'Value'
    },
    tableData: [
      {
        field: 'Full name of the educational organization',
        value: 'Branch of the federal state autonomous educational institution of higher education "National Research Technological University "MISIS" in Almalyk, Republic of Uzbekistan, Almalyk branch of NUST "MISIS" AB NUST "MISIS"'
      },
      {
        field: 'Abbreviated name of the educational organization (if any)',
        value: 'Almalyk branch of NUST "MISIS" AB NUST "MISIS"'
      },
      {
        field: 'Date of establishment of the educational organization',
        value: '11.05.2018'
      },
      {
        field: 'Address of the educational organization',
        value: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street'
      },
      {
        field: 'Branches of the educational organization',
        value: 'none'
      },
      {
        field: 'Representative offices of the educational organization',
        value: 'none'
      },
      {
        field: 'Working hours, schedule',
        value: <>
          Monday - Friday: 9:00 AM - 6:00 PM. Lunch: 1:00 PM - 2:00 PM.<br/>
          Saturday: 9:00 AM - 4:00 PM
        </>
      },
      {
        field: 'Contact phones',
        value: '+998 70 614-22-64:'
      },
      {
        field: 'Email addresses',
        value: 'info@misis.uz'
      }
    ]
  }
};

const BranchCommon: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchCommon must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`branch-common ${theme}`}>
      <HomeButton />
      <div className="content-container">
        <div className="header">
          <span className="header-icon">📋</span>
          <h1>{t.title}</h1>
        </div>
        <div className="info-table-container">
          <table className="info-table">
            <thead>
              <tr>
                <th>{t.tableHeaders.field}</th>
                <th>{t.tableHeaders.value}</th>
              </tr>
            </thead>
            <tbody>
              {t.tableData.map((row, index) => (
                <tr key={index}>
                  <td className="field-name">{row.field}</td>
                  <td className="field-value">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="founders-section">
          <h2>Учредители образовательной организации:</h2>
          <table className="founders-table">
            <thead>
              <tr>
                <th>Наименование учредителя</th>
                <th>Фамилия, имя, отчество учредителя (ей) образовательной организации</th>
                <th>Адрес местонахождения учредителя(ей)</th>
                <th>Контактные телефоны</th>
                <th>Адрес электронной почты</th>
                <th>Адрес сайта учредителя(ей) в сети «Интернет»</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BranchCommon;
