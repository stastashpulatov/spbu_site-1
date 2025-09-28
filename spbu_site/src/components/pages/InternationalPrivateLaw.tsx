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
  };
};

const translations: Translations = {
  ru: {
    backgroundImage: '/images/pravo.png',
    backgroundPosition: 'center 25%',
    title: 'Международное предпринимательство в цифровой экономике',
    code: '38.04.01',
    level: 'Магистратура',
    form: 'Очная',
    duration: '2 года',
    department: 'Экономика',
    cost: '33 000 000 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      '<a href="/files/25_mag_portfolio-filial-v-tashkente.pdf" target="_blank">Программа вступительного испытания</a>',
      '<a href="/files/programma_vstupit_ispytaniy_b2-50.pdf" target="_blank">Программа вступительного испытания: Русский язык</a>'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'Микро - и макроэкономика - продвинутый уровень',
      'Цифровая экономика: современные вызовы',
      'Менеджмент в цифровой экономике',
      'Международные экономические отношения - продвинутый уровень',
      'Международные валютно-кредитные отношения - продвинутый уровень',
      'Международная коммерческая деятельность',
      'Кросскультурный менеджмент',
      'Русский язык как иностранный',
      'Китайский язык для начинающих',
      'Цифровая трансформация бизнеса',
      'Финтех, технологии распределенных реестров и искусственного интеллекта',
      'Право международной торговли',
      'Экономика предприятия в цифровую эпоху',
      'Управление бизнес-коммуникациями и развитие бизнес-навыков (тренинг)',
      'Стратегия деловых переговоров'
    ],
    mainProgramTitle: 'О программе',
    mainProgramPoints: [
      'Программа направлена на подготовку высококвалифицированных специалистов в области международного частного права.',
      'Студенты получают углубленные знания в сфере правового регулирования международных частных отношений.',
      'Особое внимание уделяется изучению международных коммерческих контрактов и международного коммерческого арбитража.',
      'В рамках программы изучаются вопросы международной купли-продажи, трансграничных перевозок и международных расчетов.',
      'Выпускники работают в международных юридических фирмах, транснациональных корпорациях и консалтинговых компаниях.'
    ]
  },
  uz: {
    backgroundImage: '/images/pravo.png',
    backgroundPosition: 'center 25%',
    title: 'Raqamli iqtisodiyotda xalqaro tadbirkorlik',
    code: '38.04.01',
    level: 'Magistratura',
    form: 'Kunduzgi',
    duration: '2 yil',
    department: 'Iqtisodiyot',
    cost: '33 000 000 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      '<a href="/files/25_mag_portfolio-filial-v-tashkente.pdf" target="_blank">Kirish imtihoni dasturi</a>',
      '<a href="/files/programma_vstupit_ispytaniy_b2-50.pdf" target="_blank">Kirish imtihoni dasturi: Rus tili</a>'
    ],
    mainCoursesTitle: 'Asosiy o\'quv kurslari',
    mainCourses: [
      'Mikro va makroiqtisodiyot - takomillashgan daraja',
      'Raqamli iqtisodiyot: zamonaviy muammolar',
      'Raqamli iqtisodiyotda menejment',
      'Xalqaro iqtisodiy munosabatlar - takomillashgan daraja',
      'Xalqaro valyuta-kredit munosabatlari - takomillashgan daraja',
      'Xalqaro tijorat faoliyati',
      'Madaniyatlararo menejment',
      'Rus tili chet tili sifatida',
      'Xitoy tili boshlang\'ich daraja uchun',
      'Biznesning raqamli transformatsiyasi',
      'Fintech, taqsimlangan reyestrlar texnologiyalari va sun\'iy intellekt',
      'Xalqaro savdo huquqi',
      'Raqamli davr korxona iqtisodiyoti',
      'Biznes-kommunikatsiyalarni boshqarish va biznes ko\'nikmalarini rivojlantirish (trening)',
      'Ishbilarmonlik muzokaralari strategiyasi'
    ],
    mainProgramTitle: 'Dastur haqida',
    mainProgramPoints: [
      'Dastur xalqaro xususiy huquq sohasida yuqori malakali mutaxassislarni tayyorlashga qaratilgan.',
      'Talabalar xalqaro xususiy munosabatlarni huquqiy tartibga solish sohasida chuqur bilimga ega bo\'ladilar.',
      'Xalqaro tijorat shartnomalari va xalqaro tijorat arbitrajini o\'rganishga alohida e\'tibor qaratiladi.',
      'Dastur doirasida xalqaro savdo-sotiq, chegaralararo tashish va xalqaro hisob-kitoblar masalalari o\'rganiladi.',
      'Bitiruvchilar xalqaro huquq firmalarida, transmilliy korporatsiyalarda va konsalting kompaniyalarida ishlaydilar.'
    ]
  },
  en: {
    backgroundImage: '/images/pravo.png',
    backgroundPosition: 'center 25%',
    title: 'International Business in Digital Economy',
    code: '38.04.01',
    level: 'Master\'s degree',
    form: 'Full-time',
    duration: '2 years',
    department: 'Economics',
    cost: '33 000 000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      '<a href="/files/25_mag_portfolio-filial-v-tashkente.pdf" target="_blank">Entrance Examination Program</a>',
      '<a href="/files/programma_vstupit_ispytaniy_b2-50.pdf" target="_blank">Entrance Examination Program: Russian Language</a>'
    ],
    mainCoursesTitle: 'Main Courses',
    mainCourses: [
      'Micro and Macroeconomics - Advanced Level',
      'Digital Economy: Modern Challenges',
      'Management in Digital Economy',
      'International Economic Relations - Advanced Level',
      'International Monetary Relations - Advanced Level',
      'International Commercial Activity',
      'Cross-cultural Management',
      'Russian as a Foreign Language',
      'Chinese for Beginners',
      'Digital Business Transformation',
      'Fintech, Distributed Ledger Technologies and Artificial Intelligence',
      'International Trade Law',
      'Enterprise Economics in the Digital Age',
      'Business Communication Management and Business Skills Development (Training)',
      'Business Negotiation Strategy'
    ],
    mainProgramTitle: 'About the Program',
    mainProgramPoints: [
      'The program aims to prepare highly qualified specialists in the field of international private law.',
      'Students gain in-depth knowledge in the legal regulation of international private relations.',
      'Special attention is paid to the study of international commercial contracts and international commercial arbitration.',
      'The program covers issues of international sales, cross-border transportation, and international settlements.',
      'Graduates work in international law firms, multinational corporations, and consulting companies.'
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
