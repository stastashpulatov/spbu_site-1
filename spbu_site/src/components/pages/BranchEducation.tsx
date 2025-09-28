import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './BranchEducation.scss';

type YearLink = {
  year: string;
  url?: string; // Сделаем url опциональным
};

type ProgramDescriptionData = {
  number: number;
  code: string;
  name: string;
  level: string;
  program: string;
  forms: string;
  descriptionLink?: YearLink[];
  curriculumLink?: YearLink[];
  workProgramsLink?: YearLink[];
  calendarLink?: YearLink[];
  practiceProgramsLink?: YearLink[];
  methodicalDocumentsLink?: YearLink[];
};

type EmploymentData = {
  code: string;
  name: string;
  program: string;
  graduatesCount: number;
  employedCount: number;
};

type Translations = {
  title: string;
  description: string;
  educationLevelsTitle: string;
  studentCountTitle: string;
  transferResultsTitle: string;
  programDescriptionTitle: string;
  employmentTitle: string;
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
  programDescriptionHeaders: {
    number: string;
    code: string;
    name: string;
    level: string;
    program: string;
    forms: string;
    descriptionLink: string;
    curriculumLink: string;
    workProgramsLink: string;
    calendarLink: string;
    practiceProgramsLink: string;
    methodicalDocumentsLink: string;
  };
  employmentHeaders: {
    code: string;
    name: string;
    program: string;
    graduatesCount: string;
    employedCount: string;
  };
  educationData: {
    number: number;
    code: string;
    name: string;
    program: string;
    level: string;
    form: string;
    duration: string;
    subjects: YearLink[];
    practices: string;
  }[];
  programDescriptionData: ProgramDescriptionData[];
  employmentData: EmploymentData[];
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
    programDescriptionTitle: 'Информация об описании образовательных программ',
    employmentTitle: 'Информация о трудоустройстве выпускников для каждой реализуемой образовательной программы, по которой состоялся выпуск за 2023-2024 учебный год',
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
    programDescriptionHeaders: {
      number: '№ п/п',
      code: 'Код специальности, направления подготовки, шифр группы научных специальностей',
      name: 'Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей',
      level: 'Уровень образования',
      program: 'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
      forms: 'Реализуемые формы обучения',
      descriptionLink: 'Ссылка на описание образовательной программы с приложением ее копии',
      curriculumLink: 'Ссылка на учебный план',
      workProgramsLink: 'Ссылки на рабочие программы (по каждой дисциплине в составе образовательной программы)',
      calendarLink: 'Ссылка на календарный учебный график',
      practiceProgramsLink: 'Ссылка на программы практик, предусмотренных соответствующей образовательной программой',
      methodicalDocumentsLink: 'Ссылка на методические и иные документы'
    },
    employmentHeaders: {
      code: 'Код специальности, направления подготовки, шифр',
      name: 'Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей',
      program: 'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
      graduatesCount: 'Количество выпускников',
      employedCount: 'Количество трудоустроенных выпускников'
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
        subjects: [
          { year: '2024', url: 'https://nc.spbu.ru/s/NC8ta2N8GLdY7oS' }
        ],
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
        subjects: [
          { year: '2023', url: 'https://nc.spbu.ru/s/C6En2n8PntJSg9r' },
          { year: '2024', url: 'https://nc.spbu.ru/s/bLFxCF5j2Y25om4' },
          { year: '2025', url: 'https://nc.spbu.ru/s/BXqRoGptqmazyoa' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' },
          { year: '2025' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        practices: 'Производственная практика. Научно-исследовательская работа; Производственная практика. Подготовка выпускной квалификационной работы (Преддипломная практика); Учебная практика (педагогическая)'
      }
    ],
    programDescriptionData: [
      {
        number: 1,
        code: '02.03.02',
        name: 'Фундаментальная информатика и информационные технологии',
        level: 'Бакалавриат',
        program: '(СВ.7802.*) Программирование и информационные технологии',
        forms: 'Очная',
        curriculumLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        workProgramsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        calendarLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        practiceProgramsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        methodicalDocumentsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }]
      },
      {
        number: 2,
        code: '38.03.01',
        name: 'Экономика',
        level: 'Бакалавриат',
        program: '(СВ.7800.*) Международный бизнес в цифровой экономике',
        forms: 'Очная',
        curriculumLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        workProgramsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        calendarLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        practiceProgramsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        methodicalDocumentsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ]
      },
      {
        number: 3,
        code: '38.04.01',
        name: 'Экономика',
        level: 'Магистратура',
        program: '(ВМ.7804.*) Международное предпринимательство в цифровой экономике',
        forms: 'Очная',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ]
      },
      {
        number: 4,
        code: '40.04.01',
        name: 'Юриспруденция',
        level: 'Магистратура',
        program: '(ВМ.7801.*) Международное частное право',
        forms: 'Очная',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ]
      },
      {
        number: 5,
        code: '58.04.01',
        name: 'Востоковедение и африканистика',
        level: 'Магистратура',
        program: '(ВМ.7803.*) Современный Китай: экономика, политика, общество (с изучением китайского языка)',
        forms: 'Очная',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ]
      }
    ],
    employmentData: [
      {
        code: '02.03.02',
        name: 'Фундаментальная информатика и информационные технологии',
        program: '(СВ.7802.*) Программирование и информационные технологии',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '38.03.01',
        name: 'Экономика',
        program: '(СВ.7800.*) Международный бизнес в цифровой экономике',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '38.04.01',
        name: 'Экономика',
        program: '(ВМ.7804.*) Международное предпринимательство в цифровой экономике',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '40.04.01',
        name: 'Юриспруденция',
        program: '(ВМ.7801.*) Международное частное право',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '58.04.01',
        name: 'Востоковедение и африканистика',
        program: '(ВМ.7803.*) Современный Китай: экономика, политика, общество (с изучением китайского языка)',
        graduatesCount: 0,
        employedCount: 0
      }
    ],
    documents: [
      {
        title: 'Информация о численности обучающихся.pdf',
        link: 'Информация о численности обучающихся',
        url: 'https://spbu.ru/sites/default/files/2025-07/chislennost-obuchayuschikhsya-po-istochnikam-finansirovaniya_tashkent_20251009.pdf'
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
    programDescriptionTitle: 'Information on the description of educational programs',
    employmentTitle: 'Information on the employment of graduates for each implemented educational program, for which graduation took place in the 2023-2024 academic year',
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
    programDescriptionHeaders: {
      number: 'No.',
      code: 'Code of specialty, field of study, code of group of scientific specialties',
      name: 'Name of profession, specialty, field of study, name of group of scientific specialties',
      level: 'Level of education',
      program: 'Educational program, orientation, profile, code and name of scientific specialty',
      forms: 'Implemented forms of education',
      descriptionLink: 'Link to the description of the educational program with a copy attached',
      curriculumLink: 'Link to the curriculum',
      workProgramsLink: 'Links to work programs (for each discipline in the educational program)',
      calendarLink: 'Link to the calendar academic schedule',
      practiceProgramsLink: 'Link to practice programs provided by the relevant educational program',
      methodicalDocumentsLink: 'Link to methodological and other documents'
    },
    employmentHeaders: {
      code: 'Code of specialty, field of study, code',
      name: 'Name of profession, specialty, field of study, name of group of scientific specialties',
      program: 'Educational program, orientation, profile, code and name of scientific specialty',
      graduatesCount: 'Number of graduates',
      employedCount: 'Number of employed graduates'
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-02.03.02-2024.pdf' }
        ],
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
        subjects: [
          { year: '2023', url: 'https://spbu.ru/sites/default/files/2023-09/curriculum-38.03.01-2023.pdf' },
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-38.03.01-2024.pdf' },
          { year: '2025', url: 'https://spbu.ru/sites/default/files/2025-09/curriculum-38.03.01-2025.pdf' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-38.04.01-2024.pdf' },
          { year: '2025' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-40.04.01-2024.pdf' },
          { year: '2025', url: 'https://spbu.ru/sites/default/files/2025-09/curriculum-40.04.01-2025.pdf' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-58.04.01-2024.pdf' },
          { year: '2025', url: 'https://spbu.ru/sites/default/files/2025-09/curriculum-58.04.01-2025.pdf' }
        ],
        practices: 'Industrial practice. Research work; Industrial practice. Preparation of final qualifying work (Pre-diploma practice); Educational practice (pedagogical)'
      }
    ],
    programDescriptionData: [
      {
        number: 1,
        code: '02.03.02',
        name: 'Fundamental Informatics and Information Technologies',
        level: 'Bachelor\'s',
        program: '(СВ.7802.*) Programming and Information Technologies',
        forms: 'Full-time',
        curriculumLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        workProgramsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        calendarLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        practiceProgramsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        methodicalDocumentsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }]
      },
      {
        number: 2,
        code: '38.03.01',
        name: 'Economics',
        level: 'Bachelor\'s',
        program: '(СВ.7800.*) International Business in Digital Economy',
        forms: 'Full-time',
        curriculumLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        workProgramsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        calendarLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        practiceProgramsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        methodicalDocumentsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ]
      },
      {
        number: 3,
        code: '38.04.01',
        name: 'Economics',
        level: 'Master\'s',
        program: '(ВМ.7804.*) International Entrepreneurship in Digital Economy',
        forms: 'Full-time',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ]
      },
      {
        number: 4,
        code: '40.04.01',
        name: 'Jurisprudence',
        level: 'Master\'s',
        program: '(ВМ.7801.*) International Private Law',
        forms: 'Full-time',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ]
      },
      {
        number: 5,
        code: '58.04.01',
        name: 'Oriental and African Studies',
        level: 'Master\'s',
        program: '(ВМ.7803.*) Modern China: Economics, Politics, Society (with Chinese Language Study)',
        forms: 'Full-time',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ]
      }
    ],
    employmentData: [
      {
        code: '02.03.02',
        name: 'Fundamental Informatics and Information Technologies',
        program: '(СВ.7802.*) Programming and Information Technologies',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '38.03.01',
        name: 'Economics',
        program: '(СВ.7800.*) International Business in Digital Economy',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '38.04.01',
        name: 'Economics',
        program: '(ВМ.7804.*) International Entrepreneurship in Digital Economy',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '40.04.01',
        name: 'Jurisprudence',
        program: '(ВМ.7801.*) International Private Law',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '58.04.01',
        name: 'Oriental and African Studies',
        program: '(ВМ.7803.*) Modern China: Economics, Politics, Society (with Chinese Language Study)',
        graduatesCount: 0,
        employedCount: 0
      }
    ],
    documents: [
      {
        title: 'Information on the number of students.pdf',
        link: 'Information on the number of students',
        url: 'https://spbu.ru/sites/default/files/2025-07/chislennost-obuchayuschikhsya-po-istochnikam-finansirovaniya_tashkent_20251009.pdf'
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
    programDescriptionTitle: 'Ta\'lim dasturlari tavsifi haqida ma\'lumot',
    employmentTitle: '2023-2024 o\'quv yili uchun bitiruv bo\'lgan har bir amalga oshirilayotgan ta\'lim dasturi bo\'yicha bitiruvchilarning ish bilan ta\'minlanishi haqida ma\'lumot',
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
    programDescriptionHeaders: {
      number: '№',
      code: 'Ixtisoslik, yo\'nalish tayyorgarligi kodi, ilmiy ixtisosliklar guruhi kodi',
      name: 'Kasb, ixtisoslik, yo\'nalish tayyorgarligi, ilmiy ixtisosliklar guruhi nomi',
      level: 'Ta\'lim darajasi',
      program: 'Ta\'lim dasturi, yo\'nalish, profil, ilmiy ixtisoslik kodi va nomi',
      forms: 'Amalga oshirilayotgan o\'qitish shakllari',
      descriptionLink: 'Ta\'lim dasturi tavsifiga havola, uning nusxasi bilan',
      curriculumLink: 'O\'quv rejasiga havola',
      workProgramsLink: 'Ishchi dasturlarga havolalar (ta\'lim dasturidagi har bir fan uchun)',
      calendarLink: 'Kalendar o\'quv jadvaliga havola',
      practiceProgramsLink: 'Tegishli ta\'lim dasturi tomonidan taqdim etilgan amaliyot dasturlariga havola',
      methodicalDocumentsLink: 'Metodik va boshqa hujjatlarga havola'
    },
    employmentHeaders: {
      code: 'Ixtisoslik, yo\'nalish tayyorgarligi kodi',
      name: 'Kasb, ixtisoslik, yo\'nalish tayyorgarligi, ilmiy ixtisosliklar guruhi nomi',
      program: 'Ta\'lim dasturi, yo\'nalish, profil, ilmiy ixtisoslik kodi va nomi',
      graduatesCount: 'Bitiruvchilar soni',
      employedCount: 'Ish bilan ta\'minlangan bitiruvchilar soni'
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-02.03.02-2024.pdf' }
        ],
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
        subjects: [
          { year: '2023', url: 'https://spbu.ru/sites/default/files/2023-09/curriculum-38.03.01-2023.pdf' },
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-38.03.01-2024.pdf' },
          { year: '2025', url: 'https://spbu.ru/sites/default/files/2025-09/curriculum-38.03.01-2025.pdf' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-38.04.01-2024.pdf' },
          { year: '2025' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-40.04.01-2024.pdf' },
          { year: '2025', url: 'https://spbu.ru/sites/default/files/2025-09/curriculum-40.04.01-2025.pdf' }
        ],
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
        subjects: [
          { year: '2024', url: 'https://spbu.ru/sites/default/files/2024-09/curriculum-58.04.01-2024.pdf' },
          { year: '2025', url: 'https://spbu.ru/sites/default/files/2025-09/curriculum-58.04.01-2025.pdf' }
        ],
        practices: 'Ishlab chiqarish amaliyoti. Ilmiy-tadqiqot ishi; Ishlab chiqarish amaliyoti. Bitiruv malakaviy ishini tayyorlash (Diplomdan oldingi amaliyot); O\'quv amaliyoti (pedagogik)'
      }
    ],
    programDescriptionData: [
      {
        number: 1,
        code: '02.03.02',
        name: 'Asosiy informatika va axborot texnologiyalari',
        level: 'Bakalavriat',
        program: '(СВ.7802.*) Dasturlash va axborot texnologiyalari',
        forms: 'Kunduzgi',
        curriculumLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        workProgramsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        calendarLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        practiceProgramsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }],
        methodicalDocumentsLink: [{ year: '2024', url: 'https://nc.spbu.ru/s/gPcFJexDoQgJ87R' }]
      },
      {
        number: 2,
        code: '38.03.01',
        name: 'Iqtisodiyot',
        level: 'Bakalavriat',
        program: '(СВ.7800.*) Raqamli iqtisodiyotda xalqaro biznes',
        forms: 'Kunduzgi',
        curriculumLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        workProgramsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        calendarLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        practiceProgramsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ],
        methodicalDocumentsLink: [
          { year: '2023', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025' }
        ]
      },
      {
        number: 3,
        code: '38.04.01',
        name: 'Iqtisodiyot',
        level: 'Magistratura',
        program: '(ВМ.7804.*) Raqamli iqtisodiyotda xalqaro tadbirkorlik',
        forms: 'Kunduzgi',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ]
      },
      {
        number: 4,
        code: '40.04.01',
        name: 'Yurisprudensiya',
        level: 'Magistratura',
        program: '(ВМ.7801.*) Xalqaro xususiy huquq',
        forms: 'Kunduzgi',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/wM8W8coDG6HW2Le' },
          { year: '2025', url: 'https://nc.spbu.ru/s/3w7sscW3QAF4dTK' }
        ]
      },
      {
        number: 5,
        code: '58.04.01',
        name: 'Sharqshunoslik va afrikashunoslik',
        level: 'Magistratura',
        program: '(ВМ.7803.*) Zamonaviy Xitoy: iqtisodiyot, siyosat, jamiyat (xitoy tili o\'rganish bilan)',
        forms: 'Kunduzgi',
        curriculumLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        workProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        calendarLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        practiceProgramsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ],
        methodicalDocumentsLink: [
          { year: '2024', url: 'https://nc.spbu.ru/s/9sJMmE3k4c2RE4R' },
          { year: '2025', url: 'https://nc.spbu.ru/s/FXxLndQBfcTiRCd' }
        ]
      }
    ],
    employmentData: [
      {
        code: '02.03.02',
        name: 'Asosiy informatika va axborot texnologiyalari',
        program: '(СВ.7802.*) Dasturlash va axborot texnologiyalari',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '38.03.01',
        name: 'Iqtisodiyot',
        program: '(СВ.7800.*) Raqamli iqtisodiyotda xalqaro biznes',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '38.04.01',
        name: 'Iqtisodiyot',
        program: '(ВМ.7804.*) Raqamli iqtisodiyotda xalqaro tadbirkorlik',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '40.04.01',
        name: 'Yurisprudensiya',
        program: '(ВМ.7801.*) Xalqaro xususiy huquq',
        graduatesCount: 0,
        employedCount: 0
      },
      {
        code: '58.04.01',
        name: 'Sharqshunoslik va afrikashunoslik',
        program: '(ВМ.7803.*) Zamonaviy Xitoy: iqtisodiyot, siyosat, jamiyat (xitoy tili o\'rganish bilan)',
        graduatesCount: 0,
        employedCount: 0
      }
    ],
    documents: [
      {
        title: 'Talabalar soni haqida ma\'lumot.pdf',
        link: 'Talabalar soni haqida ma\'lumot',
        url: 'https://spbu.ru/sites/default/files/2025-07/chislennost-obuchayuschikhsya-po-istochnikam-finansirovaniya_tashkent_20251009.pdf'
      },
      {
        title: 'Ko\'chirish, tiklash va chetlatish natijalari haqida ma\'lumot.pdf',
        link: 'Ko\'chirish, tiklash va chetlatish natijalari haqida ma\'lumot',
        url: 'https://spbu.ru/sites/default/files/2025-07/perevody-i-vosstanovleniya_tashkent_20251009.pdf'
      }
    ]
  }
};

// Компонент для отображения ссылок на годы
const YearLinks: React.FC<{ yearLinks: YearLink[] }> = ({ yearLinks }) => {
  return (
    <div className="year-links">
      {yearLinks.map((link, index) => (
        <React.Fragment key={link.year}>
          {link.url ? (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="year-link"
            >
              {link.year}
            </a>
          ) : (
            <span className="year-text">{link.year}</span>
          )}
          {index < yearLinks.length - 1 && <span className="year-separator">, </span>}
        </React.Fragment>
      ))}
    </div>
  );
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
          <span className="main-header-icon">🎓</span>
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
                    <td>
                      <YearLinks yearLinks={row.subjects} />
                    </td>
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

        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">📚</span>
            <h2 className="section-title">{t.programDescriptionTitle}</h2>
          </div>
          
          <div className="info-table-container">
            <table className="info-table program-description-table">
              <thead>
                <tr>
                  <th>{t.programDescriptionHeaders.number}</th>
                  <th>{t.programDescriptionHeaders.code}</th>
                  <th>{t.programDescriptionHeaders.name}</th>
                  <th>{t.programDescriptionHeaders.level}</th>
                  <th>{t.programDescriptionHeaders.program}</th>
                  <th>{t.programDescriptionHeaders.forms}</th>
                  <th>{t.programDescriptionHeaders.descriptionLink}</th>
                  <th>{t.programDescriptionHeaders.curriculumLink}</th>
                  <th>{t.programDescriptionHeaders.workProgramsLink}</th>
                  <th>{t.programDescriptionHeaders.calendarLink}</th>
                  <th>{t.programDescriptionHeaders.practiceProgramsLink}</th>
                  <th>{t.programDescriptionHeaders.methodicalDocumentsLink}</th>
                </tr>
              </thead>
              <tbody>
                {t.programDescriptionData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.number}</td>
                    <td>{row.code}</td>
                    <td>{row.name}</td>
                    <td>{row.level}</td>
                    <td>{row.program}</td>
                    <td>{row.forms}</td>
                    <td>
                      {row.descriptionLink && row.descriptionLink.length > 0 ? (
                        <YearLinks yearLinks={row.descriptionLink} />
                      ) : (
                        <span className="year-text">-</span>
                      )}
                    </td>
                    <td>
                      {row.curriculumLink && row.curriculumLink.length > 0 ? (
                        <YearLinks yearLinks={row.curriculumLink} />
                      ) : (
                        <span className="year-text">-</span>
                      )}
                    </td>
                    <td>
                      {row.workProgramsLink && row.workProgramsLink.length > 0 ? (
                        <YearLinks yearLinks={row.workProgramsLink} />
                      ) : (
                        <span className="year-text">-</span>
                      )}
                    </td>
                    <td>
                      {row.calendarLink && row.calendarLink.length > 0 ? (
                        <YearLinks yearLinks={row.calendarLink} />
                      ) : (
                        <span className="year-text">-</span>
                      )}
                    </td>
                    <td>
                      {row.practiceProgramsLink && row.practiceProgramsLink.length > 0 ? (
                        <YearLinks yearLinks={row.practiceProgramsLink} />
                      ) : (
                        <span className="year-text">-</span>
                      )}
                    </td>
                    <td>
                      {row.methodicalDocumentsLink && row.methodicalDocumentsLink.length > 0 ? (
                        <YearLinks yearLinks={row.methodicalDocumentsLink} />
                      ) : (
                        <span className="year-text">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-block">
          <div className="sub-header">
            <span className="sub-header-icon">💼</span>
            <h2 className="section-title">{t.employmentTitle}</h2>
          </div>
          
          <div className="info-table-container">
            <table className="info-table employment-table">
              <thead>
                <tr>
                  <th>{t.employmentHeaders.code}</th>
                  <th>{t.employmentHeaders.name}</th>
                  <th>{t.employmentHeaders.program}</th>
                  <th>{t.employmentHeaders.graduatesCount}</th>
                  <th>{t.employmentHeaders.employedCount}</th>
                </tr>
              </thead>
              <tbody>
                {t.employmentData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.code}</td>
                    <td>{row.name}</td>
                    <td>{row.program}</td>
                    <td>{row.graduatesCount}</td>
                    <td>{row.employedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchEducation;
