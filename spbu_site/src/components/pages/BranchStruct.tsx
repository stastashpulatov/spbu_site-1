import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './BranchStruct.scss';

type Translations = {
  [key in Language]: {
    title: string;
    tableHeaders: {
      name: string;
      position: string;
      department: string;
      address: string;
      phone: string;
      email: string;
      website: string;
      schedule: string;
    };
    departmentTableHeaders: {
      name: string;
      fullName: string;
      head: string;
      address: string;
      phone: string;
      email: string;
      website: string;
      schedule: string;
      regulations: string;
    };
    departments: {
      name: string;
      fullName: string;
      head: string;
      address: string;
      phone: string;
      email: string;
      website: string;
      schedule: string;
      regulations: string;
    }[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Структура и органы управления образовательной организацией',
    tableHeaders: {
      name: 'Наименование структурного подразделения',
      position: 'Должность руководителя структурного подразделения',
      department: 'Фамилия, имя, отчество руководителя структурного подразделения',
      address: 'Место нахождения структурного подразделения',
      phone: 'Адрес электронной почты структурного подразделения',
      email: 'Адрес официального сайта структурного подразделения',
      website: 'Адрес официального сайта структурного подразделения',
      schedule: 'Положение о структурном подразделении'
    },
    departmentTableHeaders: {
      name: 'Наименование структурного подразделения',
      fullName: 'Полное наименование структурного подразделения',
      head: 'Руководитель структурного подразделения',
      address: 'Место нахождения структурного подразделения',
      phone: 'Телефон',
      email: 'Электронная почта',
      website: 'Сайт',
      schedule: 'Режим работы',
      regulations: 'Положение о структурном подразделении'
    },
    departments: [
      {
        name: 'Дирекция',
        fullName: 'Дирекция Алмалыкского филиала НИТУ «МИСИС»',
        head: 'Директор Алмалыкского филиала НИТУ «МИСИС» Умаров Фарходжон Яркулович',
        address: 'Республика Узбекистан, Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        phone: 'info@misis.uz',
        email: 'info@misis.uz',
        website: 'Отсутствует',
        schedule: 'ПН-ПТ 9:00-18:00',
        regulations: 'Отсутствует'
      },
      {
        name: 'Учебно-методический отдел',
        fullName: 'Учебно-методический отдел Алмалыкского филиала НИТУ «МИСИС»',
        head: 'Начальник учебно-методического отдела Алмалыкского филиала НИТУ «МИСИС» Хасанов Абдумалик Суннатович',
        address: 'Республика Узбекистан, Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        phone: 'Отсутствует',
        email: 'info@misis.uz',
        website: 'Отсутствует',
        schedule: 'ПН-ПТ 9:00-18:00',
        regulations: 'Отсутствует'
      },
      {
        name: 'Кафедра «Металлургия»',
        fullName: 'Кафедра «Металлургия» Алмалыкского филиала НИТУ «МИСИС»',
        head: 'Заведующий кафедрой «Металлургия» Алмалыкского филиала НИТУ «МИСИС» Юсупходжаев Анвар Абдуллаевич',
        address: 'Республика Узбекистан, Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        phone: 'Отсутствует',
        email: 'info@misis.uz',
        website: 'Отсутствует',
        schedule: 'ПН-ПТ 9:00-18:00',
        regulations: 'Отсутствует'
      },
      {
        name: 'Кафедра «Горное дело»',
        fullName: 'Кафедра «Горное дело» Алмалыкского филиала НИТУ «МИСИС»',
        head: 'Заведующий кафедрой «Горное дело» Алмалыкского филиала НИТУ «МИСИС» Мислибаев Ильхам Туйчибаевич',
        address: 'Республика Узбекистан, Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        phone: 'Отсутствует',
        email: 'info@misis.uz',
        website: 'Отсутствует',
        schedule: 'ПН-ПТ 9:00-18:00',
        regulations: 'Отсутствует'
      },
      {
        name: 'Кафедра «Автоматизированные системы управления»',
        fullName: 'Кафедра «Автоматизированные системы управления» Алмалыкского филиала НИТУ «МИСИС»',
        head: 'Заведующий кафедрой «Автоматизированные системы управления» Алмалыкского филиала НИТУ «МИСИС» Шарипов Конгратбай Авезимбетович',
        address: 'Республика Узбекистан, Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        phone: 'Отсутствует',
        email: 'info@misis.uz',
        website: 'Отсутствует',
        schedule: 'ПН-ПТ 9:00-18:00',
        regulations: 'Отсутствует'
      },
      {
        name: 'Кафедра «Гуманитарные дисциплины»',
        fullName: 'Кафедра «Гуманитарные дисциплины» Алмалыкского филиала НИТУ «МИСИС»',
        head: 'Заведующий кафедрой «Гуманитарные дисциплины» Алмалыкского филиала НИТУ «МИСИС» Мухаммедов Мурод Мухаммедович',
        address: 'Республика Узбекистан, Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        phone: 'Отсутствует',
        email: 'info@misis.uz',
        website: 'Отсутствует',
        schedule: 'ПН-ПТ 9:00-18:00',
        regulations: 'Отсутствует'
      },
      {
        name: 'Кафедра «Естественно-научные дисциплины»',
        fullName: 'Кафедра «Естественно-научные дисциплины» Алмалыкского филиала НИТУ «МИСИС»',
        head: 'Заведующий кафедрой «Естественно-научные дисциплины» Алмалыкского филиала НИТУ «МИСИС» Вапоев Хуснитдин Мухитдинович',
        address: 'Республика Узбекистан, Ташкентская область, г. Алмалык, ул. Амира Темура, дом 56',
        phone: 'Отсутствует',
        email: 'info@misis.uz',
        website: 'Отсутствует',
        schedule: 'ПН-ПТ 9:00-18:00',
        regulations: 'Отсутствует'
      }
    ]
  },
  uz: {
    title: 'Ta\'lim tashkilotining tuzilishi va boshqaruv organlari',
    tableHeaders: {
      name: 'Tarkibiy bo\'linma nomi',
      position: 'Tarkibiy bo\'linma rahbarining lavozimi',
      department: 'Tarkibiy bo\'linma rahbarining familiyasi, ismi, otasining ismi',
      address: 'Tarkibiy bo\'linmaning joylashgan joyi',
      phone: 'Tarkibiy bo\'linmaning elektron pochta manzili',
      email: 'Tarkibiy bo\'linmaning rasmiy veb-sayti manzili',
      website: 'Tarkibiy bo\'linmaning rasmiy veb-sayti manzili',
      schedule: 'Tarkibiy bo\'linma to\'g\'risidagi nizom'
    },
    departmentTableHeaders: {
      name: 'Tarkibiy bo\'linma nomi',
      fullName: 'Tarkibiy bo\'linmaning to\'liq nomi',
      head: 'Tarkibiy bo\'linma rahbari',
      address: 'Tarkibiy bo\'linmaning joylashgan joyi',
      phone: 'Telefon',
      email: 'Elektron pochta',
      website: 'Veb-sayt',
      schedule: 'Ish tartibi',
      regulations: 'Tarkibiy bo\'linma to\'g\'risidagi nizom'
    },
    departments: [
      {
        name: 'Direksiya',
        fullName: 'NITU «MISIS» Olmaliq filiali direksiyasi',
        head: 'NITU «MISIS» Olmaliq filiali direktori Umarov Farhodjon Yarkulovich',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        phone: 'info@misis.uz',
        email: 'info@misis.uz',
        website: 'Mavjud emas',
        schedule: 'Du-Ju 9:00-18:00',
        regulations: 'Mavjud emas'
      },
      {
        name: 'O\'quv-uslubiy bo\'lim',
        fullName: 'NITU «MISIS» Olmaliq filiali o\'quv-uslubiy bo\'limi',
        head: 'NITU «MISIS» Olmaliq filiali o\'quv-uslubiy bo\'limi boshlig\'i Xasanov Abdumalik Sunnatovich',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        phone: 'Mavjud emas',
        email: 'info@misis.uz',
        website: 'Mavjud emas',
        schedule: 'Du-Ju 9:00-18:00',
        regulations: 'Mavjud emas'
      },
      {
        name: '«Metallurgiya» kafedrasi',
        fullName: 'NITU «MISIS» Olmaliq filiali «Metallurgiya» kafedrasi',
        head: 'NITU «MISIS» Olmaliq filiali «Metallurgiya» kafedrasi mudiri Yusupxodjaev Anvar Abdullaevich',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        phone: 'Mavjud emas',
        email: 'info@misis.uz',
        website: 'Mavjud emas',
        schedule: 'Du-Ju 9:00-18:00',
        regulations: 'Mavjud emas'
      },
      {
        name: '«Kon ishi» kafedrasi',
        fullName: 'NITU «MISIS» Olmaliq filiali «Kon ishi» kafedrasi',
        head: 'NITU «MISIS» Olmaliq filiali «Kon ishi» kafedrasi mudiri Mislibaev Ilham Tuychibaevich',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        phone: 'Mavjud emas',
        email: 'info@misis.uz',
        website: 'Mavjud emas',
        schedule: 'Du-Ju 9:00-18:00',
        regulations: 'Mavjud emas'
      },
      {
        name: '«Avtomatlashtirilgan boshqaruv tizimlari» kafedrasi',
        fullName: 'NITU «MISIS» Olmaliq filiali «Avtomatlashtirilgan boshqaruv tizimlari» kafedrasi',
        head: 'NITU «MISIS» Olmaliq filiali «Avtomatlashtirilgan boshqaruv tizimlari» kafedrasi mudiri Sharipov Kongratbay Avezimbetovich',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        phone: 'Mavjud emas',
        email: 'info@misis.uz',
        website: 'Mavjud emas',
        schedule: 'Du-Ju 9:00-18:00',
        regulations: 'Mavjud emas'
      },
      {
        name: '«Gumanitar fanlar» kafedrasi',
        fullName: 'NITU «MISIS» Olmaliq filiali «Gumanitar fanlar» kafedrasi',
        head: 'NITU «MISIS» Olmaliq filiali «Gumanitar fanlar» kafedrasi mudiri Muhammedov Murod Muhammedovich',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        phone: 'Mavjud emas',
        email: 'info@misis.uz',
        website: 'Mavjud emas',
        schedule: 'Du-Ju 9:00-18:00',
        regulations: 'Mavjud emas'
      },
      {
        name: '«Tabiiy-ilmiy fanlar» kafedrasi',
        fullName: 'NITU «MISIS» Olmaliq filiali «Tabiiy-ilmiy fanlar» kafedrasi',
        head: 'NITU «MISIS» Olmaliq filiali «Tabiiy-ilmiy fanlar» kafedrasi mudiri Vapoev Husnitdin Muhitdinovich',
        address: 'O\'zbekiston Respublikasi, Toshkent viloyati, Olmaliq shahri, Amir Temur ko\'chasi, 56-uy',
        phone: 'Mavjud emas',
        email: 'info@misis.uz',
        website: 'Mavjud emas',
        schedule: 'Du-Ju 9:00-18:00',
        regulations: 'Mavjud emas'
      }
    ]
  },
  en: {
    title: 'Structure and management bodies of the educational organization',
    tableHeaders: {
      name: 'Name of the structural unit',
      position: 'Position of the head of the structural unit',
      department: 'Full name of the head of the structural unit',
      address: 'Location of the structural unit',
      phone: 'Email address of the structural unit',
      email: 'Official website address of the structural unit',
      website: 'Official website address of the structural unit',
      schedule: 'Regulations on the structural unit'
    },
    departmentTableHeaders: {
      name: 'Name of the structural unit',
      fullName: 'Full name of the structural unit',
      head: 'Head of the structural unit',
      address: 'Location of the structural unit',
      phone: 'Phone',
      email: 'Email',
      website: 'Website',
      schedule: 'Working hours',
      regulations: 'Regulations on the structural unit'
    },
    departments: [
      {
        name: 'Directorate',
        fullName: 'Directorate of the Almalyk branch of NUST "MISIS"',
        head: 'Director of the Almalyk branch of NUST "MISIS" Umarov Farkhodjon Yarkulovich',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street',
        phone: 'info@misis.uz',
        email: 'info@misis.uz',
        website: 'Not available',
        schedule: 'Mon-Fri 9:00-18:00',
        regulations: 'Not available'
      },
      {
        name: 'Educational and Methodological Department',
        fullName: 'Educational and Methodological Department of the Almalyk branch of NUST "MISIS"',
        head: 'Head of the Educational and Methodological Department of the Almalyk branch of NUST "MISIS" Khasanov Abdumalik Sunnatovich',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street',
        phone: 'Not available',
        email: 'info@misis.uz',
        website: 'Not available',
        schedule: 'Mon-Fri 9:00-18:00',
        regulations: 'Not available'
      },
      {
        name: 'Department of "Metallurgy"',
        fullName: 'Department of "Metallurgy" of the Almalyk branch of NUST "MISIS"',
        head: 'Head of the Department of "Metallurgy" of the Almalyk branch of NUST "MISIS" Yusupkhodjaev Anvar Abdullaevich',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street',
        phone: 'Not available',
        email: 'info@misis.uz',
        website: 'Not available',
        schedule: 'Mon-Fri 9:00-18:00',
        regulations: 'Not available'
      },
      {
        name: 'Department of "Mining"',
        fullName: 'Department of "Mining" of the Almalyk branch of NUST "MISIS"',
        head: 'Head of the Department of "Mining" of the Almalyk branch of NUST "MISIS" Mislibaev Ilkham Tuychibaevich',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street',
        phone: 'Not available',
        email: 'info@misis.uz',
        website: 'Not available',
        schedule: 'Mon-Fri 9:00-18:00',
        regulations: 'Not available'
      },
      {
        name: 'Department of "Automated Control Systems"',
        fullName: 'Department of "Automated Control Systems" of the Almalyk branch of NUST "MISIS"',
        head: 'Head of the Department of "Automated Control Systems" of the Almalyk branch of NUST "MISIS" Sharipov Kongratbay Avezimbetovich',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street',
        phone: 'Not available',
        email: 'info@misis.uz',
        website: 'Not available',
        schedule: 'Mon-Fri 9:00-18:00',
        regulations: 'Not available'
      },
      {
        name: 'Department of "Humanities"',
        fullName: 'Department of "Humanities" of the Almalyk branch of NUST "MISIS"',
        head: 'Head of the Department of "Humanities" of the Almalyk branch of NUST "MISIS" Mukhammedov Murod Mukhammedovich',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street',
        phone: 'Not available',
        email: 'info@misis.uz',
        website: 'Not available',
        schedule: 'Mon-Fri 9:00-18:00',
        regulations: 'Not available'
      },
      {
        name: 'Department of "Natural Sciences"',
        fullName: 'Department of "Natural Sciences" of the Almalyk branch of NUST "MISIS"',
        head: 'Head of the Department of "Natural Sciences" of the Almalyk branch of NUST "MISIS" Vapoev Khusnitdin Mukhitdinovich',
        address: 'Republic of Uzbekistan, Tashkent region, Almalyk, 56 Amir Temur Street',
        phone: 'Not available',
        email: 'info@misis.uz',
        website: 'Not available',
        schedule: 'Mon-Fri 9:00-18:00',
        regulations: 'Not available'
      }
    ]
  }
};

const BranchStruct: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchStruct must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`branch-struct ${theme}`}>
      <HomeButton />
      <div className="content-container">
        <div className="header">
          <span className="header-icon">📋</span>
          <h1>{t.title}</h1>
        </div>
        
        <div className="departments-section">
          <div className="table-responsive">
            <table className="departments-table">
              <thead>
                <tr>
                  <th>{t.departmentTableHeaders.name}</th>
                  <th>{t.departmentTableHeaders.fullName}</th>
                  <th>{t.departmentTableHeaders.head}</th>
                  <th>{t.departmentTableHeaders.address}</th>
                  <th>{t.departmentTableHeaders.email}</th>
                  <th>{t.departmentTableHeaders.website}</th>
                  <th>{t.departmentTableHeaders.schedule}</th>
                  <th>{t.departmentTableHeaders.regulations}</th>
                </tr>
              </thead>
              <tbody>
                {t.departments.map((department, index) => (
                  <tr key={index}>
                    <td>{department.name}</td>
                    <td>{department.fullName}</td>
                    <td>{department.head}</td>
                    <td>{department.address}</td>
                    <td>{department.email}</td>
                    <td>{department.website}</td>
                    <td>{department.schedule}</td>
                    <td>{department.regulations}</td>
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

export default BranchStruct;
