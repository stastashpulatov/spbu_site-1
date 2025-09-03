import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './BranchEducation.scss';

type Translations = {
  title: string;
  description: string;
  educationLevelsTitle: string;
  studentCountTitle: string;
  transferResultsTitle: string;
  tableHeaders: {
    number: string;
    code: string;
    name: string;
    program: string;
    level: string;
    form: string;
    duration: string;
    subjects: string;
    practices: string;
  };
  educationData: {
    number: number;
    code: string;
    name: string;
    program: string;
    level: string;
    form: string;
    duration: string;
    subjects: string;
    practices: string;
  }[];
  documents: {
    title: string;
    link: string;
    url: string;
  }[];
};

const translations: Record<'ru' | 'en' | 'uz', Translations> = {
  ru: {
    title: 'Образование',
    description: 'Информация о реализуемых образовательных программах и численности обучающихся',
    educationLevelsTitle: 'Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения',
    studentCountTitle: 'Информация о численности обучающихся в форме электронного документа, подписанного электронной подписью',
    transferResultsTitle: 'Информация о результатах перевода, восстановления и отчисления в форме электронного документа, подписанного электронной подписью',
    tableHeaders: {
      number: '№ п/п',
      code: 'Код специальности, направления подготовки, шифр группы научных специальностей',
      name: 'Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей',
      program: 'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
      level: 'Уровень образования',
      form: 'Форма обучения',
      duration: 'Нормативный срок обучения',
      subjects: 'Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей образовательной программой',
      practices: 'Практики, предусмотренные соответствующей образовательной программой'
    },
    educationData: [
      {
        number: 1,
        code: '02.03.02',
        name: 'Фундаментальная информатика и информационные технологии',
        program: '(СВ.7802.*) Программирование и информационные технологии',
        level: 'Бакалавриат',
        form: 'Очная',
        duration: '4 года',
        subjects: '2024',
        practices: 'Производственная практика (научно-исследовательская работа); Производственная практика (проектно-технологическая); Учебная практика (научно-исследовательская работа); Учебная практика (проектно-технологическая)'
      },
      {
        number: 2,
        code: '38.03.01',
        name: 'Экономика',
        program: '(СВ.7800.*) Международный бизнес в цифровой экономике',
        level: 'Бакалавриат',
        form: 'Очная',
        duration: '4 года',
        subjects: '2023, 2024, 2025',
        practices: 'Учебная практика (научно-исследовательская работа); Учебная практика (ознакомительная)'
      },
      {
        number: 3,
        code: '38.04.01',
        name: 'Экономика',
        program: '(ВМ.7804.*) Международное предпринимательство в цифровой экономике',
        level: 'Магистратура',
        form: 'Очная',
        duration: '2 года',
        subjects: '2024, 2025',
        practices: 'Производственная практика (практика по профилю профессиональной деятельности); Учебная практика (научно-исследовательская работа)'
      },
      {
        number: 4,
        code: '40.04.01',
        name: 'Юриспруденция',
        program: '(ВМ.7801.*) Международное частное право',
        level: 'Магистратура',
        form: 'Очная',
        duration: '2 года',
        subjects: '2024, 2025',
        practices: 'Производственная практика (преддипломная); Учебная практика (ознакомительная)'
      },
      {
        number: 5,
        code: '58.04.01',
        name: 'Востоковедение и африканистика',
        program: '(ВМ.7803.*) Современный Китай: экономика, политика, общество (с изучением китайского языка)',
        level: 'Магистратура',
        form: 'Очная',
        duration: '2 года',
        subjects: '2024, 2025',
        practices: 'Производственная практика. Научно-исследовательская работа; Производственная практика. Подготовка выпускной квалификационной работы (Преддипломная практика); Учебная практика (педагогическая)'
      }
    ],
    documents: [
      {
        title: 'Информация о численности обучающихся.pdf',
        link: 'Информация о численности обучающихся',
        url: 'https://spbu.ru/sites/default/files/2025-07/chislennost-obuchayushchikhsya_tashkent_20251009.pdf'
      },
      {
        title: 'Информация о результатах перевода, восстановления и отчисления.pdf',
        link: 'Информация о результатах перевода, восстановления и отчисления',
        url: 'https://spbu.ru/sites/default/files/2025-07/perevody-i-vosstanovleniya_tashkent_20251009.pdf'
      }
    ]
  },
  en: {
    title: 'Education',
    description: 'Information about implemented educational programs and number of students',
    educationLevelsTitle: 'Information on implemented levels of education, forms of study, standard periods of study',
    studentCountTitle: 'Information on the number of students in the form of an electronic document signed with an electronic signature',
    transferResultsTitle: 'Information on transfer results, restoration and expulsion in the form of an electronic document signed with an electronic signature',
    tableHeaders: {
      number: 'No.',
      code: 'Code of specialty, field of study, code of group of scientific specialties',
      name: 'Name of profession, specialty, field of study, name of group of scientific specialties',
      program: 'Educational program, orientation, profile, code and name of scientific specialty',
      level: 'Level of education',
      form: 'Form of study',
      duration: 'Standard period of study',
      subjects: 'Academic subjects, courses, disciplines (modules) provided by the relevant educational program',
      practices: 'Practices provided by the relevant educational program'
    },
    educationData: [
      {
        number: 1,
        code: '02.03.02',
        name: 'Fundamental Informatics and Information Technologies',
        program: '(СВ.7802.*) Programming and Information Technologies',
        level: 'Bachelor\'s',
        form: 'Full-time',
        duration: '4 years',
        subjects: '2024',
        practices: 'Industrial practice (research work); Industrial practice (project-technological); Educational practice (research work); Educational practice (project-technological)'
      },
      {
        number: 2,
        code: '38.03.01',
        name: 'Economics',
        program: '(СВ.7800.*) International Business in Digital Economy',
        level: 'Bachelor\'s',
        form: 'Full-time',
        duration: '4 years',
        subjects: '2023, 2024, 2025',
        practices: 'Educational practice (research work); Educational practice (introductory)'
      },
      {
        number: 3,
        code: '38.04.01',
        name: 'Economics',
        program: '(ВМ.7804.*) International Entrepreneurship in Digital Economy',
        level: 'Master\'s',
        form: 'Full-time',
        duration: '2 years',
        subjects: '2024, 2025',
        practices: 'Industrial practice (practice in the profile of professional activity); Educational practice (research work)'
      },
      {
        number: 4,
        code: '40.04.01',
        name: 'Jurisprudence',
        program: '(ВМ.7801.*) International Private Law',
        level: 'Master\'s',
        form: 'Full-time',
        duration: '2 years',
        subjects: '2024, 2025',
        practices: 'Industrial practice (pre-diploma); Educational practice (introductory)'
      },
      {
        number: 5,
        code: '58.04.01',
        name: 'Oriental and African Studies',
        program: '(ВМ.7803.*) Modern China: Economics, Politics, Society (with Chinese Language Study)',
        level: 'Master\'s',
        form: 'Full-time',
        duration: '2 years',
        subjects: '2024, 2025',
        practices: 'Industrial practice. Research work; Industrial practice. Preparation of final qualifying work (Pre-diploma practice); Educational practice (pedagogical)'
      }
    ],
    documents: [
      {
        title: 'Information on the number of students.pdf',
        link: 'Information on the number of students',
        url: 'https://spbu.ru/sites/default/files/2025-07/chislennost-obuchayushchikhsya_tashkent_20251009.pdf'
      },
      {
        title: 'Information on transfer results, restoration and expulsion.pdf',
        link: 'Information on transfer results, restoration and expulsion',
        url: 'https://spbu.ru/sites/default/files/2025-07/perevody-i-vosstanovleniya_tashkent_20251009.pdf'
      }
    ]
  },
  uz: {
    title: 'Ta\'lim',
    description: 'Amalga oshirilayotgan ta\'lim dasturlari va talabalar soni haqida ma\'lumot',
    educationLevelsTitle: 'Amalga oshirilayotgan ta\'lim darajalari, o\'qitish shakllari, o\'qitishning standart muddatlari haqida ma\'lumot',
    studentCountTitle: 'Elektron imzo bilan imzolangan elektron hujjat shaklida talabalar soni haqida ma\'lumot',
    transferResultsTitle: 'Elektron imzo bilan imzolangan elektron hujjat shaklida ko\'chirish, tiklash va chetlatish natijalari haqida ma\'lumot',
    tableHeaders: {
      number: '№',
      code: 'Ixtisoslik, yo\'nalish tayyorgarligi kodi, ilmiy ixtisosliklar guruhi kodi',
      name: 'Kasb, ixtisoslik, yo\'nalish tayyorgarligi, ilmiy ixtisosliklar guruhi nomi',
      program: 'Ta\'lim dasturi, yo\'nalish, profil, ilmiy ixtisoslik kodi va nomi',
      level: 'Ta\'lim darajasi',
      form: 'O\'qitish shakli',
      duration: 'O\'qitishning standart muddati',
      subjects: 'Tegishli ta\'lim dasturi tomonidan taqdim etilgan o\'quv fanlari, kurslar, fanlar (modullar)',
      practices: 'Tegishli ta\'lim dasturi tomonidan taqdim etilgan amaliyotlar'
    },
    educationData: [
      {
        number: 1,
        code: '02.03.02',
        name: 'Asosiy informatika va axborot texnologiyalari',
        program: '(СВ.7802.*) Dasturlash va axborot texnologiyalari',
        level: 'Bakalavriat',
        form: 'Kunduzgi',
        duration: '4 yil',
        subjects: '2024',
        practices: 'Ishlab chiqarish amaliyoti (ilmiy-tadqiqot ishi); Ishlab chiqarish amaliyoti (loyiha-texnologik); O\'quv amaliyoti (ilmiy-tadqiqot ishi); O\'quv amaliyoti (loyiha-texnologik)'
      },
      {
        number: 2,
        code: '38.03.01',
        name: 'Iqtisodiyot',
        program: '(СВ.7800.*) Raqamli iqtisodiyotda xalqaro biznes',
        level: 'Bakalavriat',
        form: 'Kunduzgi',
        duration: '4 yil',
        subjects: '2023, 2024, 2025',
        practices: 'O\'quv amaliyoti (ilmiy-tadqiqot ishi); O\'quv amaliyoti (tanishtiruvchi)'
      },
      {
        number: 3,
        code: '38.04.01',
        name: 'Iqtisodiyot',
        program: '(ВМ.7804.*) Raqamli iqtisodiyotda xalqaro tadbirkorlik',
        level: 'Magistratura',
        form: 'Kunduzgi',
        duration: '2 yil',
        subjects: '2024, 2025',
        practices: 'Ishlab chiqarish amaliyoti (kasbiy faoliyat profilida amaliyot); O\'quv amaliyoti (ilmiy-tadqiqot ishi)'
      },
      {
        number: 4,
        code: '40.04.01',
        name: 'Yurisprudensiya',
        program: '(ВМ.7801.*) Xalqaro xususiy huquq',
        level: 'Magistratura',
        form: 'Kunduzgi',
        duration: '2 yil',
        subjects: '2024, 2025',
        practices: 'Ishlab chiqarish amaliyoti (diplomdan oldingi); O\'quv amaliyoti (tanishtiruvchi)'
      },
      {
        number: 5,
        code: '58.04.01',
        name: 'Sharqshunoslik va afrikashunoslik',
        program: '(ВМ.7803.*) Zamonaviy Xitoy: iqtisodiyot, siyosat, jamiyat (xitoy tili o\'rganish bilan)',
        level: 'Magistratura',
        form: 'Kunduzgi',
        duration: '2 yil',
        subjects: '2024, 2025',
        practices: 'Ishlab chiqarish amaliyoti. Ilmiy-tadqiqot ishi; Ishlab chiqarish amaliyoti. Bitiruv malakaviy ishini tayyorlash (Diplomdan oldingi amaliyot); O\'quv amaliyoti (pedagogik)'
      }
    ],
    documents: [
      {
        title: 'Talabalar soni haqida ma\'lumot.pdf',
        link: 'Talabalar soni haqida ma\'lumot',
        url: 'https://spbu.ru/sites/default/files/2025-07/chislennost-obuchayushchikhsya_tashkent_20251009.pdf'
      },
      {
        title: 'Ko\'chirish, tiklash va chetlatish natijalari haqida ma\'lumot.pdf',
        link: 'Ko\'chirish, tiklash va chetlatish natijalari haqida ma\'lumot',
        url: 'https://spbu.ru/sites/default/files/2025-07/perevody-i-vosstanovleniya_tashkent_20251009.pdf'
      }
    ]
  }
};

const BranchEducation: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchEducation must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-education">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">📋</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">📚</span>
            <h2 className="section-title">{t.educationLevelsTitle}</h2>
          </div>
          
          <div className="info-table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>{t.tableHeaders.number}</th>
                  <th>{t.tableHeaders.code}</th>
                  <th>{t.tableHeaders.name}</th>
                  <th>{t.tableHeaders.program}</th>
                  <th>{t.tableHeaders.level}</th>
                  <th>{t.tableHeaders.form}</th>
                  <th>{t.tableHeaders.duration}</th>
                  <th>{t.tableHeaders.subjects}</th>
                  <th>{t.tableHeaders.practices}</th>
                </tr>
              </thead>
              <tbody>
                {t.educationData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.number}</td>
                    <td>{row.code}</td>
                    <td>{row.name}</td>
                    <td>{row.program}</td>
                    <td>{row.level}</td>
                    <td>{row.form}</td>
                    <td>{row.duration}</td>
                    <td>{row.subjects}</td>
                    <td>{row.practices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">📊</span>
            <h2 className="section-title">{t.studentCountTitle}</h2>
          </div>
          
          <div className="document-links">
            <a 
              href={t.documents[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="document-link"
            >
              {t.documents[0].link}
            </a>
          </div>
        </div>

        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">📋</span>
            <h2 className="section-title">{t.transferResultsTitle}</h2>
          </div>
          
          <div className="document-links">
            <a 
              href={t.documents[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="document-link"
            >
              {t.documents[1].link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchEducation;
