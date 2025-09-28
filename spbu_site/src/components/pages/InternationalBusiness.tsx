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
    backgroundImage: '/images/economy.png',
    backgroundPosition: 'center 40%',
    title: 'Международный бизнес в цифровой экономике',
    code: '38.03.01',
    level: 'Бакалавриат',
    form: 'Очная',
    duration: '4 года',
    department: 'Экономика',
    cost: '27 195 000 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      '<a href="/files/programma_vstupit_ispytaniy_b1-50.pdf" target="_blank">Программа вступительного испытания: Русский язык</a>',
      '<a href="/files/25_bak_spets_portfolio-filial-v-tashkente.pdf" target="_blank">Программа вступительного испытания: Математика</a>'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'Микро-, Макро-, Мировая экономика',
      'Цифровая культура (онлайн-курс): Бизнес-анализ информации; Правовое регулирование отношений в Интернете',
      'Инвестиционные проекты в цифровой экономике; Учет, отчетность и аудит в цифровой среде; Международная торговля в условиях цифровизации мировой экономики; Правила международного налогообложения в условиях цифровизации экономики; Финансовые рынки и регулирование в условиях цифровизации',
      'Экономика и управление фирмой; Финансовый менеджмент; Маркетинг; Международный бизнес',
      'Россия и Узбекистан в международных экономических отношениях; Россия и Узбекистан в международных валютно-кредитных отношениях; Экономика стран ислама и исламский бизнес в условиях развития цифровой экономики',
      'Математический анализ; Линейная алгебра; Статистика с основами эконометрики',
      'Русский язык как иностранный'
    ],
    mainProgramTitle: 'О программе',
    mainProgramPoints: [
      'Программа международного бизнеса в области цифровой экономической среды и цифровой экономики – это первоклассная, передовая и уникальная программа.',
      'Программа предоставляет возможность получить практические навыки в области цифровой трансформации бизнеса.',
      'Выпускники программы смогут продолжить карьеру в области цифровой экономики и международного бизнеса.'
    ],
    teachersTitle: 'Известные преподаватели',
    teachers: [
      'Д.А. Львова – доктор экономических наук, профессор, директор Института истории экономики и международных отношений СПбГУ',
      'В.В. Ковалев – доктор экономических наук, профессор, заведующий кафедрой теории кредита и финансового менеджмента СПбГУ',
      'Н.С. Воронова – доктор экономических наук, профессор кафедры теории кредита и финансового менеджмента СПбГУ',
      'О.А. Канаева – доктор экономических наук, профессор кафедры экономической теории и социальной политики СПбГУ',
      'Д.Н. Колесов – кандидат экономических наук, доцент кафедры экономической кибернетики СПбГУ',
      'С.А. Белозеров – доктор экономических наук, профессор, заведующий кафедрой управления рисками и страхования СПбГУ',
      'Е.В. Соколовская – доктор экономических наук, профессор кафедры экономической теории СПбГУ',
      'Л.В. Гадасина – кандидат физико-математических наук, доцент кафедры информационных систем в экономике СПбГУ',
      'Е.М. Коростышевская – доктор экономических наук, профессор кафедры экономической теории и экономической политики СПбГУ'
    ]
  },
  uz: {
    backgroundImage: '/images/economy.png',
    backgroundPosition: 'center 40%',
    title: 'Raqamli iqtisodiyotda xalqaro biznes',
    code: '38.03.01',
    level: 'Bakalavr',
    form: 'Kunduzgi',
    duration: '4 yil',
    department: 'Iqtisodiyot',
    cost: '27 195 000 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      '<a href="/files/programma_vstupit_ispytaniy_b1-50.pdf" target="_blank">Rus tili (test)</a>',
      '<a href="/files/25_bak_spets_portfolio-filial-v-tashkente.pdf" target="_blank">Matematika (25 dan 100 ballgacha)</a>'
    ],
    mainCoursesTitle: "Asosiy o\'quv kurslari",
    mainCourses: [
      'Mikro-, Makro-, Jahon iqtisodiyoti',
      'Raqamli madaniyat (onlayn kurs): Biznes ma\'lumotlarini tahlil qilish; Internetdagi munosabatlarni huquqiy tartibga solish',
      'Raqamli iqtisodiyotda investitsiya loyihalari; Raqamli muhitda buxgalteriya hisobi, hisobot va audit; Jahon iqtisodiyoti raqamlashtirilishi sharoitida xalqaro savdo; Raqamli iqtisodiyot sharoitida xalqaro soliqqa tortish qoidalari; Raqamlashtirish sharoitida moliya bozorlari va tartibga solish',
      'Iqtisodiyot va kompaniyani boshqarish; Moliyaviy menejment; Marketing; Xalqaro biznes',
      'Rossiya va O\'zbekiston xalqaro iqtisodiy munosabatlarda; Rossiya va O\'zbekiston xalqaro valyuta-kredit munosabatlarida; Raqamli iqtisodiyot rivojlanishi sharoitida islom mamlakatlari iqtisodiyoti va islom biznesi',
      'Matematik tahlil; Chiziqli algebra; Ekonometrika asoslari bilan statistika',
      'Rus tili chet tili sifatida'
    ],
    mainProgramTitle: 'Dastur haqida',
    mainProgramPoints: [
      'Raqamli iqtisodiyot sohasida xalqaro biznes dasturi – bu birinchi sinf, ilgʻor va noyob dastur.',
      'Dastur raqamli biznesni oʻzgartirish sohasida amaliy koʻnikmalarni olish imkoniyatini beradi.',
      'Dastur bitiruvchilari raqamli iqtisodiyot va xalqaro biznes sohasida karerasini davom ettirishlari mumkin.'
    ],
    teachersTitle: 'Mashhur o\'qituvchilar',
    teachers: [
      'D.A. Lvova – iqtisodiyot fanlari doktori, professor, SPbDU Iqtisodiyot tarixi va xalqaro munosabatlar instituti direktori',
      'V.V. Kovalev – iqtisodiyot fanlari doktori, professor, SPbDU Kredit nazariyasi va moliyaviy menejment kafedrasi mudiri',
      'N.S. Voronova – iqtisodiyot fanlari doktori, SPbDU Kredit nazariyasi va moliyaviy menejment kafedrasi professori',
      'O.A. Kanayeva – iqtisodiyot fanlari doktori, SPbDU Iqtisodiy nazariya va ijtimoiy siyosat kafedrasi professori',
      'D.N. Kolesov – iqtisodiyot fanlari nomzodi, SPbDU Iqtisodiy kibernetika kafedrasi dotsenti',
      'S.A. Belozerov – iqtisodiyot fanlari doktori, professor, SPbDU Risklarni boshqarish va sug\'urta kafedrasi mudiri',
      'Ye.V. Sokolovskaya – iqtisodiyot fanlari doktori, SPbDU Iqtisodiy nazariya kafedrasi professori',
      'L.V. Gadasina – fizika-matematika fanlari nomzodi, SPbDU Iqtisodiyotda axborot tizimlari kafedrasi dotsenti',
      'Ye.M. Korostishevskaya – iqtisodiyot fanlari doktori, SPbDU Iqtisodiy nazariya va iqtisodiy siyosat kafedrasi professori'
    ]
  },
  en: {
    backgroundImage: '/images/economy.png',
    backgroundPosition: 'center 40%',
    title: 'International Business in Digital Economy',
    code: '38.03.01',
    level: 'Bachelor\'s degree',
    form: 'Full-time',
    duration: '4 years',
    department: 'Economics',
    cost: '27 195 000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      '<a href="/files/programma_vstupit_ispytaniy_b1-50.pdf" target="_blank">Entrance examination program: Russian language</a>',
      '<a href="/files/25_bak_spets_portfolio-filial-v-tashkente.pdf" target="_blank">Entrance examination program: Mathematics</a>'
    ],
    mainCoursesTitle: 'Main courses',
    mainCourses: [
      'Micro-, Macro-, World Economics',
      'Digital Culture (online course): Business Information Analysis; Legal Regulation of Internet Relations',
      'Investment Projects in Digital Economy; Accounting, Reporting and Audit in Digital Environment; International Trade in Digital World Economy; International Taxation Rules in Digital Economy; Financial Markets and Regulation in Digital Era',
      'Economics and Company Management; Financial Management; Marketing; International Business',
      'Russia and Uzbekistan in International Economic Relations; Russia and Uzbekistan in International Monetary Relations; Islamic Countries Economics and Islamic Business in Digital Economy',
      'Mathematical Analysis; Linear Algebra; Statistics with Basics of Econometrics',
      'Russian as a Foreign Language'
    ],
    mainProgramTitle: 'About the Program',
    mainProgramPoints: [
      'The international business program in the field of digital economic environment and digital economy is a first-class, advanced and unique program.',
      'The program provides an opportunity to acquire practical skills in the field of digital business transformation.',
      'Graduates of the program will be able to continue their career in the field of digital economy and international business.'
    ],
    teachersTitle: 'Distinguished Faculty',
    teachers: [
      'D.A. Lvova – Doctor of Economics, Professor, Director of the Institute of Economic History and International Relations, SPbU',
      'V.V. Kovalev – Doctor of Economics, Professor, Head of the Department of Credit Theory and Financial Management, SPbU',
      'N.S. Voronova – Doctor of Economics, Professor at the Department of Credit Theory and Financial Management, SPbU',
      'O.A. Kanaeva – Doctor of Economics, Professor at the Department of Economic Theory and Social Policy, SPbU',
      'D.N. Kolesov – Candidate of Economics, Associate Professor at the Department of Economic Cybernetics, SPbU',
      'S.A. Belozerov – Doctor of Economics, Professor, Head of the Department of Risk Management and Insurance, SPbU',
      'E.V. Sokolovskaya – Doctor of Economics, Professor at the Department of Economic Theory, SPbU',
      'L.V. Gadasina – Candidate of Physical and Mathematical Sciences, Associate Professor at the Department of Information Systems in Economics, SPbU',
      'E.M. Korostyshevskaya – Doctor of Economics, Professor at the Department of Economic Theory and Economic Policy, SPbU'
    ]
  }
};

const InternationalBusiness: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('InternationalBusiness must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return <ProgramPage programInfo={t} />;
};

export default InternationalBusiness;
