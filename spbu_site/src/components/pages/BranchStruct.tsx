import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchStruct.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    tableHeaders: {
      number: string;
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      regulation: string;
      formation: string;
      phone: string;
    };
    tableData: {
      id: number;
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      regulation: string;
      formation: string;
      phone: string;
    }[];
    departmentTableHeaders: {
      number: string;
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      documents: string;
      info: string;
      phone: string;
    };
    departmentTableData: {
      id: number;
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      documents: string;
      info: string;
      phone: string;
    }[];
  };
};

const translations: Translations = {
  ru: {
    title: 'СТРУКТУРА И ОРГАНЫ УПРАВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИЕЙ',
    subtitle: 'Наука',
    tableHeaders: {
      number: '#',
      name: 'Наименование органа управления',
      head: 'ФИО руководителя органа управления',
      position: 'Должность руководителя органа управления',
      address: 'Адрес местонахождения органа управления',
      website: 'Адрес официального сайта в сети "Интернет"',
      email: 'Адреса электронной почты органа управления',
      regulation: 'Положение об органе управления',
      formation: 'Порядок формирования',
      phone: 'Контактный телефон'
    },
    tableData: [
      {
        id: 1,
        name: 'Ученый совет',
        head: 'Умаров Фарходбек Якубович',
        position: 'Председатель Ученого совета',
        address: 'Республика Узбекистан,Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        website: 'https://misis.uz',
        email: 'info@misis.uz',
        regulation: 'Положение об ученом совете',
        formation: '',
        phone: '+998 70 614-22-64; +998 70 614-22-64'
      },
      {
        id: 2,
        name: 'Директор филиала',
        head: 'Умаров Фарходбек Якубович',
        position: 'Директор',
        address: 'Республика Узбекистан,Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        website: 'https://misis.uz',
        email: 'info@misis.uz',
        regulation: 'нет',
        formation: '',
        phone: '+998 70 614-22-64; +998 70 614-22-64'
      }
    ],
    departmentTableHeaders: {
      number: '№',
      name: 'Наименование структурного подразделения',
      head: 'ФИО руководителя структурного подразделения',
      position: 'Должность руководителя структурного подразделения',
      address: 'Адрес местонахождения структурного подразделения',
      website: 'Адрес официального сайта в сети "Интернет" структурного подразделения (при наличии)',
      email: 'Адреса электронной почты структурного подразделения (при наличии)',
      documents: 'Сведения о наличии положений о подразделениях с приложением электронных копий указанных документов, подписанных электронной подписью',
      info: 'Информация о подразделении',
      phone: 'Контактный телефон структурного подразделения (при наличии)'
    },
    departmentTableData: [
      {
        id: 1,
        name: 'Учебно-методический отдел(УМО)',
        head: 'Кутфуллоев Гафур Субхонович',
        position: 'Начальник Учебно-методического отдела (УМО)',
        address: 'Республика Узбекистан,Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        website: 'Misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      },
      {
        id: 3,
        name: 'Бухгалтерия',
        head: 'Нафиуллина Юлия Римовна',
        position: 'Главный бухгалтер',
        address: 'Республика Узбекистан,Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        website: 'misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      },
      {
        id: 5,
        name: 'Отдел кадров',
        head: 'Эргашева Мухаббат Абдурахмовна',
        position: 'Начальник отдела кадров',
        address: 'Республика Узбекистан,Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        website: 'Misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      }
    ]
  },
  uz: {
    title: 'TA\'LIM TASHKILOTINING TUZILISHI VA BOSHQARUV ORGANLARI',
    subtitle: 'Fan',
    tableHeaders: {
      number: '#',
      name: 'Boshqaruv organining nomi',
      head: 'Boshqaruv organi rahbarining F.I.SH.',
      position: 'Boshqaruv organi rahbarining lavozimi',
      address: 'Boshqaruv organining joylashuv manzili',
      website: '"Internet" tarmog\'idagi rasmiy veb-sayt manzili',
      email: 'Boshqaruv organining elektron pochta manzili',
      regulation: 'Boshqaruv organi to\'g\'risidagi nizom',
      formation: 'Shakllantirish tartibi',
      phone: 'Aloqa telefoni'
    },
    tableData: [
      {
        id: 1,
        name: 'Ilmiy kengash',
        head: 'Umarov Farhodbek Yakubovich',
        position: 'Ilmiy kengash raisi',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        website: 'https://misis.uz',
        email: 'info@misis.uz',
        regulation: 'Ilmiy kengash to\'g\'risidagi nizom',
        formation: '',
        phone: '+998 70 614-22-64; +998 70 614-22-64'
      },
      {
        id: 2,
        name: 'Filial direktori',
        head: 'Umarov Farhodbek Yakubovich',
        position: 'Direktor',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        website: 'https://misis.uz',
        email: 'info@misis.uz',
        regulation: 'yo\'q',
        formation: '',
        phone: '+998 70 614-22-64; +998 70 614-22-64'
      }
    ],
    departmentTableHeaders: {
      number: '№',
      name: 'Tarkibiy bo\'linma nomi',
      head: 'Tarkibiy bo\'linma rahbarining F.I.SH.',
      position: 'Tarkibiy bo\'linma rahbarining lavozimi',
      address: 'Tarkibiy bo\'linmaning joylashuv manzili',
      website: '"Internet" tarmog\'idagi rasmiy veb-sayt manzili (mavjud bo\'lsa)',
      email: 'Tarkibiy bo\'linmaning elektron pochta manzili (mavjud bo\'lsa)',
      documents: 'Bo\'linmalar to\'g\'risidagi nizomlar mavjudligi to\'g\'risida ma\'lumot, elektron imzo bilan imzolangan ko\'rsatilgan hujjatlarning elektron nusxalari ilova qilingan',
      info: 'Bo\'linma haqida ma\'lumot',
      phone: 'Tarkibiy bo\'linmaning aloqa telefoni (mavjud bo\'lsa)'
    },
    departmentTableData: [
      {
        id: 1,
        name: 'O\'quv-uslubiy bo\'lim (O\'UB)',
        head: 'Kutfulloev Gafur Subhonovich',
        position: 'O\'quv-uslubiy bo\'lim (O\'UB) boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        website: 'Misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      },
      {
        id: 3,
        name: 'Buxgalteriya',
        head: 'Nafiullina Yuliya Rimovna',
        position: 'Bosh buxgalter',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        website: 'misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      },
      {
        id: 5,
        name: 'Kadrlar bo\'limi',
        head: 'Ergasheva Muhabbat Abduraxmovna',
        position: 'Kadrlar bo\'limi boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        website: 'Misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      }
    ]
  },
  en: {
    title: 'STRUCTURE AND MANAGEMENT BODIES OF THE EDUCATIONAL ORGANIZATION',
    subtitle: 'Science',
    tableHeaders: {
      number: '#',
      name: 'Name of the management body',
      head: 'Full name of the head of the management body',
      position: 'Position of the head of the management body',
      address: 'Location address of the management body',
      website: 'Address of the official website on the Internet',
      email: 'Email address of the management body',
      regulation: 'Regulation on the management body',
      formation: 'Formation procedure',
      phone: 'Contact phone'
    },
    tableData: [
      {
        id: 1,
        name: 'Academic Council',
        head: 'Umarov Farhodbek Yakubovich',
        position: 'Chairman of the Academic Council',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk city, Amir Temur street, 56',
        website: 'https://misis.uz',
        email: 'info@misis.uz',
        regulation: 'Regulation on the Academic Council',
        formation: '',
        phone: '+998 70 614-22-64; +998 70 614-22-64'
      },
      {
        id: 2,
        name: 'Branch Director',
        head: 'Umarov Farhodbek Yakubovich',
        position: 'Director',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk city, Amir Temur street, 56',
        website: 'https://misis.uz',
        email: 'info@misis.uz',
        regulation: 'none',
        formation: '',
        phone: '+998 70 614-22-64; +998 70 614-22-64'
      }
    ],
    departmentTableHeaders: {
      number: '#',
      name: 'Name of the structural unit',
      head: 'Full name of the head of the structural unit',
      position: 'Position of the head of the structural unit',
      address: 'Location address of the structural unit',
      website: 'Address of the official website on the Internet (if available)',
      email: 'Email address of the structural unit (if available)',
      documents: 'Information on the availability of regulations on units with attached electronic copies of these documents signed with an electronic signature',
      info: 'Information about the unit',
      phone: 'Contact phone of the structural unit (if available)'
    },
    departmentTableData: [
      {
        id: 1,
        name: 'Educational and Methodological Department',
        head: 'Kutfulloev Gafur Subkhonovich',
        position: 'Head of Educational and Methodological Department',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk city, Amir Temur street, 56',
        website: 'Misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      },
      {
        id: 3,
        name: 'Accounting Department',
        head: 'Nafiullina Yulia Rimovna',
        position: 'Chief Accountant',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk city, Amir Temur street, 56',
        website: 'misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      },
      {
        id: 5,
        name: 'Human Resources Department',
        head: 'Ergasheva Mukhabbat Abdurakhimovna',
        position: 'Head of HR Department',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk city, Amir Temur street, 56',
        website: 'Misis.uz',
        email: 'info@misis.uz',
        documents: '',
        info: '',
        phone: '+998 70 614-22-64'
      }
    ]
  }
};

const BranchStruct: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchStruct must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  const sectionTitles: Record<Language, { management: string; departments: string }> = {
    ru: { management: 'Руководство филиала', departments: 'Структурные подразделения' },
    uz: { management: 'Filial rahbariyati', departments: "Tarkibiy bo'linmalar" },
    en: { management: 'Branch management', departments: 'Structural units' }
  };

  const extraSectionTitles: Record<Language, {
    admin: string;
    educational: string;
    info: string;
    branchesTable: string;
    repsTable: string;
  }> = {
    ru: {
      admin: 'Административные подразделения',
      educational: 'Образовательные и специализированные подразделения',
      info: 'Информация о филиалах и представительствах',
      branchesTable: 'Информация о филиалах образовательной организации',
      repsTable: 'Информация о представительствах образовательной организации'
    },
    uz: {
      admin: "Ma'muriy bo'limlar",
      educational: "Ta'lim va ixtisoslashgan bo'limlar",
      info: "Filial va vakolatxonalar haqidagi ma'lumot",
      branchesTable: "Ta'lim tashkilotining filiallari haqida ma'lumot",
      repsTable: "Ta'lim tashkilotining vakolatxonalari haqida ma'lumot"
    },
    en: {
      admin: 'Administrative departments',
      educational: 'Educational and specialized departments',
      info: 'Information about branches and representations',
      branchesTable: 'Information about branches of the educational organization',
      repsTable: 'Information about representations of the educational organization'
    }
  };

  const extraHeaders = {
    branches: {
      ru: ['№ п/п', 'Наименование филиала', 'ФИО руководителя филиала', 'Должность руководителя филиала', 'Адрес места нахождения', 'Электронная почта', 'Адрес официального сайта или страницы филиала в сети "Интернет"', 'Положение о филиале'],
      uz: ['№', 'Filial nomi', 'Filial rahbarining F.I.SH.', 'Filial rahbarining lavozimi', 'Manzil', 'Elektron pochta', 'Filialning rasmiy sayti yoki sahifasi manzili', "Filial to'g'risidagi nizom"],
      en: ['#', 'Branch name', 'Head of branch (Full name)', 'Position of branch head', 'Address', 'Email', 'Official website or page address', 'Regulation about branch']
    },
    reps: {
      ru: ['№ п/п', 'Наименование представительства', 'ФИО руководителя представительства', 'Должность руководителя представительства', 'Адрес места нахождения', 'Электронная почта', 'Адрес официального сайта или страницы представительства в сети "Интернет"', 'Положение о представительстве'],
      uz: ['№', 'Vakolatxona nomi', 'Vakolatxona rahbarining F.I.SH.', 'Vakolatxona rahbarining lavozimi', 'Manzil', 'Elektron pochta', 'Vakolatxonaning rasmiy sayti yoki sahifasi manzili', 'Vakolatxona nizomi'],
      en: ['#', 'Representation name', 'Head of representation (Full name)', 'Position of representation head', 'Address', 'Email', 'Official website or page address', 'Regulation about representation']
    }
  } as const;

  const emptyRow = ['1', 'Отсутствует', 'Отсутствует', 'Отсутствует', 'Отсутствует', 'Отсутствует', 'Отсутствует', 'Отсутствует'];

  return (
    <div className="branch-struct">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">📋</span>
          <h1 className="main-title">{t.title}</h1>
        </div>
        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">👥</span>
            <h2 className="section-title">{sectionTitles[language].management}</h2>
          </div>
          <div className="info-table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.tableHeaders.name}</th>
                  <th>{t.tableHeaders.head}</th>
                  <th>{t.tableHeaders.position}</th>
                  <th>{t.tableHeaders.address}</th>
                  <th>{t.tableHeaders.website}</th>
                  <th>{t.tableHeaders.email}</th>
                  <th>{t.tableHeaders.regulation}</th>
                </tr>
              </thead>
              <tbody>
                {t.tableData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.head}</td>
                    <td>{item.position}</td>
                    <td>{item.address}</td>
                    <td>
                      {item.website ? (
                        <a href={(item.website.startsWith('http') ? '' : 'https://') + item.website.replace(/^https?:\/\//, '')} target="_blank" rel="noopener noreferrer">{item.website}</a>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td>
                      {item.email && item.email.includes('@') ? (
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                      ) : (
                        item.email || '—'
                      )}
                    </td>
                    <td>{item.regulation || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">🧩</span>
            <h2 className="section-title">{extraSectionTitles[language].admin}</h2>
          </div>
          <div className="info-table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.departmentTableHeaders.name}</th>
                  <th>{t.departmentTableHeaders.head}</th>
                  <th>{t.departmentTableHeaders.position}</th>
                  <th>{t.departmentTableHeaders.address}</th>
                  <th>{t.departmentTableHeaders.website}</th>
                  <th>{t.departmentTableHeaders.email}</th>
                  <th>{t.departmentTableHeaders.documents}</th>
                </tr>
              </thead>
              <tbody>
                {t.departmentTableData.map((item) => (
                  <tr key={`admin-${item.id}`}>
                    <td>{item.name}</td>
                    <td>{item.head}</td>
                    <td>{item.position}</td>
                    <td>{item.address}</td>
                    <td>
                      {item.website ? (
                        <a href={(item.website.startsWith('http') ? '' : 'https://') + item.website.replace(/^https?:\/\//, '')} target="_blank" rel="noopener noreferrer">{item.website}</a>
                      ) : (
                        'нет'
                      )}
                    </td>
                    <td>{item.email || 'нет'}</td>
                    <td>{item.documents || 'нет'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">🎓</span>
            <h2 className="section-title">{extraSectionTitles[language].educational}</h2>
          </div>
          <div className="info-table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.departmentTableHeaders.name}</th>
                  <th>{t.departmentTableHeaders.head}</th>
                  <th>{t.departmentTableHeaders.position}</th>
                  <th>{t.departmentTableHeaders.address}</th>
                  <th>{t.departmentTableHeaders.website}</th>
                  <th>{t.departmentTableHeaders.email}</th>
                  <th>{t.departmentTableHeaders.documents}</th>
                </tr>
              </thead>
              <tbody>
                {t.departmentTableData.map((item) => (
                  <tr key={`edu-${item.id}`}>
                    <td>{item.name}</td>
                    <td>{item.head}</td>
                    <td>{item.position}</td>
                    <td>{item.address}</td>
                    <td>
                      {item.website ? (
                        <a href={(item.website.startsWith('http') ? '' : 'https://') + item.website.replace(/^https?:\/\//, '')} target="_blank" rel="noopener noreferrer">{item.website}</a>
                      ) : (
                        'нет'
                      )}
                    </td>
                    <td>{item.email || 'нет'}</td>
                    <td>{item.documents || 'нет'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">🌍</span>
            <h2 className="section-title">{extraSectionTitles[language].info}</h2>
          </div>

          <div className="info-table-container">
            <table className="info-table">
              <thead>
                <tr>
                  {extraHeaders.branches[language].map((h) => (
                    <th key={`bh-${h}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {emptyRow.map((cell, idx) => (
                    <td key={`br-${idx}`}>{cell}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="info-table-container">
            <table className="info-table">
              <thead>
                <tr>
                  {extraHeaders.reps[language].map((h) => (
                    <th key={`rh-${h}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {emptyRow.map((cell, idx) => (
                    <td key={`rp-${idx}`}>{cell}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BranchStruct;
