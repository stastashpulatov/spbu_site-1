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
    educationalTableData: {
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
    finalTable: {
       headers: string[];
       data: {
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
        name: 'Дирекция',
        head: 'Зиядуллаев Махмуджон Джуракулович',
        position: 'Руководитель',
        address: 'Республика Узбекистан, г. Ташкент, Мирободский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'm.ziyadullaev@spbu.ru',
        regulation: 'Положение о филиале (прикрепить файл, который я отправил)',
        formation: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Дирекция',
        head: 'Усмонов Дилшод Лапасович',
        position: 'Начальник Управления делами',
        address: 'Республика Узбекистан, г. Ташкент, Мирободский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'нет',
        regulation: 'нет',
        formation: '',
        phone: ''
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
        name: 'Бухгалтерия',
        head: 'Кедиров Носиржон Садуллаевич',
        position: 'Главный бухгалтер',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'нет',
        documents: 'нет',
        info: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Отдел по работе с молодежью, духовности и просветительства',
        head: 'Пайзиев Махмуджон Азаматович',
        position: 'Начальник отдела',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'нет',
        documents: 'нет',
        info: '',
        phone: ''
      },
      {
        id: 3,
        name: 'Сектор по работе с обращениями физических и юридических лиц, контролю и мониторингу',
        head: 'Эшматова Дилноза Анваровна',
        position: 'Главный специалист',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'нет',
        documents: 'нет',
        info: '',
        phone: ''
      }
    ],
    educationalTableData: [
      {
        id: 1,
        name: 'Отдел контроля качества образования',
        head: 'Миразеева Файзиннисо Абдуллахатовна',
        position: 'Главный специалист',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'нет',
        documents: 'нет',
        info: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Отдел кадров',
        head: 'Екубхуҷаев Шахриёржон Эркин угли',
        position: 'Инспектор',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'нет',
        documents: 'нет',
        info: '',
        phone: ''
      },
      {
        id: 3,
        name: 'Центр цифровых образовательных технологий',
        head: 'Хаитбоев Мавлонбек Шухрат угли',
        position: 'Начальник центра',
        address: 'Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д 16',
        website: 'https://spbu.uz',
        email: 'нет',
        documents: 'нет',
        info: '',
        phone: ''
      }
    ],
    finalTable: {
      headers: [
        'Наименование органа управления / структурного подразделения',
        'ФИО руководителя структурного подразделения', 
        'Должность руководителя структурного подразделения',
        'Адрес местонахождения структурного подразделения',
        'Адрес официального сайта структурного подразделения',
        'Адрес электронной почты структурного подразделения',
        'Положение об органе управления / о структурном подразделении'
      ],
      data: [
        {
          name: 'Дирекция',
          head: 'Зиядуллаев Махмуджон Джуракулович',
          position: 'Руководитель',
          address: 'Республика Узбекистан, г. Ташкент, Мирободский район, ул. Шахрисабз, д. 16',
          website: 'https://spbu.uz',
          email: 'm.ziyadullaev@spbu.ru',
          regulation: 'Положение о филиале'
        },
        {
          name: 'Дирекция',
          head: 'Усмонов Дилшод Лапасович', 
          position: 'Начальник Управления делами',
          address: 'Республика Узбекистан, г. Ташкент, Мирободский район, ул. Шахрисабз, д. 16',
          website: 'https://spbu.uz',
          email: 'нет',
          regulation: 'нет'
        }
      ]
    }
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
        name: 'Direksiya',
        head: 'Ziyadullaev Mahmujon Djurakulovich',
        position: 'Rahbar',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'm.ziyadullaev@spbu.ru',
        regulation: 'Filial to\'g\'risidagi nizom (yuborgan faylni biriktirish)',
        formation: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Direksiya',
        head: 'Usmonov Dilshod Lapasovich',
        position: 'Ishlar boshqarmasi boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        regulation: 'yo\'q',
        formation: '',
        phone: ''
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
        name: 'Buxgalteriya',
        head: 'Kedirov Nosirjon Sadullayevich',
        position: 'Bosh buxgalter',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        documents: 'yo\'q',
        info: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Yoshlar bilan ishlash, ma\'naviyat va ma\'rifat bo\'limi',
        head: 'Payziyev Mahmudjon Azamatovich',
        position: 'Bo\'lim boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        documents: 'yo\'q',
        info: '',
        phone: ''
      },
      {
        id: 3,
        name: 'Jismoniy va yuridik shaxslar murojaatlari bilan ishlash, nazorat va monitoring sektori',
        head: 'Eshmatova Dilnoza Anvarovna',
        position: 'Bosh mutaxassis',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        documents: 'yo\'q',
        info: '',
        phone: ''
      }
    ],
    educationalTableData: [
      {
        id: 1,
        name: 'Ta\'lim sifatini nazorat qilish bo\'limi',
        head: 'Mirzaeva Fayzinniso Abdullakhonovna',
        position: 'Bosh mutaxassis',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        documents: 'yo\'q',
        info: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Kadrlar bo\'limi',
        head: 'Ekyubkhujayev Shakhriyorjon Erkin o\'g\'li',
        position: 'Inspektor',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        documents: 'yo\'q',
        info: '',
        phone: ''
      },
      {
        id: 3,
        name: 'Raqamli ta\'lim texnologiyalari markazi',
        head: 'Xayitboev Mavlonbek Shuhrat o\'g\'li',
        position: 'Markaz boshlig\'i',
        address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        website: 'https://spbu.uz',
        email: 'yo\'q',
        documents: 'yo\'q',
        info: '',
        phone: ''
      }
    ],
    finalTable: {
      headers: [
        'Boshqaruv organi / tarkibiy bo\'linma nomi',
        'Tarkibiy bo\'linma rahbarining F.I.SH.',
        'Tarkibiy bo\'linma rahbarining lavozimi',
        'Tarkibiy bo\'linmaning joylashuv manzili',
        'Tarkibiy bo\'linmaning rasmiy veb-sayt manzili',
        'Tarkibiy bo\'linmaning elektron pochta manzili',
        'Boshqaruv organi / tarkibiy bo\'linma to\'g\'risidagi nizom'
      ],
      data: [
        {
          name: 'Direksiya',
          head: 'Ziyadullaev Mahmujon Djurakulovich',
          position: 'Rahbar',
          address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
          website: 'https://spbu.uz',
          email: 'm.ziyadullaev@spbu.ru',
          regulation: 'Filial to\'g\'risidagi nizom'
        },
        {
          name: 'Direksiya', 
          head: 'Usmonov Dilshod Lapasovich',
          position: 'Ishlar boshqarmasi boshlig\'i',
          address: 'O\'zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
          website: 'https://spbu.uz',
          email: 'yo\'q',
          regulation: 'yo\'q'
        }
      ]
  }
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
        name: 'Directorate',
        head: 'Ziyadullaev Makhmudjon Djurakulovich',
        position: 'Head',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'm.ziyadullaev@spbu.ru',
        regulation: 'Regulation on the branch (attach the file I sent)',
        formation: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Directorate',
        head: 'Usmanov Dilshod Lapasovich',
        position: 'Head of Administrative Affairs',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        regulation: 'none',
        formation: '',
        phone: ''
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
        name: 'Accounting Department',
        head: 'Kedirov Nosirjon Sadullaevich',
        position: 'Chief Accountant',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        documents: 'none',
        info: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Department for Youth Affairs, Spirituality and Education',
        head: 'Paiziyev Makhmudjon Azamatovich',
        position: 'Head of Department',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        documents: 'none',
        info: '',
        phone: ''
      },
      {
        id: 3,
        name: 'Sector for Work with Appeals of Individuals and Legal Entities, Control and Monitoring',
        head: 'Eshmatova Dilnoza Anvarovna',
        position: 'Chief Specialist',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        documents: 'none',
        info: '',
        phone: ''
      }
    ],
    educationalTableData: [
      {
        id: 1,
        name: 'Department of Education Quality Control',
        head: 'Mirzaeva Fayzinniso Abdullakhonovna',
        position: 'Chief Specialist',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        documents: 'none',
        info: '',
        phone: ''
      },
      {
        id: 2,
        name: 'Human Resources Department',
        head: 'Ekyubkhuzhaev Shakhriyorjon Erkin ogli',
        position: 'Inspector',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        documents: 'none',
        info: '',
        phone: ''
      },
      {
        id: 3,
        name: 'Center for Digital Educational Technologies',
        head: 'Khaitboev Mavlonbek Shuhrat ogli',
        position: 'Head of Center',
        address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
        website: 'https://spbu.uz',
        email: 'none',
        documents: 'none',
        info: '',
        phone: ''
      }
    ],
    finalTable: {
      headers: [
        'Name of management body / structural unit',
        'Full name of the head of structural unit',
        'Position of the head of structural unit', 
        'Location address of structural unit',
        'Official website address of structural unit',
        'Email address of structural unit',
        'Regulation on management body / structural unit'
      ],
      data: [
        {
          name: 'Directorate',
          head: 'Ziyadullaev Makhmudjon Djurakulovich',
          position: 'Head',
          address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16',
          website: 'https://spbu.uz',
          email: 'm.ziyadullaev@spbu.ru',
          regulation: 'Branch Regulation'
        },
        {
          name: 'Directorate',
          head: 'Usmanov Dilshod Lapasovich',
          position: 'Head of Administrative Affairs',
          address: 'Republic of Uzbekistan, Tashkent, Mirobod district, Shahrisabz street, 16', 
          website: 'https://spbu.uz',
          email: 'none',
          regulation: 'none'
        }
      ]
    }
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

  // Функция для преобразования объекта в массив значений в правильном порядке
  const getFinalTableRowData = (row: any) => {
    return [
      row.name,
      row.head,
      row.position,
      row.address,
      row.website,
      row.email,
      row.regulation
    ];
  };

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
                {t.educationalTableData.map((item) => (
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
            <h3>Сводная информация</h3>
            <table className="info-table">
              <thead>
                <tr>
                  {t.finalTable.headers.map((header, index) => (
                    <th key={`final-header-${index}`}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.finalTable.data.map((row, rowIndex) => (
                  <tr key={`final-row-${rowIndex}`}>
                    {getFinalTableRowData(row).map((cell, cellIndex) => (
                      <td key={`final-cell-${rowIndex}-${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchStruct;
