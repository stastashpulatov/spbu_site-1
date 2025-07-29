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
    founders: {
      title: string;
      tableHeaders: {
        name: string;
        address: string;
        phones: string;
        email: string;
        website: string;
      };
      tableData: {
        name: string;
        address: string;
        phones: string;
        email: React.ReactNode;
        website: React.ReactNode;
      }[];
    };
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
        value: 'Федеральное государственное бюджетное образовательное учреждение высшего образования «Санкт-Петербургский государственный университет»'
      },
      {
        field: 'Сокращенное наименование образовательной организации (при наличии)',
        value: 'Санкт-Петербургский государственный университет, Санкт-Петербургский университет, СПбГУ'
      },
      {
        field: 'Дата создания образовательной организации',
        value: 'Санкт-Петербургский государственный университет учрежден указом Петра I от 22 января 1724 года, введенным в действие указом Правительствующего Сената от 28 января 1724 года.'
      },
      {
        field: 'Учредитель образовательной организации',
        value: <p>Учредителем и собственником имущества Санкт-Петербургского государственного университета является Российская Федерация. Функции и полномочия учредителя от имени Российской Федерации выполняет <a href='http://government.ru/'>Правительство Российской Федерации.</a></p>
      },
      {
        field: 'Адрес местонахождения образовательной организации',
        value: 'Россия, 199034, Санкт-Петербург, Университетская наб., д. 7–9'
      },
      {
        field: 'Филиалы образовательной организации',
        value: 'Имеются'
      },
      {
        field: 'Представительства образовательной организации',
        value: 'Имеются'
      },
      {
        field: 'Режим, график работы',
        value: <ul>
          <li>Пн-пт — 8:00–22:00</li>
          <li>Сб — 8:00–18:00</li>
          <li>Вс — выходной</li>
          <li><a href='http://government.ru/'>Подробнее о трудовом распорядке СПбГУ</a></li>
         </ul>
      },
      {
        field: 'Контактные телефоны',
        value: '+7 (812) 325–87–36 (факс)'
      },
      {
        field: 'Адреса электронной почты',
        value: 'spbu@spbu.ru'
      }
    ],
    founders: {
      title: 'Учредители образовательной организации:',
      tableHeaders: {
        name: 'Наименование учредителя',
        address: 'Адрес местонахождения учредителя(ей)',
        phones: 'Контактные телефоны',
        email: 'Адрес электронной почты',
        website: 'Адрес сайта учредителя(ей) в сети «Интернет»'
      },
      tableData: [
        {
          name: 'Правительство Российской Федерации',
          address: 'Россия, 103274, Москва, Краснопресненская наб., д. 2',
          phones: '+7-800-200-84-42',
          email: <a href='http://services.government.ru/letters/'>http://services.government.ru/letters/</a>,
          website: <a href="http://government.ru">http://government.ru</a>
        }
      ]
    }
  },
  uz: {
    title: 'Asosiy ma\'lumotlar',
    tableHeaders: {
      field: 'Maydon nomi',
      value: 'Qiymati'
    },
    tableData: [
      {
        field: 'Ta\'lim muassasasining to\'liq nomi',
        value: '«Sankt-Peterburg davlat universiteti» federal davlat byudjet oliy ta\'lim muassasasi'
      },
      {
        field: 'Ta\'lim muassasasining qisqartirilgan nomi (agar mavjud bo\'lsa)',
        value: 'Sankt-Peterburg davlat universiteti, Sankt-Peterburg universiteti, SPbGU'
      },
      {
        field: 'Ta\'lim muassasasining tashkil etilgan sanasi',
        value: 'Sankt-Peterburg davlat universiteti Pyotr I ning 1724 yil 22 yanvardagi farmoni bilan tashkil etilgan bo\'lib, 1724 yil 28 yanvardagi Senat farmoni bilan amalga oshirilgan.'
      },
      {
        field: 'Ta\'lim muassasasining asoschisi',
        value: <p>Sankt-Peterburg davlat universitetining asoschisi va mulk egasi Rossiya Federatsiyasidir. Asoschining vakolatlarini Rossiya Federatsiyasi nomidan <a href='http://government.ru/'>Rossiya Federatsiyasi Hukumati</a> amalga oshiradi.</p>
      },
      {
        field: 'Ta\'lim muassasasining joylashgan manzili',
        value: 'Rossiya, 199034, Sankt-Peterburg, Universitetskaya nab., 7–9'
      },
      {
        field: 'Ta\'lim muassasasining filiallari',
        value: 'Mavjud'
      },
      {
        field: 'Ta\'lim muassasasining vakolatxonalari',
        value: 'Mavjud'
      },
      {
        field: 'Ish tartibi, ish jadvali',
        value: <ul>
          <li>Dushanba-Juma: 8:00–22:00</li>
          <li>Shanba: 8:00–18:00</li>
          <li>Yakshanba: dam olish kuni</li>
          <li><a href='http://government.ru/'>SPbGU mehnat tartibi haqida batafsil</a></li>
         </ul>
      },
      {
        field: 'Aloqa telefonlari',
        value: '+7 (812) 325–87–36 (faks)'
      },
      {
        field: 'Elektron pochta manzillari',
        value: 'spbu@spbu.ru'
      }
    ],
    founders: {
      title: 'Ta\'lim muassasasining asoschilari:',
      tableHeaders: {
        name: 'Asoschining nomi',
        address: 'Asoschining joylashgan manzili',
        phones: 'Aloqa telefonlari',
        email: 'Elektron pochta manzili',
        website: '«Internet» tarmog\'idagi asoschining veb-sayt manzili'
      },
      tableData: [
        {
          name: 'Rossiya Federatsiyasi Hukumati',
          address: 'Rossiya, 103274, Moskva, Krasnopresnenskaya nab., 2-uy',
          phones: '+7-800-200-84-42',
          email: <a href='http://services.government.ru/letters/'>http://services.government.ru/letters/</a>,
          website: <a href="http://government.ru">http://government.ru</a>
        }
      ]
    }
  },
  en: {
    title: 'Basic Information',
    tableHeaders: {
      field: 'Field Name',
      value: 'Value'
    },
    tableData: [
      {
        field: 'Full name of the educational organization',
        value: 'Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University"'
      },
      {
        field: 'Abbreviated name of the educational organization (if available)',
        value: 'Saint Petersburg State University, Saint Petersburg University, SPbU'
      },
      {
        field: 'Date of establishment of the educational organization',
        value: 'Saint Petersburg State University was established by the decree of Peter I on January 22, 1724, enacted by the decree of the Governing Senate on January 28, 1724.'
      },
      {
        field: 'Founder of the educational organization',
        value: <p>The founder and owner of the property of Saint Petersburg State University is the Russian Federation. The functions and powers of the founder on behalf of the Russian Federation are performed by the <a href='http://government.ru/'>Government of the Russian Federation.</a></p>
      },
      {
        field: 'Location address of the educational organization',
        value: 'Russia, 199034, Saint Petersburg, Universitetskaya nab., 7–9'
      },
      {
        field: 'Branches of the educational organization',
        value: 'Available'
      },
      {
        field: 'Representative offices of the educational organization',
        value: 'Available'
      },
      {
        field: 'Working hours, schedule',
        value: <ul>
          <li>Mon-Fri: 8:00 AM–10:00 PM</li>
          <li>Sat: 8:00 AM–6:00 PM</li>
          <li>Sun: day off</li>
          <li><a href='http://government.ru/'>More about SPbU work regulations</a></li>
         </ul>
      },
      {
        field: 'Contact phones',
        value: '+7 (812) 325–87–36 (fax)'
      },
      {
        field: 'Email addresses',
        value: 'spbu@spbu.ru'
      }
    ],
    founders: {
      title: 'Founders of the educational organization:',
      tableHeaders: {
        name: 'Founder Name',
        address: 'Founder Location Address',
        phones: 'Contact Phones',
        email: 'Email Address',
        website: 'Founder Website in the Internet'
      },
      tableData: [
        {
          name: 'Government of the Russian Federation',
          address: 'Russia, 103274, Moscow, Krasnopresnenskaya nab., 2',
          phones: '+7-800-200-84-42',
          email: <a href='http://services.government.ru/letters/'>http://services.government.ru/letters/</a>,
          website: <a href="http://government.ru">http://government.ru</a>
        }
      ]
    }
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
          <h2>{t.founders.title}</h2>
          <table className="founders-table">
            <thead>
              <tr>
                <th>{t.founders.tableHeaders.name}</th>
                <th>{t.founders.tableHeaders.address}</th>
                <th>{t.founders.tableHeaders.phones}</th>
                <th>{t.founders.tableHeaders.email}</th>
                <th>{t.founders.tableHeaders.website}</th>
              </tr>
            </thead>
            <tbody>
              {t.founders.tableData.map((founder, index) => (
                <tr key={index}>
                  <td>{founder.name}</td>
                  <td>{founder.address}</td>
                  <td>{founder.phones}</td>
                  <td>{founder.email}</td>
                  <td>{founder.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BranchCommon;