import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './InternationalPrivateLaw.scss';

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
      'Xalqaro shartnomaviy huquq',
      'Transchegaraviy bankrotlik',
      'Xalqaro soliq huquqi',
      'Xalqaro tashishlarni huquqiy tartibga solish',
      'Xalqaro mehnat huquqi'
    ],
    mainProgramTitle: 'Dastur haqida',
    mainProgramPoints: [
      'Dastur xalqaro xususiy huquq sohasida yuqori malakali mutaxassislarni tayyorlashga qaratilgan.',
      'Talabalar xalqaro xususiy munosabatlarni huquqiy tartibga solish sohasida chuqur bilim oladilar.',
      'Xalqaro tijorat shartnomalari va xalqaro tijorat arbitrajini o\'rganishga alohida e\'tibor qaratiladi.',
      'Dastur doirasida xalqaro oldi-sotdi, transchegaraviy tashish va xalqaro hisob-kitoblar masalalari o\'rganiladi.',
      'Bitiruvchilar xalqaro yuridik firmalarda, transmilliy korporatsiyalarda va konsalting kompaniyalarida ishlaydilar.'
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
    title: 'International Private Law',
    code: '40.04.01',
    level: 'Master\'s degree',
    form: 'Full-time',
    duration: '2 years',
    department: 'Law',
    cost: '28,000,000 UZS',
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
  const { language = 'ru' } = useContext(LanguageContext) || {};
  const { theme = 'light' } = useTheme() || {};
  const content = translations[language as keyof Translations];

  return (
    <div className={`international-private-law ${theme}`}>
      <HomeButton />
      <section className="hero-section">
        <div className="hero-content">
          <h1>{content.title}</h1>
          <div className="info-list">
            <div className="info-item">
              <span className="code">{content.code}</span>
            </div>
            <div className="info-item">
              <span className="label">Уровень:</span>
              <span className="value">{content.level}</span>
            </div>
            <div className="info-item">
              <span className="label">Форма обучения:</span>
              <span className="value">{content.form}</span>
            </div>
            <div className="info-item">
              <span className="label">Продолжительность:</span>
              <span className="value">{content.duration}</span>
            </div>
            <div className="info-item">
              <span className="label">Факультет:</span>
              <span className="value">{content.department}</span>
            </div>
            <div className="info-item">
              <span className="label">Стоимость:</span>
              <span className="value">{content.cost}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="admission-section">
        <h2>{content.admissionTitle}</h2>
        <ul>
          {content.admissionText.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </section>

      <section className="program-section">
        <h2>{content.mainProgramTitle}</h2>
        {content.mainProgramPoints.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </section>

      <section className="courses-section">
        <h2>{content.mainCoursesTitle}</h2>
        <ul>
          {content.mainCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      <section className="teachers-section">
        <h2>{content.teachersTitle}</h2>
        <ul>
          {content.teachers.map((teacher, index) => (
            <li key={index}>{teacher}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default InternationalPrivateLaw;
