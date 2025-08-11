import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import './BranchEmployees.scss';

type EmployeeData = {
  name: string;
  position: string;
  subjects: string;
  education: string;
  degree: string;
  title: string;
  qualification: string;
  retraining: string;
  experience: string;
  programs: string;
};

type ProgramData = {
  title: string;
  tableData: EmployeeData[];
};

type Translations = {
  [key in Language]: {
    programSelector: {
      label: string;
      programs: {
        [key: string]: ProgramData;
      };
    };
    tableHeaders: {
      name: string;
      position: string;
      subjects: string;
      education: string;
      degree: string;
      title: string;
      qualification: string;
      retraining: string;
      experience: string;
      programs: string;
    };
  };
};

const translations: Translations = {
  ru: {
    programSelector: {
      label: 'Выберите образовательную программу:',
      programs: {
        '7804': {
          title: 'Персональный состав педагогических работников образовательной программы «BM.7804.* Международное предпринимательство в цифровой экономике»',
          tableData: [
            { name: 'Алиев Магомед Далгатович', position: 'старший преподаватель', subjects: 'Учебная практика (научно-исследовательская работа)', education: 'Высшее образование, труд, учитель трудового обучения и общетехнических дисципли, научная специальность - Мировая экономика', degree: 'кандидат экономических наук', title: '', qualification: 'Повышение квалификации, Удостоверение 14/нип-09 от 2022-11-07, навыки инновационных подходов к преподаванию в высшей школе xxi века, 36 Часы', retraining: '', experience: '20', programs: '' },
            { name: 'Аренков Игорь Анатольевич', position: 'профессор', subjects: 'Поведение потребителей (онлайн-курс), Учебная практика (научно-исследовательская работа), Цифровая экономика: современные вызовы', education: 'Высшее образование, экономика и организация машиностроительной промышленн, инженер-экономист', degree: 'доктор экономических наук', title: 'профессор', qualification: 'Повышение квалификации, Удостоверение 005690 от 2021-12-06, использование цифровых компетенций в образовании, 32 Часы', retraining: '', experience: '35', programs: '' }
          ]
        }
      }
    },
    tableHeaders: {
      name: 'Ф.И.О. преподавателя, реализующего программу',
      position: 'Должность преподавателя',
      subjects: 'Перечень преподаваемых дисциплин',
      education: 'Уровень образования, квалификация',
      degree: 'Учёная степень педагогического работника',
      title: 'Учёное звание педагогического работника',
      qualification: 'Сведения о повышении квалификации (за последние 3 года)',
      retraining: 'Сведения о профессиональной переподготовке (при наличии)',
      experience: 'Сведения о продолжительности опыта (лет) работы в профессиональной сфере',
      programs: 'Наименование образовательных программ'
    }
  },
  uz: {
    programSelector: {
      label: 'Ta\'lim dasturini tanlang:',
      programs: {
        '7804': {
          title: '«BM.7804.* Raqamli iqtisodiyotda xalqaro tadbirkorlik» ta\'lim dasturi pedagog xodimlarining shaxsiy tarkibi',
          tableData: [
            { name: 'Aliyev Magomed Dalgatovich', position: 'katta o\'qituvchi', subjects: 'O\'quv amaliyoti (ilmiy-tadqiqot ishi)', education: 'Oliy ma\'lumot, mehnat, mehnat ta\'limi va umumtexnik fanlar o\'qituvchisi, ilmiy mutaxassislik - Jahon iqtisodiyoti', degree: 'iqtisodiyot fanlari nomzodi', title: '', qualification: 'Malaka oshirish, 2022-11-07 yildagi 14/nip-09-sonli guvohnoma, XXI asr oliy ta\'limida o\'qitishning innovatsion yondashuvlari, 36 soat', retraining: '', experience: '20', programs: '' },
            { name: 'Arenkov Igor Anatolyevich', position: 'professor', subjects: 'Iste\'molchilar xulq-atvori (onlayn-kurs), O\'quv amaliyoti (ilmiy-tadqiqot ishi), Raqamli iqtisodiyot: zamonaviy chaqiriqlar', education: 'Oliy ma\'lumot, mashinasozlik sanoati iqtisodiyoti va tashkil etilishi, muhandis-iqtisodchi', degree: 'iqtisodiyot fanlari doktori', title: 'professor', qualification: 'Malaka oshirish, 2021-12-06 yildagi 005690-sonli guvohnoma, ta\'limda raqamli kompetensiyalardan foydalanish, 32 soat', retraining: '', experience: '35', programs: '' }
          ]
        }
      }
    },
    tableHeaders: {
      name: 'Dasturni amalga oshiruvchi o\'qituvchining F.I.Sh.',
      position: 'O\'qituvchining lavozimi',
      subjects: 'O\'qitiladigan fanlar ro\'yxati',
      education: 'Ta\'lim darajasi, malakasi',
      degree: 'Pedagog xodimning ilmiy darajasi',
      title: 'Pedagog xodimning ilmiy unvoni',
      qualification: 'Malaka oshirish haqida ma\'lumotlar (so\'nggi 3 yil)',
      retraining: 'Kasbiy qayta tayyorlash haqida ma\'lumotlar (agar mavjud bo\'lsa)',
      experience: 'Professional sohada ish tajribasi davomiyligi (yillar) haqida ma\'lumotlar',
      programs: 'Ta\'lim dasturlari nomi'
    }
  },
  en: {
    programSelector: {
      label: 'Select educational program:',
      programs: {
        '7804': {
          title: 'Personnel composition of teaching staff of the educational program «BM.7804.* International Entrepreneurship in Digital Economy»',
          tableData: [
            { name: 'Aliev Magomed Dalgatovich', position: 'Senior Lecturer', subjects: 'Educational practice (research work)', education: 'Higher education, labor, teacher of labor training and general technical disciplines, scientific specialty - World Economy', degree: 'Candidate of Economic Sciences', title: '', qualification: 'Professional development, Certificate 14/nip-09 from 2022-11-07, skills of innovative approaches to teaching in higher education in the 21st century, 36 Hours', retraining: '', experience: '20', programs: '' },
            { name: 'Arenkov Igor Anatolyevich', position: 'Professor', subjects: 'Consumer Behavior (online course), Educational practice (research work), Digital Economy: Modern Challenges', education: 'Higher education, economics and organization of the machine-building industry, engineer-economist', degree: 'Doctor of Economic Sciences', title: 'Professor', qualification: 'Professional development, Certificate 005690 from 2021-12-06, use of digital competencies in education, 32 Hours', retraining: '', experience: '35', programs: '' }
          ]
        }
      }
    },
    tableHeaders: {
      name: 'Full name of the teacher implementing the program',
      position: 'Teacher position',
      subjects: 'List of taught disciplines',
      education: 'Education level, qualification',
      degree: 'Academic degree of the teaching staff',
      title: 'Academic title of the teaching staff',
      qualification: 'Information on professional development (last 3 years)',
      retraining: 'Information on professional retraining (if available)',
      experience: 'Information on the duration of experience (years) in the professional field',
      programs: 'Name of educational programs'
    }
  }
};

const BranchEmployees: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);

  if (!langContext) {
    throw new Error('BranchEmployees must be used within a Language Provider');
  }

  const { language } = langContext;
  const t = translations[language];

  const [selectedProgram, setSelectedProgram] = useState<string>(Object.keys(t.programSelector.programs)[0]);

  const selectedProgramData = t.programSelector.programs[selectedProgram];

  return (
    <div className={`branch-employees ${theme}`}>
      <div className="content-container">
        <div className="program-selector-container">
          <label htmlFor="program-select">{t.programSelector.label}</label>
          <select
            id="program-select"
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="program-select"
          >
            {Object.keys(t.programSelector.programs).map((programKey) => (
              <option key={programKey} value={programKey}>
                {t.programSelector.programs[programKey].title}
              </option>
            ))}
          </select>
        </div>

        <div className="header">
          <span className="header-icon">📋</span>
          <h1>{selectedProgramData.title}</h1>
        </div>
        
        <div className="table-container">
          <table className="employees-table">
            <thead>
              <tr>
                <th>{t.tableHeaders.name}</th>
                <th>{t.tableHeaders.position}</th>
                <th>{t.tableHeaders.subjects}</th>
                <th>{t.tableHeaders.education}</th>
                <th>{t.tableHeaders.degree}</th>
                <th>{t.tableHeaders.title}</th>
                <th>{t.tableHeaders.qualification}</th>
                <th>{t.tableHeaders.retraining}</th>
                <th>{t.tableHeaders.experience}</th>
                <th>{t.tableHeaders.programs}</th>
              </tr>
            </thead>
            <tbody>
              {selectedProgramData.tableData.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.subjects}</td>
                  <td>{employee.education}</td>
                  <td>{employee.degree}</td>
                  <td>{employee.title}</td>
                  <td>{employee.qualification}</td>
                  <td>{employee.retraining}</td>
                  <td>{employee.experience}</td>
                  <td>{employee.programs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BranchEmployees; 