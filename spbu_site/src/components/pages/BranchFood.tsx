import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchFood.scss';

type TableRow = {
  name: string;
  address: string;
  area: string;
  seats: string;
  accessibility: string;
};

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    tableHeaders: {
      name: string;
      address: string;
      area: string;
      seats: string;
      accessibility: string;
    };
    tableData: TableRow[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Организация питания в образовательной организации',
    subtitle: 'Сведения об условиях питания обучающихся',
    tableHeaders: {
      name: 'Наименование объекта',
      address: 'Адрес места нахождения объекта',
      area: 'Площадь объекта, м2',
      seats: 'Количество мест',
      accessibility: 'Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья'
    },
    tableData: [
      {
        name: 'Столовая',
        address: 'г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16',
        area: '555,86',
        seats: '150',
        accessibility: 'Столовая расположена на цокольном этаже, нет препятствий для маломобильных студентов.'
      }
    ]
  },
  uz: {
    title: 'Ta\'lim tashkilotida ovqatlanishni tashkil etish',
    subtitle: 'O\'quvchilarning ovqatlanish sharoitlari to\'g\'risida ma\'lumot',
    tableHeaders: {
      name: 'Obyekt nomi',
      address: 'Obyekt joylashgan manzil',
      area: 'Obyekt maydoni, m2',
      seats: 'O\'rindiqlar soni',
      accessibility: 'Nogironlar va imkoniyati cheklangan shaxslar uchun moslanganlik'
    },
    tableData: [
      {
        name: 'Oshxona',
        address: 'Toshkent sh., Mirobod tumani, Shahrisabz ko\'chasi, 16-uy',
        area: '555,86',
        seats: '150',
        accessibility: 'Oshxona suten osti qavatida joylashgan, kam harakatli talabalar uchun to\'siqlar yo\'q.'
      }
    ]
  },
  en: {
    title: 'Organization of meals in the educational organization',
    subtitle: 'Information about student dining conditions',
    tableHeaders: {
      name: 'Object name',
      address: 'Object location address',
      area: 'Object area, m2',
      seats: 'Number of seats',
      accessibility: 'Accessibility for persons with disabilities and persons with limited mobility'
    },
    tableData: [
      {
        name: 'Cafeteria',
        address: 'Tashkent, Mirabad district, Shakhrisabz str., 16',
        area: '555.86',
        seats: '150',
        accessibility: 'The cafeteria is located on the ground floor, there are no obstacles for students with limited mobility.'
      }
    ]
  }
};

const BranchFood: React.FC = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) throw new Error('BranchFood must be used within Language Provider');
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-common">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">🍽️</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="info-section food-block">
          <h2 className="section-title centered-title">{t.subtitle}</h2>
          <div className="table-container">
            <div className="table-wrapper">
              <table className="info-table food-table" role="table">
                <thead>
                  <tr>
                    <th scope="col">{t.tableHeaders.name}</th>
                    <th scope="col">{t.tableHeaders.address}</th>
                    <th scope="col">{t.tableHeaders.area}</th>
                    <th scope="col">{t.tableHeaders.seats}</th>
                    <th scope="col">{t.tableHeaders.accessibility}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td>{row.address}</td>
                      <td>{row.area}</td>
                      <td>{row.seats}</td>
                      <td>{row.accessibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchFood;