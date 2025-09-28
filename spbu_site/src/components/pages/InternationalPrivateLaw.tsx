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
    mainProgramTitle: string;
    mainProgramPoints: string[];
    teachersTitle: string;
    teachers: string[];
  };
};

const translations: Translations = {
  ru: {
    backgroundImage: '/images/pravo.png',
    backgroundPosition: 'center 25%',
    title: 'Международное частное право',
    code: '40.04.01',
    level: 'Магистратура',
    form: 'Очная',
    duration: '2 года',
    department: 'Юриспруденция',
    cost: '28 000 000 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      'Теория государства и права (письменно)',
      'Английский язык (тестирование)'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'Международное частное право',
      'Право международной торговли',
      'Международный коммерческий арбитраж',
      'Международное корпоративное право',
      'Международное банковское право',
      'Правовое регулирование иностранных инвестиций',
      'Международное семейное право',
      'Международный гражданский процесс',
      'Международное авторское право',
      'Международное патентное право',
      'Международное контрактное право',
      'Трансграничные банкротства',
      'Международное налоговое право',
      'Правовое регулирование международных перевозок',
      'Международное трудовое право'
    ],
    mainProgramTitle: 'О программе',
    mainProgramPoints: [
      'Программа направлена на подготовку высококвалифицированных специалистов в области международного частного права.',
      'Студенты получают углубленные знания в сфере правового регулирования международных частных отношений.',
      'Особое внимание уделяется изучению международных коммерческих контрактов и международного коммерческого арбитража.',
      'В рамках программы изучаются вопросы международной купли-продажи, трансграничных перевозок и международных расчетов.',
      'Выпускники работают в международных юридических фирмах, транснациональных корпорациях и консалтинговых компаниях.'
    ],
    teachersTitle: 'Известные преподаватели',
    teachers: [
      'Л.Н. Галенская – доктор юридических наук, профессор кафедры международного права СПбГУ',
      'С.В. Бахин – доктор юридических наук, профессор, заведующий кафедрой международного права СПбГУ',
      'А.И. Абдуллин – доктор юридических наук, профессор кафедры международного и европейского права СПбГУ',
      'Н.Ю. Ерпылева – доктор юридических наук, профессор кафедры международного частного права СПбГУ',
      'И.В. Гетьман-Павлова – доктор юридических наук, профессор кафедры международного частного права СПбГУ'
    ]
  },
  uz: {
    backgroundImage: '/images/pravo.png',
    backgroundPosition: 'center 25%',
    title: 'Xalqaro xususiy huquq',
    code: '40.04.01',
    level: 'Magistratura',
    form: 'Kunduzgi',
    duration: '2 yil',
    department: 'Huquqshunoslik',
    cost: '28 000 000 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      'Davlat va huquq nazariyasi (yozma)',
      'Ingliz tili (test)'
    ],
    mainCoursesTitle: 'Asosiy o\'quv kurslari',
    mainCourses: [
      'Xalqaro xususiy huquq',
      'Xalqaro savdo huquqi',
      'Xalqaro tijorat arbitraji',
      'Xalqaro korporativ huquq',
      'Xalqaro bank huquqi',
      'Xorijiy investitsiyalarni huquqiy tartibga solish',
      'Xalqaro oila huquqi',
      'Xalqaro fuqarolik jarayoni',
      'Xalqaro mualliflik huquqi',
      'Xalqaro patent huquqi',
      'Xalqaro shartnoma huquqi',
      'Chegaralararo bankrotliklar',
      'Xalqaro soliq huquqi',
      'Xalqaro tashishlarni huquqiy tartibga solish',
      'Xalqaro mehnat huquqi'
    ],
    mainProgramTitle: 'Dastur haqida',
    mainProgramPoints: [
      'Dastur xalqaro xususiy huquq sohasida yuqori malakali mutaxassislarni tayyorlashga qaratilgan.',
      'Talabalar xalqaro xususiy munosabatlarni huquqiy tartibga solish sohasida chuqur bilimga ega bo\'ladilar.',
      'Xalqaro tijorat shartnomalari va xalqaro tijorat arbitrajini o\'rganishga alohida e\'tibor qaratiladi.',
      'Dastur doirasida xalqaro savdo-sotiq, chegaralararo tashish va xalqaro hisob-kitoblar masalalari o\'rganiladi.',
      'Bitiruvchilar xalqaro huquq firmalarida, transmilliy korporatsiyalarda va konsalting kompaniyalarida ishlaydilar.'
    ],
    teachersTitle: 'Mashhur o\'qituvchilar',
    teachers: [
      'L.N. Galenskaya – yuridik fanlar doktori, SPbDU xalqaro huquq kafedrasi professori',
      'S.V. Baxin – yuridik fanlar doktori, professor, SPbDU xalqaro huquq kafedrasi mudiri',
      'A.I. Abdullin – yuridik fanlar doktori, SPbDU xalqaro va yevropa huquqi kafedrasi professori',
      'N.Yu. Yerpileva – yuridik fanlar doktori, SPbDU xalqaro xususiy huquq kafedrasi professori',
      'I.V. Getman-Pavlova – yuridik fanlar doktori, SPbDU xalqaro xususiy huquq kafedrasi professori'
    ]
  },
  en: {
    backgroundImage: '/images/pravo.png',
    backgroundPosition: 'center 25%',
    title: 'International Private Law',
    code: '40.04.01',
    level: 'Master\'s degree',
    form: 'Full-time',
    duration: '2 years',
    department: 'Law',
    cost: '28 000 000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      'Theory of State and Law (written)',
      'English language (testing)'
    ],
    mainCoursesTitle: 'Main Courses',
    mainCourses: [
      'International Private Law',
      'International Trade Law',
      'International Commercial Arbitration',
      'International Corporate Law',
      'International Banking Law',
      'Legal Regulation of Foreign Investment',
      'International Family Law',
      'International Civil Procedure',
      'International Copyright Law',
      'International Patent Law',
      'International Contract Law',
      'Cross-border Bankruptcy',
      'International Tax Law',
      'Legal Regulation of International Transportation',
      'International Labor Law'
    ],
    mainProgramTitle: 'About the Program',
    mainProgramPoints: [
      'The program aims to prepare highly qualified specialists in the field of international private law.',
      'Students gain in-depth knowledge in the legal regulation of international private relations.',
      'Special attention is paid to the study of international commercial contracts and international commercial arbitration.',
      'The program covers issues of international sales, cross-border transportation, and international settlements.',
      'Graduates work in international law firms, multinational corporations, and consulting companies.'
    ],
    teachersTitle: 'Distinguished Faculty',
    teachers: [
      'L.N. Galenskaya – Doctor of Law, Professor of International Law Department at SPbU',
      'S.V. Bakhin – Doctor of Law, Professor, Head of International Law Department at SPbU',
      'A.I. Abdullin – Doctor of Law, Professor of International and European Law Department at SPbU',
      'N.Yu. Erpyleva – Doctor of Law, Professor of International Private Law Department at SPbU',
      'I.V. Getman-Pavlova – Doctor of Law, Professor of International Private Law Department at SPbU'
    ]
  }
};

const InternationalPrivateLaw: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('InternationalPrivateLaw must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return <ProgramPage programInfo={t} />;
};

export default InternationalPrivateLaw;
