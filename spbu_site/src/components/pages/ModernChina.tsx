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
    code: '41.04.01',
    level: 'Магистратура',
    form: 'Очная',
    duration: '2 года',
    department: 'Востоковедение',
    cost: '28 000 000 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      'Востоковедение (письменно)',
      'Английский язык (тестирование)'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'Китайский язык',
      'История и культура Китая',
      'Экономика современного Китая',
      'Политическая система КНР',
      'Внешняя политика Китая',
      'Деловой китайский язык',
      'Китайское общество и социальные проблемы',
      'Этнические и религиозные отношения в КНР',
      'Регионы Китая',
      'Китайские СМИ',
      'Китайская литература',
      'Китайское искусство'
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
    code: '41.04.01',
    level: 'Magistratura',
    form: 'Kunduzgi',
    duration: '2 yil',
    department: 'Sharqshunoslik',
    cost: '28 000 000 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      'Sharqshunoslik (yozma)',
      'Ingliz tili (test)'
    ],
    mainCoursesTitle: 'Asosiy o\'quv kurslari',
    mainCourses: [
      'Xitoy tili',
      'Xitoy tarixi va madaniyati',
      'Zamonaviy Xitoy iqtisodiyoti',
      'XXR siyosiy tizimi',
      'Xitoy tashqi siyosati',
      'Biznes xitoy tili',
      'Xitoy jamiyati va ijtimoiy muammolar',
      'XXRda etnik va diniy munosabatlar',
      'Xitoy mintaqalari',
      'Xitoy ommaviy axborot vositalari',
      'Xitoy adabiyoti',
      'Xitoy san\'ati'
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
    code: '41.04.01',
    level: 'Master\'s Degree',
    form: 'Full-time',
    duration: '2 years',
    department: 'Oriental Studies',
    cost: '28,000,000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      'Oriental Studies (written)',
      'English Language (testing)'
    ],
    mainCoursesTitle: 'Main Courses',
    mainCourses: [
      'Chinese Language',
      'Chinese History and Culture',
      'Modern Chinese Economy',
      'PRC Political System',
      'Chinese Foreign Policy',
      'Business Chinese',
      'Chinese Society and Social Issues',
      'Ethnic and Religious Relations in PRC',
      'Regions of China',
      'Chinese Mass Media',
      'Chinese Literature',
      'Chinese Art'
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
