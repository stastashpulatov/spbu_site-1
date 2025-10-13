import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchCommon.scss';

type Translations = {
  [key in Language]: {
    title: string;
    mainTitle: string;
    tableHeaders: {
      field: string;
      value: string;
    };
    tableData: {
      field: string;
      value: React.ReactNode;
    }[];
    licenseSection: {
      title: string;
      subtitle: string;
      tableHeaders: {
        field: string;
        value: string;
      };
      tableData: {
        field: string;
        value: React.ReactNode;
      }[];
    };
    accreditationSection: {
      title: string;
      value: string;
    };
    founderSection: {
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
        email: string;
        website: string;
      }[];
    };
    placesSection: {
      title: string;
      tableHeaders: {
        number: string;
        address: string;
      };
      tableData: {
        number: number;
        address: string;
      }[];
    };
    networkPlacesSection: {
      title: string;
      tableHeaders: {
        number: string;
        address: string;
      };
      tableData: {
        number: number;
        address: string;
      }[];
    };
    practicePlacesSection: {
      title: string;
      tableHeaders: {
        number: string;
        address: string;
      };
      tableData: {
        number: number;
        address: string;
      }[];
    };
    practicalTrainingPlacesSection: {
      title: string;
      tableHeaders: {
        number: string;
        address: string;
      };
      tableData: {
        number: number;
        address: string;
      }[];
    };
    stateCertificationPlacesSection: {
      title: string;
      tableHeaders: {
        number: string;
        address: string;
      };
      tableData: {
        number: number;
        address: string;
      }[];
    };
    additionalEducationPlacesSection: {
      title: string;
      tableHeaders: {
        number: string;
        address: string;
      };
      tableData: {
        number: number;
        address: string;
      }[];
    };
    professionalTrainingPlacesSection: {
      title: string;
      tableHeaders: {
        number: string;
        address: string;
      };
      tableData: {
        number: number;
        address: string;
      }[];
    };
    contactInfoSection: {
      title: string;
      address: string;
      email: string;
      website: string;
      citizenAppeals: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'Основные сведения',
    mainTitle: 'Основные сведения',
    tableHeaders: {
      field: 'Наименование',
      value: 'Значение'
    },
    tableData: [
      {
        field: 'Полное наименование образовательной организации',
        value: 'Филиал Федерального государственного бюджетного образовательного учреждения высшего образования «Санкт-Петербургский государственный университет» в городе Ташкенте (Республика Узбекистан)'
      },
      {
        field: 'Сокращенное наименование образовательной организации (при наличии)',
        value: 'Филиал СПбГУ в Ташкенте'
      },
      {
        field: 'Дата создания образовательной организации',
        value: '22.09.2022'
      },
      {
        field: 'Адрес местонахождения образовательной организации',
        value: '100060, Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16'
      },
      {
        field: 'Филиалы образовательной организации',
        value: 'Отсутствуют'
      },
      {
        field: 'Представительства образовательной организации',
        value: 'Отсутствуют'
      },
      {
        field: 'Режим, график работы',
        value: <ul>
          <li>Пн-пт — 8:00–22:00</li>
          <li>Сб — 8:00–18:00</li>
          <li>Вс — выходной</li>
        </ul>
      },
      {
        field: 'Контактные телефоны',
        value: 'Отсутствуют'
      },
      {
        field: 'Адреса электронной почты',
        value: 'ft@spbu.ru'
      }
    ],
    licenseSection: {
      title: 'Лицензия на осуществление образовательной деятельности',
      subtitle: '(выписка из реестра лицензий на осуществление образовательной деятельности)',
      tableHeaders: {
        field: 'Наименование',
        value: 'Значение'
      },
      tableData: [
        {
          field: 'Лицензия на осуществление образовательной деятельности',
          value: <a href="https://spbu.ru/sites/default/files/licenziya.pdf" target="_blank" rel="noopener noreferrer">https://spbu.ru/sites/default/files/licenziya.pdf</a>
        },
        {
          field: 'Выписка из реестра лицензий по состоянию на 17:33 17.08.2023 г',
          value: <a href="/files/Выписка.pdf" target="_blank" rel="noopener noreferrer">Ссылка на документ</a>
        }
      ]
    },
    accreditationSection: {
      title: 'Государственная аккредитация образовательной деятельности по реализуемым образовательным программам',
      value: 'Отсутствует'
    },
    founderSection: {
      title: 'Информация об учредителе (учредителях) образовательной организации',
      tableHeaders: {
        name: 'Наименование учредителя',
        address: 'Адрес местонахождения учредителя(ей)',
        phones: 'Контактные телефоны',
        email: 'Адрес электронной почты',
        website: 'Адрес сайта учредителя(ей) в сети «Интернет»'
      },
      tableData: [
        {
          name: 'Федеральное государственное бюджетное образовательное учреждение высшего образования «Санкт-Петербургский государственный университет»',
          address: '199034, Санкт-Петербург, Университетская наб., д. 7-9',
          phones: '+7 (812) 325-87-36 (факс)',
          email: 'spbu@spbu.ru',
          website: 'spbu.ru'
        }
      ]
    },
    placesSection: {
      title: 'Места осуществления образовательной деятельности, в том числе не указываемые в приложении к лицензии (реестре лицензий) на осуществление образовательной деятельности',
      tableHeaders: {
        number: '№ п/п',
        address: 'Адрес места осуществления образовательной деятельности'
      },
      tableData: [
        { number: 1, address: '100060, Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16' }
      ]
    },
    networkPlacesSection: {
      title: 'Места осуществления образовательной деятельности при использовании сетевой формы реализации образовательных программ',
      tableHeaders: {
        number: '№ п/п',
        address: 'Адрес места осуществления образовательной деятельности'
      },
      tableData: [
        { number: 1, address: 'отсутствует' }
      ]
    },
    practicePlacesSection: {
      title: 'Места проведения практики',
      tableHeaders: {
        number: '№',
        address: 'Адрес места осуществления образовательной деятельности'
      },
      tableData: [
        { number: 1, address: 'отсутствует' }
      ]
    },
    practicalTrainingPlacesSection: {
      title: 'Места проведения практической подготовки обучающихся',
      tableHeaders: {
        number: '№',
        address: 'Адрес места осуществления образовательной деятельности'
      },
      tableData: [
        { number: 1, address: 'отсутствует' }
      ]
    },
    stateCertificationPlacesSection: {
      title: 'Места проведения государственной итоговой аттестации',
      tableHeaders: {
        number: '№',
        address: 'Адрес места осуществления образовательной деятельности'
      },
      tableData: [
        { number: 1, address: 'отсутствует' }
      ]
    },
    additionalEducationPlacesSection: {
      title: 'Места осуществления образовательной деятельности по дополнительным образовательным программам',
      tableHeaders: {
        number: '№ п/п',
        address: 'Адрес места осуществления образовательной деятельности'
      },
      tableData: [
        { number: 1, address: 'отсутствует' }
      ]
    },
    professionalTrainingPlacesSection: {
      title: 'Места осуществления образовательной деятельности по основным программам профессионального обучения',
      tableHeaders: {
        number: '№ п/п',
        address: 'Адрес места осуществления образовательной деятельности'
      },
      tableData: [
        { number: 1, address: 'отсутствует' }
      ]
    },
    contactInfoSection: {
      title: 'Контактная информация',
      address: '100060, Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
      email: 'ft@spbu.ru',
      website: 'spbu.uz',
      citizenAppeals: 'Обращения граждан направляются на адрес: ft@spbu.ru'
    }
  },
  uz: {
    title: 'Asosiy ma\'lumotlar',
    mainTitle: 'Asosiy ma\'lumotlar',
    tableHeaders: {
      field: 'Maydon nomi',
      value: 'Qiymati'
    },
    tableData: [
      {
        field: 'Ta\'lim muassasasining to\'liq nomi',
        value: '«Sankt-Peterburg davlat universiteti» federal davlat byudjet oliy ta\'lim muassasasi filiali Toshkent shahrida (O\'zbekiston Respublikasi)'
      },
      {
        field: 'Ta\'lim muassasasining qisqartirilgan nomi (agar mavjud bo\'lsa)',
        value: 'SPbGU filiali Toshkentda'
      },
      {
        field: 'Ta\'lim muassasasining tashkil etilgan sanasi',
        value: '22.09.2022'
      },
      {
        field: 'Ta\'lim muassasasining joylashgan manzili',
        value: '100060, O\'zbekiston Respublikasi, Toshkent shahri, Mirabad tumani, Shahrisabz ko\'chasi, 16-uy'
      },
      {
        field: 'Ta\'lim muassasasining filiallari',
        value: 'Yo\'q'
      },
      {
        field: 'Ta\'lim muassasasining vakolatxonalari',
        value: 'Yo\'q'
      },
      {
        field: 'Ish tartibi, ish jadvali',
        value: <ul>
          <li>Dushanba-Juma: 8:00–22:00</li>
          <li>Shanba: 8:00–18:00</li>
          <li>Yakshanba: dam olish kuni</li>
        </ul>
      },
      {
        field: 'Aloqa telefonlari',
        value: 'Yo\'q'
      },
      {
        field: 'Elektron pochta manzillari',
        value: 'ft@spbu.ru'
      }
    ],
    licenseSection: {
      title: 'Litsenziya',
      subtitle: 'Litsenziya ta\'lim faoliyatini amalga oshirish (reestr litsenziyalarini holati)',
      tableHeaders: {
        field: 'Nomi',
        value: 'Qiymati'
      },
      tableData: [
        {
          field: 'Litsenziya ta\'lim faoliyatini amalga oshirish',
          value: <a href="https://spbu.ru/sites/default/files/licenziya.pdf" target="_blank" rel="noopener noreferrer">https://spbu.ru/sites/default/files/licenziya.pdf</a>
        },
        {
          field: 'Reestr litsenziyalarini holati 17:33 17.08.2023 yil',
          value: <a href="/files/Выписка.pdf" target="_blank" rel="noopener noreferrer">Hujjat manzili</a>
        }
      ]
    },
    accreditationSection: {
      title: 'Amalga oshirilayotgan ta\'lim dasturlari bo\'yicha ta\'lim faoliyatining davlat akkreditatsiyasi',
      value: 'Yo\'q'
    },
    founderSection: {
      title: "Ta'sis etuvchi",
      tableHeaders: {
        name: 'Nomi',
        address: 'Manzil',
        phones: 'Telefonlar',
        email: 'Elektron pochta',
        website: 'Sayt'
      },
      tableData: [
        {
          name: '«Sankt-Peterburg davlat universiteti» federal davlat byudjet oliy ta\'lim muassasasi filiali Toshkent shahrida (O\'zbekiston Respublikasi)',
          address: '100060, O\'zbekiston Respublikasi, Toshkent shahri, Mirabad tumani, Shahrisabz ko\'chasi, 16-uy',
          phones: 'Yo\'q',
          email: 'ft@spbu.ru',
          website: 'https://spbu.ru'
        }
      ]
    },
    placesSection: {
      title: 'Ta\'lim faoliyati amalga oshirish joylari',
      tableHeaders: {
        number: 'Raqam',
        address: 'Manzil'
      },
      tableData: [
        { number: 1, address: '100060, O\'zbekiston Respublikasi, Toshkent shahri, Mirabad tumani, Shahrisabz ko\'chasi, 16-uy' },
        { number: 2, address: '100061, O\'zbekiston Respublikasi, Toshkent shahri, Mirabad tumani, Do\'stlik ko\'chasi, 1-uy' }
      ]
    },
    networkPlacesSection: {
      title: "Ta'lim dasturlarini tarmoq shakli orqali amalga oshirish joylari",
      tableHeaders: {
        number: '№',
        address: 'Ta\'lim faoliyatini amalga oshirish joyining manzili'
      },
      tableData: [
        { number: 1, address: 'yo\'q' }
      ]
    },
    practicePlacesSection: {
      title: 'Amaliyot o\'tkazish joylari',
      tableHeaders: {
        number: '№ п/п',
        address: 'Ta\'lim faoliyatini amalga oshirish joyining manzili'
      },
      tableData: [
        { number: 1, address: 'yo\'q' }
      ]
    },
    practicalTrainingPlacesSection: {
      title: 'O\'quvchilarning amaliy tayyorgarligini o\'tkazish joylari',
      tableHeaders: {
        number: '№ п/п',
        address: 'Ta\'lim faoliyatini amalga oshirish joyining manzili'
      },
      tableData: [
        { number: 1, address: 'yo\'q' }
      ]
    },
    stateCertificationPlacesSection: {
      title: 'Davlat yakuniy attestatsiyasini o\'tkazish joylari',
      tableHeaders: {
        number: '№ п/п',
        address: 'Ta\'lim faoliyatini amalga oshirish joyining manzili'
      },
      tableData: [
        { number: 1, address: 'yo\'q' }
      ]
    },
    additionalEducationPlacesSection: {
      title: 'Qo\'shimcha ta\'lim dasturlari bo\'yicha ta\'lim faoliyatini amalga oshirish joylari',
      tableHeaders: {
        number: '№ п/п',
        address: 'Ta\'lim faoliyatini amalga oshirish joyining manzili'
      },
      tableData: [
        { number: 1, address: 'yo\'q' }
      ]
    },
    professionalTrainingPlacesSection: {
      title: 'Asosiy kasbiy ta\'lim dasturlari bo\'yicha ta\'lim faoliyatini amalga oshirish joylari',
      tableHeaders: {
        number: '№ п/п',
        address: 'Ta\'lim faoliyatini amalga oshirish joyining manzili'
      },
      tableData: [
        { number: 1, address: 'yo\'q' }
      ]
    },
    contactInfoSection: {
      title: 'Kontakt ma\'lumotlar',
      address: '100060, O\'zbekiston Respublikasi, Toshkent shahri, Mirabad tumani, Shahrisabz ko\'chasi, 16-uy',
      email: 'ft@spbu.ru',
      website: 'spbu.uz',
      citizenAppeals: 'Fuqarolar murojaatlari manzilga yuboriladi: ft@spbu.ru'
    }
  },
  en: {
    title: 'Basic Information',
    mainTitle: 'Basic Information',
    tableHeaders: {
      field: 'Field Name',
      value: 'Value'
    },
    tableData: [
      {
        field: 'Full name of the educational organization',
        value: 'Branch of the Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University" in Tashkent (Republic of Uzbekistan)'
      },
      {
        field: 'Abbreviated name of the educational organization (if available)',
        value: 'SPbU Branch in Tashkent'
      },
      {
        field: 'Date of establishment of the educational organization',
        value: '22.09.2022'
      },
      {
        field: 'Location address of the educational organization',
        value: '100060, Republic of Uzbekistan, Tashkent, Mirabad district, Shahrisabz street, 16'
      },
      {
        field: 'Branches of the educational organization',
        value: 'Absent'
      },
      {
        field: 'Representative offices of the educational organization',
        value: 'Absent'
      },
      {
        field: 'Working hours, schedule',
        value: <ul>
          <li>Mon-Fri: 8:00–22:00</li>
          <li>Sat: 8:00–18:00</li>
          <li>Sun: day off</li>
        </ul>
      },
      {
        field: 'Contact phones',
        value: 'Absent'
      },
      {
        field: 'Email addresses',
        value: 'ft@spbu.ru'
      }
    ],
    licenseSection: {
      title: 'License',
      subtitle: 'License for carrying out educational activities (status of the register of licenses)',
      tableHeaders: {
        field: 'Name',
        value: 'Value'
      },
      tableData: [
        {
          field: 'License for carrying out educational activities',
          value: <a href="https://spbu.ru/sites/default/files/licenziya.pdf" target="_blank" rel="noopener noreferrer">https://spbu.ru/sites/default/files/licenziya.pdf</a>
        },
        {
          field: 'Status of the register of licenses as of 17:33 17.08.2023',
          value: <a href="/files/Выписка.pdf" target="_blank" rel="noopener noreferrer">Document link</a>
        }
      ]
    },
    accreditationSection: {
      title: 'State accreditation of educational activities for implemented educational programs',
      value: 'Absent'
    },
    founderSection: {
      title: 'Founder',
      tableHeaders: {
        name: 'Name',
        address: 'Address',
        phones: 'Phones',
        email: 'Email',
        website: 'Website'
      },
      tableData: [
        {
          name: 'Branch of the Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University" in Tashkent (Republic of Uzbekistan)',
          address: '100060, Republic of Uzbekistan, Tashkent, Mirabad district, Shahrisabz street, 16',
          phones: 'Absent',
          email: 'ft@spbu.ru',
          website: 'https://spbu.ru'
        }
      ]
    },
    placesSection: {
      title: 'Places of educational activity',
      tableHeaders: {
        number: 'Number',
        address: 'Address'
      },
      tableData: [
        { number: 1, address: '100060, Republic of Uzbekistan, Tashkent, Mirabad district, Shahrisabz street, 16' },
        { number: 2, address: '100061, Republic of Uzbekistan, Tashkent, Mirabad district, Friendship street, 1' }
      ]
    },
    networkPlacesSection: {
      title: 'Places of educational activity when using network form of educational programs',
      tableHeaders: {
        number: '№ p/p',
        address: 'Address of educational activity location'
      },
      tableData: [
        { number: 1, address: 'absent' }
      ]
    },
    practicePlacesSection: {
      title: 'Places of practice',
      tableHeaders: {
        number: '№ p/p',
        address: 'Address of educational activity location'
      },
      tableData: [
        { number: 1, address: 'absent' }
      ]
    },
    practicalTrainingPlacesSection: {
      title: 'Places of practical training of students',
      tableHeaders: {
        number: '№ p/p',
        address: 'Address of educational activity location'
      },
      tableData: [
        { number: 1, address: 'absent' }
      ]
    },
    stateCertificationPlacesSection: {
      title: 'Places of state final certification',
      tableHeaders: {
        number: '№ p/p',
        address: 'Address of educational activity location'
      },
      tableData: [
        { number: 1, address: 'absent' }
      ]
    },
    additionalEducationPlacesSection: {
      title: 'Places of educational activity for additional educational programs',
      tableHeaders: {
        number: 'Number',
        address: 'Address'
      },
      tableData: [
        { number: 1, address: '100060, Republic of Uzbekistan, Tashkent, Mirabad district, Shahrisabz street, 16' },
        { number: 2, address: '100061, Republic of Uzbekistan, Tashkent, Mirabad district, Friendship street, 1' }
      ]
    },
    professionalTrainingPlacesSection: {
      title: 'Places of educational activity for main professional training programs',
      tableHeaders: {
        number: '№ p/p',
        address: 'Address of educational activity location'
      },
      tableData: [
        { number: 1, address: 'absent' }
      ]
    },
    contactInfoSection: {
      title: 'Contact Information',
      address: '100060, Republic of Uzbekistan, Tashkent, Mirabad district, Shahrisabz street, 16',
      email: 'ft@spbu.ru',
      website: 'spbu.uz',
      citizenAppeals: 'Citizen appeals are sent to the address: ft@spbu.ru'
    }
  }
};

const BranchCommon: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchCommon must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-common">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">ℹ️</span>
          <h1 className="main-title">{t.mainTitle}</h1>
        </div>
        
        {/* Основная таблица с информацией - без заголовка сверху */}
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

        {/* Раздел с лицензией */}
        <div className="info-section license-section">
          <h2 className="section-title centered-title">{t.licenseSection.title}</h2>
          <p className="section-subtitle">{t.licenseSection.subtitle}</p>
          <div className="table-container">
            <table className="info-table license-table">
              <tbody>
                {t.licenseSection.tableData.map((row, index) => (
                  <tr key={index}>
                    <td className="field-name">{row.field}</td>
                    <td className="field-value">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с аккредитацией */}
        <div className="info-section accreditation-section">
          <h2 className="section-title centered-title">{t.accreditationSection.title}</h2>
          <div className="table-container">
            <table className="info-table accreditation-table">
              <tbody>
                <tr>
                  <td className="field-name">{t.accreditationSection.title}</td>
                  <td className="field-value">{t.accreditationSection.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с учредителем */}
        <div className="info-section founder-section">
          <h2 className="section-title centered-title">{t.founderSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.founderSection.tableHeaders.name}</th>
                  <th>{t.founderSection.tableHeaders.address}</th>
                  <th>{t.founderSection.tableHeaders.phones}</th>
                  <th>{t.founderSection.tableHeaders.email}</th>
                  <th>{t.founderSection.tableHeaders.website}</th>
                </tr>
              </thead>
              <tbody>
                {t.founderSection.tableData.map((founder, index) => (
                  <tr key={index}>
                    <td data-label={t.founderSection.tableHeaders.name}>{founder.name}</td>
                    <td data-label={t.founderSection.tableHeaders.address}>{founder.address}</td>
                    <td data-label={t.founderSection.tableHeaders.phones}>{founder.phones}</td>
                    <td data-label={t.founderSection.tableHeaders.email}>{founder.email}</td>
                    <td data-label={t.founderSection.tableHeaders.website}><a href={`https://${founder.website}`} target="_blank" rel="noopener noreferrer">{founder.website}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с местами осуществления образовательной деятельности */}
        <div className="info-section places-section">
          <h2 className="section-title centered-title">{t.placesSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.placesSection.tableHeaders.number}</th>
                  <th>{t.placesSection.tableHeaders.address}</th>
                </tr>
              </thead>
              <tbody>
                {t.placesSection.tableData.map((place, index) => (
                  <tr key={index}>
                    <td data-label={t.placesSection.tableHeaders.number}>{place.number}</td>
                    <td data-label={t.placesSection.tableHeaders.address}>{place.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с сетевыми местами осуществления образовательной деятельности */}
        <div className="info-section network-places-section">
          <h2 className="section-title centered-title">{t.networkPlacesSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.networkPlacesSection.tableHeaders.number}</th>
                  <th>{t.networkPlacesSection.tableHeaders.address}</th>
                </tr>
              </thead>
              <tbody>
                {t.networkPlacesSection.tableData.map((place, index) => (
                  <tr key={index}>
                    <td data-label={t.networkPlacesSection.tableHeaders.number}>{place.number}</td>
                    <td data-label={t.networkPlacesSection.tableHeaders.address}>{place.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с местами проведения практики */}
        <div className="info-section practice-places-section">
          <h2 className="section-title centered-title">{t.practicePlacesSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.practicePlacesSection.tableHeaders.number}</th>
                  <th>{t.practicePlacesSection.tableHeaders.address}</th>
                </tr>
              </thead>
              <tbody>
                {t.practicePlacesSection.tableData.map((place, index) => (
                  <tr key={index}>
                    <td data-label={t.practicePlacesSection.tableHeaders.number}>{place.number}</td>
                    <td data-label={t.practicePlacesSection.tableHeaders.address}>{place.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с местами проведения практической подготовки */}
        <div className="info-section practical-training-places-section">
          <h2 className="section-title centered-title">{t.practicalTrainingPlacesSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.practicalTrainingPlacesSection.tableHeaders.number}</th>
                  <th>{t.practicalTrainingPlacesSection.tableHeaders.address}</th>
                </tr>
              </thead>
              <tbody>
                {t.practicalTrainingPlacesSection.tableData.map((place, index) => (
                  <tr key={index}>
                    <td data-label={t.practicalTrainingPlacesSection.tableHeaders.number}>{place.number}</td>
                    <td data-label={t.practicalTrainingPlacesSection.tableHeaders.address}>{place.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с местами проведения государственной итоговой аттестации */}
        <div className="info-section state-certification-places-section">
          <h2 className="section-title centered-title">{t.stateCertificationPlacesSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.stateCertificationPlacesSection.tableHeaders.number}</th>
                  <th>{t.stateCertificationPlacesSection.tableHeaders.address}</th>
                </tr>
              </thead>
              <tbody>
                {t.stateCertificationPlacesSection.tableData.map((place, index) => (
                  <tr key={index}>
                    <td data-label={t.stateCertificationPlacesSection.tableHeaders.number}>{place.number}</td>
                    <td data-label={t.stateCertificationPlacesSection.tableHeaders.address}>{place.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с местами осуществления образовательной деятельности по дополнительным образовательным программам */}
        <div className="info-section additional-education-places-section">
          <h2 className="section-title centered-title">{t.additionalEducationPlacesSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.additionalEducationPlacesSection.tableHeaders.number}</th>
                  <th>{t.additionalEducationPlacesSection.tableHeaders.address}</th>
                </tr>
              </thead>
              <tbody>
                {t.additionalEducationPlacesSection.tableData.map((place, index) => (
                  <tr key={index}>
                    <td data-label={t.additionalEducationPlacesSection.tableHeaders.number}>{place.number}</td>
                    <td data-label={t.additionalEducationPlacesSection.tableHeaders.address}>{place.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с профессиональной подготовкой */}
        <div className="info-section professional-training-places-section">
          <h2 className="section-title centered-title">{t.professionalTrainingPlacesSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.professionalTrainingPlacesSection.tableHeaders.number}</th>
                  <th>{t.professionalTrainingPlacesSection.tableHeaders.address}</th>
                </tr>
              </thead>
              <tbody>
                {t.professionalTrainingPlacesSection.tableData.map((place, index) => (
                  <tr key={index}>
                    <td data-label={t.professionalTrainingPlacesSection.tableHeaders.number}>{place.number}</td>
                    <td data-label={t.professionalTrainingPlacesSection.tableHeaders.address}>{place.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Раздел с контактной информацией */}
        <div className="info-section contact-info-section">
          <h2 className="section-title centered-title">{t.contactInfoSection.title}</h2>
          <div className="table-container">
            <table className="info-table">
              <tbody>
                <tr>
                  <td className="field-name">Адрес:</td>
                  <td className="field-value">{t.contactInfoSection.address}</td>
                </tr>
                <tr>
                  <td className="field-name">Электронная почта:</td>
                  <td className="field-value">{t.contactInfoSection.email}</td>
                </tr>
                <tr>
                  <td className="field-name">Сайт:</td>
                  <td className="field-value"><a href={`https://${t.contactInfoSection.website}`} target="_blank" rel="noopener noreferrer">{t.contactInfoSection.website}</a></td>
                </tr>
                <tr>
                  <td className="field-name">Телефон для обращений граждан и юридических лиц:</td>
                  <td className="field-value">{t.contactInfoSection.citizenAppeals}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchCommon;