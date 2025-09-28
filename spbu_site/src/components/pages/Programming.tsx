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
    backgroundImage: '/images/programming.png',
    backgroundPosition: 'center 30%',
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
    backgroundImage: '/images/programming-bg.jpg',
    backgroundPosition: 'center 30%',
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
      'Mashinani o\'rganish',
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
      'Ta\'lim dasturi murakkab tizimlarni tahlil qilish va loyihalash, dasturiy ta\'minotni ishlab chiqish va dasturiy loyihalarni boshqarish sohasidagi mutaxassislarni tayyorlashga qaratilgan.',
      'Talabalar dasturlash, algoritmlar va ma\'lumotlar tuzilmalari sohasida chuqur bilimga ega bo\'ladilar, bu ularga yetakchi IT-kompaniyalarda muvaffaqiyatli ishlash imkonini beradi.',
      'Dastur zamonaviy dasturlash tillarini, dasturiy ta\'minotni ishlab chiqish texnologiyalarini va loyihalarni boshqarish usullarini o\'rganishni o\'z ichiga oladi.'
    ]
  },
  en: {
    backgroundImage: '/images/programming-bg.jpg',
    backgroundPosition: 'center 30%',
    title: 'Programming and Information Technologies',
    code: '02.03.02',
    level: 'Bachelor\'s Degree',
    form: 'Full-time',
    duration: '4 years',
    department: 'Programming',
    cost: '27 195 000 UZS',
    admissionTitle: 'Entrance Examinations',
    admissionText: [
      'Russian Language (testing)',
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
      'System Programming',
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
      'The educational program is focused on training specialists in the field of analysis and design of complex systems, software development, and software project management.',
      'Students gain deep knowledge in programming, algorithms, and data structures, enabling them to work successfully in leading IT companies.',
      'The program includes the study of modern programming languages, software development technologies, and project management methods.'
    ]
  }
};

const Programming: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('Programming must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return <ProgramPage programInfo={t} />;
};

export default Programming;
