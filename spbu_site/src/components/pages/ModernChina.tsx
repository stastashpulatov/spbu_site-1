import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import ProgramPage from '../shared/ProgramPage';

type Translations = {
  [key in Language]: {
    backgroundImage?: string;
    backgroundPosition?: string;
    title: string;
    code: string;
    level: string;
    form: string;
    duration: string;
    department: string;
    cost: string;
    admissionTitle: string;
    admissionText: string[];
    mainCoursesTitle: string;
    mainCourses: string[];
    mainProgramPoints: string[];
  };
};

const translations: Translations = {
  ru: {
    backgroundImage: '/images/china.png',
    backgroundPosition: 'center 35%',
    title: 'Современный Китай: экономика, политика, общество (с изучением китайского языка)',
    code: '58.04.01',
    level: 'Магистратура',
    form: 'Очная',
    duration: '2 года',
    department: 'Востоковедение',
    cost: '29 370 600 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      '<a href="/files/25_mag_portfolio-filial-v-tashkente.pdf" target="_blank">Программа вступительного испытания</a>',
      '<a href="/files/programma_vstupit_ispytaniy_b2-50.pdf" target="_blank">Программа вступительного испытания: Русский язык</a>'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'Внешняя политика Китяя',
      'Информационные ресурсы и базы данных синологических исследований',
      'Китайский язык',
      'Концепции современного востоковедения',
      'Современные концепции новейшей истории и историографии Китая',
      'Введение в китаеведение',
      'Китай в системе международного права',
      'Китайская Народная Республика и страны Центральной Азии'
    ],
    mainProgramPoints: [
      'Программа направлена на подготовку специалистов-китаеведов, владеющих китайским языком и обладающих глубокими знаниями в области экономики, политики и общества современного Китая.',
      'Студенты получают комплексное представление о современном Китае, его роли в мировой экономике и политике.',
      'Особое внимание уделяется изучению китайского языка, который является важнейшим инструментом для понимания китайской культуры и общества.',
      'В рамках программы изучаются актуальные проблемы развития КНР, включая экономические реформы, социальные трансформации и внешнеполитический курс.',
      'Выпускники работают в дипломатических представительствах, международных компаниях, научно-исследовательских центрах и образовательных учреждениях.'
    ]
  },
  uz: {
    backgroundImage: '/images/china-bg.jpg',
    backgroundPosition: 'center 35%',
    title: 'Zamonaviy Xitoy: iqtisodiyot, siyosat, jamiyat (xitoy tilini o\'rganish bilan)',
    code: '58.04.01',
    level: 'Magistratura',
    form: 'Kunduzgi',
    duration: '2 yil',
    department: 'Sharqshunoslik',
    cost: '29 370 600 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      'Sharqshunoslik (yozma)',
      'Ingliz tili (test)'
    ],
    mainCoursesTitle: 'Asosiy o\'quv kurslari',
    mainCourses: [
      'Xitoy tashqi siyosati',
      'Sinologik tadqiqotlarning axborot resurslari va ma\'lumotlar bazalari',
      'Xitoy tili',
      'Zamonaviy sharqshunoslik konsepsiyalari',
      'Xitoyning eng yangi tarixi va tarixshunosligining zamonaviy konsepsiyalari',
      'Xitoyshunoslikka kirish',
      'Xitoy xalqaro huquq tizimida',
      'Xitoy Xalq Respublikasi va Markaziy Osiyo mamlakatlari'
    ],
    mainProgramPoints: [
      'Dastur xitoy tili va zamonaviy Xitoy iqtisodiyoti, siyosati va jamiyati sohasida chuqur bilimlarga ega bo\'lgan xitoyshunos mutaxassislarni tayyorlashga qaratilgan.',
      'Talabalar zamonaviy Xitoy va uning jahon iqtisodiyoti va siyosatidagi o\'rni haqida keng tasavvurga ega bo\'ladilar.',
      'Xitoy madaniyati va jamiyatini tushunishning muhim vositasi bo\'lgan xitoy tilini o\'rganishga alohida e\'tibor qaratiladi.',
      'Dastur doirasida XXRning rivojlanish muammolari, jumladan iqtisodiy islohotlar, ijtimoiy o\'zgarishlar va tashqi siyosat kursi o\'rganiladi.',
      'Bitiruvchilar diplomatik vakolatxonalarda, xalqaro kompaniyalarda, ilmiy-tadqiqot markazlari va ta\'lim muassasalarida ishlaydilar.'
    ]
  },
  en: {
    backgroundImage: '/images/china-bg.jpg',
    backgroundPosition: 'center 35%',
    title: 'Modern China: Economics, Politics, Society (with Chinese Language Study)',
    code: '58.04.01',
    level: 'Master\'s Degree',
    form: 'Full-time',
    duration: '2 years',
    department: 'Oriental Studies',
    cost: '29 370 600 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      'Oriental Studies (written)',
      'English Language (testing)'
    ],
    mainCoursesTitle: 'Main Courses',
    mainCourses: [
      'China\'s Foreign Policy',
      'Information Resources and Databases of Sinological Research',
      'Chinese Language',
      'Concepts of Modern Oriental Studies',
      'Modern Concepts of Contemporary Chinese History and Historiography',
      'Introduction to Chinese Studies',
      'China in the System of International Law',
      'People\'s Republic of China and Central Asian Countries'
    ],
    mainProgramPoints: [
      'The program aims to prepare China specialists with Chinese language proficiency and deep knowledge in economics, politics, and society of modern China.',
      'Students gain a comprehensive understanding of modern China and its role in the global economy and politics.',
      'Special attention is paid to studying the Chinese language, which is an essential tool for understanding Chinese culture and society.',
      'The program covers current issues of PRC development, including economic reforms, social transformations, and foreign policy.',
      'Graduates work in diplomatic missions, international companies, research centers, and educational institutions.'
    ]
  }
};

const ModernChina: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('ModernChina must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return <ProgramPage programInfo={t} />;
};

export default ModernChina;
