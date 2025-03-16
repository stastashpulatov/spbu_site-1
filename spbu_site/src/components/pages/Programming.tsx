import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './Programming.scss';

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
    mainProgramPoints: string[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Программирование и информационные технологии',
    code: '02.03.02',
    level: 'Бакалавриат',
    form: 'Очная',
    duration: '4 года',
    department: 'Программирование',
    cost: '27 195 000 сум',
    admissionTitle: 'Вступительные испытания',
    admissionText: [
      'Русский язык (тестирование)',
      'Математика (от 25 до 100 баллов)',
      'Приём документов до 25 августа 2024 года'
    ],
    mainCoursesTitle: 'Основные учебные курсы',
    mainCourses: [
      'C/C++',
      'Java',
      'Python',
      'Web-программирование',
      'Объектно-ориентированное программирование',
      'Теория вероятностей и математическая статистика',
      'Базы данных',
      'Дискретная математика',
      'Архитектура компьютеров',
      'Алгоритмы и структуры данных',
      'Разработка ПО',
      'Машинное обучение',
      'Теория автоматов',
      'Параллельное программирование',
      'Системное программирование',
      'Компьютерная графика',
      'Операционные системы',
      'Функциональное программирование',
      'Верификация программ',
      'Компьютерные сети и безопасность',
      'Распределенные системы',
      'Интернет технологии',
      'Методы оптимизации',
      'Облачные распределенные вычисления',
      'Системы управления базами данных',
      'Основы искусственного интеллекта'
    ],
    mainProgramPoints: [
      'Образовательная программа ориентирована на подготовку специалистов в области анализа и проектирования сложных систем, разработки программного обеспечения и управления программными проектами.',
      'Студенты получают глубокие знания в области программирования, алгоритмов и структур данных, что позволяет им успешно работать в ведущих IT-компаниях.',
      'Программа включает изучение современных языков программирования, технологий разработки программного обеспечения и методов управления проектами.'
    ]
  },
  uz: {
    title: 'Dasturlash va axborot texnologiyalari',
    code: '02.03.02',
    level: 'Bakalavr',
    form: 'Kunduzgi',
    duration: '4 yil',
    department: 'Dasturlash',
    cost: '27 195 000 so\'m',
    admissionTitle: 'Kirish imtihonlari',
    admissionText: [
      'Rus tili (test)',
      'Matematika (25 dan 100 ballgacha)',
      'Hujjatlarni topshirish muddati 2024 yil 25 avgustgacha'
    ],
    mainCoursesTitle: 'Asosiy o\'quv kurslari',
    mainCourses: [
      'C/C++',
      'Java',
      'Python',
      'Web-dasturlash',
      'Obyektga yo\'naltirilgan dasturlash',
      'Ehtimollar nazariyasi va matematik statistika',
      'Ma\'lumotlar bazasi',
      'Diskret matematika',
      'Kompyuter arxitekturasi',
      'Algoritmlar va ma\'lumotlar tuzilmasi',
      'Dasturiy ta\'minot ishlab chiqish',
      'Mashinali o\'qitish',
      'Avtomatlar nazariyasi',
      'Parallel dasturlash',
      'Tizimli dasturlash',
      'Kompyuter grafikasi',
      'Operatsion tizimlar',
      'Funksional dasturlash',
      'Dasturlarni tekshirish',
      'Kompyuter tarmoqlari va xavfsizlik',
      'Taqsimlangan tizimlar',
      'Internet texnologiyalari',
      'Optimallashtirish usullari',
      'Bulutli taqsimlangan hisoblash',
      'Ma\'lumotlar bazasini boshqarish tizimlari',
      'Sun\'iy intellekt asoslari'
    ],
    mainProgramPoints: [
      'Ta\'lim dasturi murakkab tizimlarni tahlil qilish va loyihalash, dasturiy ta\'minotni ishlab chiqish va dasturiy loyihalarni boshqarish bo\'yicha mutaxassislarni tayyorlashga yo\'naltirilgan.',
      'Talabalar dasturlash, algoritmlar va ma\'lumotlar tuzilmasi sohasida chuqur bilim oladilar, bu ularga yetakchi IT-kompaniyalarda muvaffaqiyatli ishlash imkonini beradi.',
      'Dastur zamonaviy dasturlash tillari, dasturiy ta\'minotni ishlab chiqish texnologiyalari va loyihalarni boshqarish usullarini o\'rganishni o\'z ichiga oladi.'
    ]
  },
  en: {
    title: 'Programming and Information Technologies',
    code: '02.03.02',
    level: 'Bachelor\'s degree',
    form: 'Full-time',
    duration: '4 years',
    department: 'Programming',
    cost: '27,195,000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      'Russian language (testing)',
      'Mathematics (25 to 100 points)',
      'Document submission until August 25, 2024'
    ],
    mainCoursesTitle: 'Main Courses',
    mainCourses: [
      'C/C++',
      'Java',
      'Python',
      'Web Programming',
      'Object-Oriented Programming',
      'Probability Theory and Mathematical Statistics',
      'Databases',
      'Discrete Mathematics',
      'Computer Architecture',
      'Algorithms and Data Structures',
      'Software Development',
      'Machine Learning',
      'Automata Theory',
      'Parallel Programming',
      'Systems Programming',
      'Computer Graphics',
      'Operating Systems',
      'Functional Programming',
      'Program Verification',
      'Computer Networks and Security',
      'Distributed Systems',
      'Internet Technologies',
      'Optimization Methods',
      'Cloud Distributed Computing',
      'Database Management Systems',
      'Artificial Intelligence Fundamentals'
    ],
    mainProgramPoints: [
      'The educational program is focused on training specialists in the analysis and design of complex systems, software development, and software project management.',
      'Students gain deep knowledge in programming, algorithms, and data structures, enabling them to work successfully in leading IT companies.',
      'The program includes the study of modern programming languages, software development technologies, and project management methods.'
    ]
  }
};

const Programming: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  const heroRef = useRef<HTMLDivElement>(null);
  
  if (!langContext) {
    throw new Error('Programming must be used within Language Provider');
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
    <div className={`programming ${theme}`}>
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
      </div>
    </div>
  );
};

export default Programming;
