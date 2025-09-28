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
    backgroundImage: '/images/image.png',
    backgroundPosition: 'center 30%',
    title: 'Международное предпринимательство в цифровой экономике',
    code: '38.04.01',
    level: 'Магистратура',
    form: 'Очная',
    duration: '2 года',
    department: 'Экономика',
    cost: '29 370 600 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      'Экономика (письменно)',
      'Английский язык (тестирование)'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'Цифровая трансформация бизнеса',
      'Стратегический менеджмент в цифровой среде',
      'Международный электронный бизнес',
      'Управление цифровыми проектами',
      'Цифровой маркетинг и аналитика',
      'Финансовые технологии и инновации',
      'Международное предпринимательское право',
      'Управление цифровыми инновациями',
      'Анализ больших данных в бизнесе',
      'Кибербезопасность в международном бизнесе',
      'Цифровые платформы и экосистемы',
      'Международная электронная коммерция',
      'Блокчейн и криптоактивы',
      'Искусственный интеллект в бизнесе',
      'Цифровая экономика и предпринимательство'
    ],
    mainProgramTitle: 'О программе',
    mainProgramPoints: [
      'Программа готовит специалистов в области международного предпринимательства с фокусом на цифровую экономику и инновационные технологии.',
      'Студенты получают практические навыки в создании и управлении цифровым бизнесом на международном уровне.',
      'Выпускники программы становятся востребованными специалистами в области цифровой трансформации бизнеса и международного предпринимательства.'
    ],
    teachersTitle: 'Известные преподаватели',
    teachers: [
      'А.Н. Андреев – доктор экономических наук, профессор, заведующий кафедрой цифровой экономики СПбГУ',
      'М.В. Иванова – доктор экономических наук, профессор кафедры международного бизнеса СПбГУ',
      'С.П. Петров – доктор технических наук, профессор кафедры информационных систем в экономике СПбГУ',
      'Е.А. Смирнова – доктор экономических наук, профессор кафедры мировой экономики СПбГУ',
      'В.Д. Морозов – кандидат экономических наук, доцент кафедры предпринимательства СПбГУ'
    ]
  },
  uz: {
    backgroundImage: '/images/image.png',
    backgroundPosition: 'center 30%',
    title: 'Raqamli iqtisodiyotda xalqaro tadbirkorlik',
    code: '38.04.01',
    level: 'Magistratura',
    form: 'Kunduzgi',
    duration: '2 yil',
    department: 'Iqtisodiyot',
    cost: '32 000 000 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      'Iqtisodiyot (yozma)',
      'Ingliz tili (test)'
    ],
    mainCoursesTitle: 'Asosiy o\'quv kurslari',
    mainCourses: [
      'Biznesning raqamli transformatsiyasi',
      'Raqamli muhitda strategik menejment',
      'Xalqaro elektron biznes',
      'Raqamli loyihalarni boshqarish',
      'Raqamli marketing va tahlil',
      'Moliyaviy texnologiyalar va innovatsiyalar',
      'Xalqaro tadbirkorlik huquqi',
      'Raqamli innovatsiyalarni boshqarish',
      'Biznesda katta ma\'lumotlarni tahlil qilish',
      'Xalqaro biznesdagi kiberhavfsizlik',
      'Raqamli platformalar va ekotizimlar',
      'Xalqaro elektron tijorat',
      'Blokcheyn va kriptoaktivlar',
      'Biznesdagi sun\'iy intellekt',
      'Raqamli iqtisodiyot va tadbirkorlik'
    ],
    mainProgramTitle: 'Dastur haqida',
    mainProgramPoints: [
      'Dastur raqamli iqtisodiyot va innovatsion texnologiyalarga e\'tibor qaratgan holda xalqaro tadbirkorlik sohasida mutaxassislarni tayyorlaydi.',
      'Talabalar xalqaro darajada raqamli biznesni yaratish va boshqarish bo\'yicha amaliy ko\'nikmalarni oladilar.',
      'Dastur bitiruvchilari biznesning raqamli transformatsiyasi va xalqaro tadbirkorlik sohasida talab qilinadigan mutaxassislarga aylanadilar.'
    ],
    teachersTitle: 'Mashhur o\'qituvchilar',
    teachers: [
      'A.N. Andreyev – iqtisodiyot fanlari doktori, professor, SPbDU Raqamli iqtisodiyot kafedrasi mudiri',
      'M.V. Ivanova – iqtisodiyot fanlari doktori, SPbDU Xalqaro biznes kafedrasi professori',
      'S.P. Petrov – texnika fanlari doktori, SPbDU Iqtisodiyotda axborot tizimlari kafedrasi professori',
      'Ye.A. Smirnova – iqtisodiyot fanlari doktori, SPbDU Jahon iqtisodiyoti kafedrasi professori',
      'V.D. Morozov – iqtisodiyot fanlari nomzodi, SPbDU Tadbirkorlik kafedrasi dotsenti'
    ]
  },
  en: {
    backgroundImage: '/images/image.png',
    backgroundPosition: 'center 30%',
    title: 'International Entrepreneurship in Digital Economy',
    code: '38.04.01',
    level: 'Master\'s degree',
    form: 'Full-time',
    duration: '2 years',
    department: 'Economics',
    cost: '32 000 000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      'Economics (written)',
      'English language (testing)'
    ],
    mainCoursesTitle: 'Main Courses',
    mainCourses: [
      'Digital Business Transformation',
      'Strategic Management in Digital Environment',
      'International E-Business',
      'Digital Project Management',
      'Digital Marketing and Analytics',
      'Financial Technologies and Innovation',
      'International Business Law',
      'Digital Innovation Management',
      'Big Data Analytics in Business',
      'Cybersecurity in International Business',
      'Digital Platforms and Ecosystems',
      'International E-Commerce',
      'Blockchain and Crypto Assets',
      'Artificial Intelligence in Business',
      'Digital Economy and Entrepreneurship'
    ],
    mainProgramTitle: 'About the Program',
    mainProgramPoints: [
      'The program prepares specialists in international entrepreneurship with a focus on digital economy and innovative technologies.',
      'Students gain practical skills in creating and managing digital business at the international level.',
      'Graduates of the program become sought-after specialists in the field of digital business transformation and international entrepreneurship.'
    ],
    teachersTitle: 'Distinguished Faculty',
    teachers: [
      'A.N. Andreev – Doctor of Economics, Professor, Head of Digital Economy Department at SPbU',
      'M.V. Ivanova – Doctor of Economics, Professor of International Business Department at SPbU',
      'S.P. Petrov – Doctor of Technical Sciences, Professor of Information Systems in Economics Department at SPbU',
      'E.A. Smirnova – Doctor of Economics, Professor of World Economy Department at SPbU',
      'V.D. Morozov – Candidate of Economics, Associate Professor of Entrepreneurship Department at SPbU'
    ]
  }
};

const DigitalEntrepreneurship: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('')
  }
  
  const {language} = langContext;
  const t = translations[language];

  return <ProgramPage programInfo={t} />;
};
export default DigitalEntrepreneurship;