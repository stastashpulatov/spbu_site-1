import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchStruct.scss';

type Translations = {
  [key in Language]: {
    title: string;
    managementTitle: string;
    adminTitle: string;
    educationalTitle: string;
    tableHeaders: {
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      regulation: string;
    };
    managementData: {
      id: number;
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      regulation: string;
    }[];
    adminData: {
      id: number;
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      regulation: string;
    }[];
    educationalData: {
      id: number;
      name: string;
      head: string;
      position: string;
      address: string;
      website: string;
      email: string;
      regulation: string;
    }[];
  };
};

const translations: Translations = {
  ru: {
    title: 'СТРУКТУРА И ОРГАНЫ УПРАВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИЕЙ',
    managementTitle: 'Руководство филиала',
    adminTitle: 'Административные подразделения',
    educationalTitle: 'Образовательные и специализированные подразделения',
    tableHeaders: {
      name: 'Наименование органа управления / структурного подразделения',
      head: 'ФИО руководителя структурного подразделения',
      position: 'Должность руководителя структурного подразделения',
      address: 'Адрес местонахождения структурного подразделения',
      website: 'Адрес официального сайта структурного подразделения',
      email: 'Адрес электронной почты структурного подразделения',
      regulation: 'Положение об органе управления / о структурном подразделении'
    },
    managementData: [
      {
        id: 1,
        name: 'Дирекция',
        head: 'Зиядуллаев Махмуджон Джуракулович',
        position: 'Руководитель',
        address: 'Республика Узбекистан, г. Ташкент, Мирободский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'm.ziyadullaev@spbu.ru',
        regulation: 'Положение о филиале'
      },
      {
        id: 2,
        name: 'Дирекция',
        head: 'Усмонов Дилшод Лапасович',
        position: 'Начальник Управления делами',
        address: 'Республика Узбекистан, г. Ташкент, Мирободский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет'
      }
    ],
    adminData: [
      {
        id: 1,
        name: 'Бухгалтерия',
        head: 'Кедиров Носиржон Садуллаевич',
        position: 'Главный бухгалтер',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет'
      },
      {
        id: 2,
        name: 'Отдел по работе с молодежью, духовности и просветительства',
        head: 'Пайзиев Махмуджон Азаматович',
        position: 'Начальник отдела',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет'
      },
      {
        id: 3,
        name: 'Сектор по работе с обращениями физических и юридических лиц, контролю и мониторингу',
        head: 'Эшматова Дилноза Анваровна',
        position: 'Главный специалист',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет'
      }
    ],
    educationalData: [
      {
        id: 1,
        name: 'Отдел контроля качества образования',
        head: 'Миразеева Файзиннисо Абдуллахатовна',
        position: 'Главный специалист',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет'
      },
      {
        id: 2,
        name: 'Отдел кадров',
        head: 'Екубхуҷаев Шахриёржон Эркин угли',
        position: 'Инспектор',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет'
      },
      {
        id: 3,
        name: 'Центр цифровых образовательных технологий',
        head: 'Хаитбоев Мавлонбек Шухрат угли',
        position: 'Начальник центра',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет'
      }
    ]
  },
  uz: {
    title: 'TA\'LIM TASHKILOTINING TUZILISHI VA BOSHQARUV ORGANLARI',
    managementTitle: 'Filial rahbariyati',
    adminTitle: "Ma'muriy bo'limlar",
    educationalTitle: "Ta'lim va ixtisoslashgan bo'limlar",
    tableHeaders: {
      name: 'Boshqaruv organi / tarkibiy bo\'linma nomi',
      head: 'Tarkibiy bo\'linma rahbarining F.I.SH.',
      position: 'Tarkibiy bo\'linma rahbarining lavozimi',
      address: 'Tarkibiy bo\'linmaning joylashuv manzili',
      website: 'Tarkibiy bo\'linmaning rasmiy veb-sayt manzili',
      email: 'Tarkibiy bo\'linmaning elektron pochta manzili',
      regulation: 'Boshqaruv organi / tarkibiy bo\'linma to\'g\'risidagi nizom'
    },
    managementData: [
      {
        id: 1,
        name: 'Direksiya',
        head: 'Ziyadullaev Mahmujon Djurakulovich',
        position: 'Rahbar',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'm.ziyadullaev@spbu.ru',
        regulation: 'Filial to\'g\'risidagi nizom'
      },
      {
        id: 2,
        name: 'Direksiya',
        head: 'Usmonov Dilshod Lapasovich',
        position: 'Ishlar boshqarmasi boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q'
      }
    ],
    adminData: [
      {
        id: 1,
        name: 'Buxgalteriya',
        head: 'Kedirov Nosirjon Sadullayevich',
        position: 'Bosh buxgalter',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q'
      },
      {
        id: 2,
        name: 'Yoshlar bilan ishlash, ma\'naviyat va ma\'rifat bo\'limi',
        head: 'Payziyev Mahmudjon Azamatovich',
        position: 'Bo\'lim boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q'
      },
      {
        id: 3,
        name: 'Jismoniy va yuridik shaxslar murojaatlari bilan ishlash, nazorat va monitoring sektori',
        head: 'Eshmatova Dilnoza Anvarovna',
        position: 'Bosh mutaxassis',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q'
      }
    ],
    educationalData: [
      {
        id: 1,
        name: 'Ta\'lim sifatini nazorat qilish bo\'limi',
        head: 'Mirzaeva Fayzinniso Abdullakhonovna',
        position: 'Bosh mutaxassis',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q'
      },
      {
        id: 2,
        name: 'Kadrlar bo\'limi',
        head: 'Ekyubkhujayev Shakhriyorjon Erkin o\'g\'li',
        position: 'Inspektor',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q'
      },
      {
        id: 3,
        name: 'Raqamli ta\'lim texnologiyalari markazi',
        head: 'Xayitboev Mavlonbek Shuhrat o\'g\'li',
        position: 'Markaz boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q'
      }
    ]
  },
  en: {
    title: 'STRUCTURE AND MANAGEMENT BODIES OF THE EDUCATIONAL ORGANIZATION',
    managementTitle: 'Branch management',
    adminTitle: 'Administrative departments',
    educationalTitle: 'Educational and specialized departments',
    tableHeaders: {
      name: 'Name of management body / structural unit',
      head: 'Full name of the head of structural unit',
      position: 'Position of the head of structural unit',
      address: 'Location address of structural unit',
      website: 'Official website address of structural unit',
      email: 'Email address of structural unit',
      regulation: 'Regulation on management body / structural unit'
    },
    managementData: [
      {
        id: 1,
        name: 'Directorate',
        head: 'Ziyadullaev Makhmudjon Djurakulovich',
        position: 'Head',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'm.ziyadullaev@spbu.ru',
        regulation: 'Branch Regulation'
      },
      {
        id: 2,
        name: 'Directorate',
        head: 'Usmanov Dilshod Lapasovich',
        position: 'Head of Administrative Affairs',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none'
      }
    ],
    adminData: [
      {
        id: 1,
        name: 'Accounting Department',
        head: 'Kedirov Nosirjon Sadullaevich',
        position: 'Chief Accountant',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none'
      },
      {
        id: 2,
        name: 'Department for Youth Affairs, Spirituality and Education',
        head: 'Paiziyev Makhmudjon Azamatovich',
        position: 'Head of Department',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none'
      },
      {
        id: 3,
        name: 'Sector for Work with Appeals of Individuals and Legal Entities, Control and Monitoring',
        head: 'Eshmatova Dilnoza Anvarovna',
        position: 'Chief Specialist',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none'
      }
    ],
    educationalData: [
      {
        id: 1,
        name: 'Department of Education Quality Control',
        head: 'Mirzaeva Fayzinniso Abdullakhonovna',
        position: 'Chief Specialist',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none'
      },
      {
        id: 2,
        name: 'Human Resources Department',
        head: 'Ekyubkhuzhaev Shakhriyorjon Erkin ogli',
        position: 'Inspector',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none'
      },
      {
        id: 3,
        name: 'Center for Digital Educational Technologies',
        head: 'Khaitboev Mavlonbek Shuhrat ogli',
        position: 'Head of Center',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none'
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

  const renderTable = (data: typeof t.managementData, sectionTitle: string, icon: string) => (
    <div className="section-block">
      <div className="sub-header">
        <span className="sub-header-icon">{icon}</span>
        <h2 className="section-title">{sectionTitle}</h2>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.head}</td>
                <td>{item.position}</td>
                <td>{item.address}</td>
                <td>
                  {item.website ? (
                    <a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a>
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
                <td>
                  {item.regulation && item.regulation !== 'нет' && item.regulation !== 'yo\'q' && item.regulation !== 'none' ? (
                    <a href="/files/ПОЛОЖЕНИЕ_о_филиале_СПбГУ_в_г_Ташкенте (2).pdf" target="_blank" rel="noopener noreferrer">{item.regulation}</a>
                  ) : (
                    item.regulation || '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="branch-struct">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">📋</span>
          <h1 className="main-title">{t.title}</h1>
        </div>
        
        {renderTable(t.managementData, t.managementTitle, '👥')}
        {renderTable(t.adminData, t.adminTitle, '🧩')}
        {renderTable(t.educationalData, t.educationalTitle, '🎓')}
      </div>
    </div>
  );
};

export default BranchStruct;
