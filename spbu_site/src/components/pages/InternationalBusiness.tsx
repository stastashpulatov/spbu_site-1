import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './InternationalBusiness.scss';

type Translations = {
  [key in Language]: {
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
    title: 'Международный бизнес в цифровой экономике',
    code: '38.03.01',
    level: 'Бакалавриат',
    form: 'Очная',
    duration: '4 года',
    department: 'Экономика',
    cost: '27 195 000 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      'Русский язык (тестирование)',
      'Математика (от 25 до 100 баллов)'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'Макро- и микроэкономика',
      'Менеджмент',
      'Цифровая культура бизнес-сред',
      'Мировая экономика',
      'Международная бизнес-среда и информация',
      'Теория организации и организационное поведение',
      'Учет, финансы и аудит в цифровой среде',
      'Международный маркетинг и маркетинговые исследования',
      'Управление международными проектами и бизнес-процессами',
      'Экономика и управление фирмой',
      'Математические методы',
      'Эконометрика',
      'Статистика',
      'Россия в глобальной международной экономической системе',
      'Международные экономические отношения',
      'Международная торговля и торговая политика',
      'Конкурентная среда',
      'Экономика и организация внешнеэкономической деятельности'
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
    title: 'Raqamli iqtisodiyotda xalqaro biznes',
    code: '38.03.01',
    level: 'Bakalavr',
    form: 'Kunduzgi',
    duration: '4 yil',
    department: 'Iqtisodiyot',
    cost: '27 195 000 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      'Rus tili (test)',
      'Matematika (25 dan 100 ballgacha)'
    ],
    mainCoursesTitle: 'Asosiy o\'quv kurslari',
    mainCourses: [
      'Makro va mikroiqtisodiyot',
      'Menejment',
      'Biznes muhitining raqamli madaniyati',
      'Jahon iqtisodiyoti',
      'Xalqaro biznes muhiti va axborot',
      'Tashkilot nazariyasi va tashkiliy xulq-atvor',
      'Raqamli muhitda hisob, moliya va audit',
      'Xalqaro marketing va marketing tadqiqotlari',
      'Xalqaro loyihalar va biznes jarayonlarini boshqarish',
      'Firma iqtisodiyoti va boshqaruvi',
      'Matematik usullar',
      'Ekonometrika',
      'Statistika',
      'Rossiya global xalqaro iqtisodiy tizimda',
      'Xalqaro iqtisodiy munosabatlar',
      'Xalqaro savdo va savdo siyosati',
      'Raqobat muhiti',
      'Tashqi iqtisodiy faoliyat iqtisodiyoti va tashkil etilishi'
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
    title: 'International Business in Digital Economy',
    code: '38.03.01',
    level: 'Bachelor\'s degree',
    form: 'Full-time',
    duration: '4 years',
    department: 'Economics',
    cost: '27,195,000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      'Russian language (testing)',
      'Mathematics (25 to 100 points)'
    ],
    mainCoursesTitle: 'Main Courses',
    mainCourses: [
      'Macro and Microeconomics',
      'Management',
      'Digital Culture of Business Environments',
      'World Economy',
      'International Business Environment and Information',
      'Organization Theory and Organizational Behavior',
      'Accounting, Finance and Audit in Digital Environment',
      'International Marketing and Marketing Research',
      'International Project and Business Process Management',
      'Economics and Company Management',
      'Mathematical Methods',
      'Econometrics',
      'Statistics',
      'Russia in the Global International Economic System',
      'International Economic Relations',
      'International Trade and Trade Policy',
      'Competitive Environment',
      'Economics and Organization of Foreign Economic Activity'
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
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  const heroRef = useRef<HTMLDivElement>(null);
  
  if (!langContext) {
    throw new Error('InternationalBusiness must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`international-business ${theme}`}>
      <HomeButton />
      <div ref={heroRef} className="hero-section">
        <div className="hero-content">
          <h1>{t.title}</h1>
          <div className="info-list">
            <div className="info-item">
              <span className="code">{t.code}</span>
            </div>
            <div className="info-item">
              <span className="label">Уровень обучения – </span>
              <span className="value">{t.level}</span>
            </div>
            <div className="info-item">
              <span className="label">Форма обучения – </span>
              <span className="value">{t.form}</span>
            </div>
            <div className="info-item">
              <span className="label">Продолжительность обучения – </span>
              <span className="value">{t.duration}</span>
            </div>
            <div className="info-item">
              <span className="label">Направление – </span>
              <span className="value">{t.department}</span>
            </div>
            <div className="info-item">
              <span className="label">Стоимость обучения в год – </span>
              <span className="value">{t.cost}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container">
        <section className="program-points">
          <h2>{t.mainProgramTitle}</h2>
          {t.mainProgramPoints.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </section>

        <section className="admission-section">
          <h2>{t.admissionTitle}</h2>
          <ul>
            {t.admissionText.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </section>

        <section className="courses-section">
          <h2>{t.mainCoursesTitle}</h2>
          <ul>
            {t.mainCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </section>

        <section className="teachers-section">
          <h2>{t.teachersTitle}</h2>
          <ul>
            {t.teachers.map((teacher, index) => (
              <li key={index}>{teacher}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InternationalBusiness;
