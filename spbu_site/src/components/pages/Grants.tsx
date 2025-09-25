import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Grants.scss';

const translations = {
  ru: {
    title: 'Стипендии и иные виды материальной поддержки',
    scholarshipInfo: {
      title: 'Информация о наличии и условиях предоставления обучающимся стипендий',
      document: 'Временное положение о порядке назначения и выплат стипендий от 28.10.2024 г.'
    },
    dormitoryInfo: {
      title: 'Информация о наличии общежития, интерната, количество жилых помещений в общежитии, интернате для иногородних обучающихся',
      tableHeaders: {
        indicatorName: 'Наименование показателя',
        dormitories: 'Общежития',
        boardingSchools: 'Интернаты'
      },
      tableData: {
        dormitoriesCount: {
          label: 'Количество общежитий / интернатов',
          dormitories: 'Отсутствует',
          boardingSchools: 'Отсутствует'
        },
        placesCount: {
          label: 'Количество мест',
          dormitories: 'Отсутствует',
          boardingSchools: 'Отсутствует'
        },
        adaptedRoomsCount: {
          label: 'Количество жилых помещений, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья',
          dormitories: 'Отсутствует',
          boardingSchools: 'Отсутствует'
        }
      }
    }
  },
  en: {
    title: 'Scholarships and Other Types of Material Support',
    scholarshipInfo: {
      title: 'Information on the availability and conditions for providing scholarships to students',
      document: 'Temporary regulation on the procedure for awarding and paying scholarships from 28.10.2024'
    },
    dormitoryInfo: {
      title: 'Information on the availability of dormitories, boarding schools, the number of residential premises in dormitories, boarding schools for non-resident students',
      tableHeaders: {
        indicatorName: 'Indicator Name',
        dormitories: 'Dormitories',
        boardingSchools: 'Boarding Schools'
      },
      tableData: {
        dormitoriesCount: {
          label: 'Number of dormitories / boarding schools',
          dormitories: 'Absent',
          boardingSchools: 'Absent'
        },
        placesCount: {
          label: 'Number of places',
          dormitories: 'Absent',
          boardingSchools: 'Absent'
        },
        adaptedRoomsCount: {
          label: 'Number of residential premises adapted for use by disabled persons and persons with disabilities',
          dormitories: 'Absent',
          boardingSchools: 'Absent'
        }
      }
    }
  },
  uz: {
    title: 'Stipendiyalar va boshqa moddiy yordam turlari',
    scholarshipInfo: {
      title: 'Talabalar uchun stipendiyalar taqdim etish mavjudligi va shartlari haqida ma\'lumot',
      document: '2024 yil 28 oktyabrdan stipendiyalarni tayinlash va to\'lash tartibi bo\'yicha vaqtincha nizom'
    },
    dormitoryInfo: {
      title: 'Yotoqxona, internat mavjudligi, boshqa shaharlardan kelgan talabalar uchun yotoqxona, internatdagi turar joy binolari soni haqida ma\'lumot',
      tableHeaders: {
        indicatorName: 'Ko\'rsatkich nomi',
        dormitories: 'Yotoqxonalar',
        boardingSchools: 'Internatlar'
      },
      tableData: {
        dormitoriesCount: {
          label: 'Yotoqxona / internatlar soni',
          dormitories: 'Yo\'q',
          boardingSchools: 'Yo\'q'
        },
        placesCount: {
          label: 'O\'rinlar soni',
          dormitories: 'Yo\'q',
          boardingSchools: 'Yo\'q'
        },
        adaptedRoomsCount: {
          label: 'Nogironlar va cheklangan imkoniyatga ega shaxslar foydalanish uchun moslashtirilgan turar joy binolari soni',
          dormitories: 'Yo\'q',
          boardingSchools: 'Yo\'q'
        }
      }
    }
  }
};

const Grants: React.FC = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) {
    throw new Error('Grants must be used within Language Provider');
  }
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="grants-page">
      <div className="content-container">
        {/* Main Header */}
        <div className="main-header">
          <span className="main-header-icon">🎓</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        {/* Scholarship Information Section */}
        <div className="info-section">
          <div className="section-header">
            <span className="section-icon">📋</span>
            <h2 className="section-title">{t.scholarshipInfo.title}</h2>
          </div>
          <div className="document-link">
            <a
              href="/files/Временное положение о стипендии.pdf"
              className="document-link-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.scholarshipInfo.document}
            </a>
          </div>
        </div>

        {/* Dormitory Information Section */}
        <div className="info-section">
          <div className="section-header">
            <span className="section-icon">🏠</span>
            <h2 className="section-title">{t.dormitoryInfo.title}</h2>
          </div>
          <div className="table-container">
            <div className="table-wrapper">
              <table className="info-table">
                <thead>
                  <tr>
                    <th className="indicator-column">{t.dormitoryInfo.tableHeaders.indicatorName}</th>
                    <th className="data-column">{t.dormitoryInfo.tableHeaders.dormitories}</th>
                    <th className="data-column">{t.dormitoryInfo.tableHeaders.boardingSchools}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="indicator-cell">{t.dormitoryInfo.tableData.dormitoriesCount.label}</td>
                    <td className="data-cell">{t.dormitoryInfo.tableData.dormitoriesCount.dormitories}</td>
                    <td className="data-cell">{t.dormitoryInfo.tableData.dormitoriesCount.boardingSchools}</td>
                  </tr>
                  <tr>
                    <td className="indicator-cell">{t.dormitoryInfo.tableData.placesCount.label}</td>
                    <td className="data-cell">{t.dormitoryInfo.tableData.placesCount.dormitories}</td>
                    <td className="data-cell">{t.dormitoryInfo.tableData.placesCount.boardingSchools}</td>
                  </tr>
                  <tr>
                    <td className="indicator-cell">{t.dormitoryInfo.tableData.adaptedRoomsCount.label}</td>
                    <td className="data-cell">{t.dormitoryInfo.tableData.adaptedRoomsCount.dormitories}</td>
                    <td className="data-cell">{t.dormitoryInfo.tableData.adaptedRoomsCount.boardingSchools}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grants;
