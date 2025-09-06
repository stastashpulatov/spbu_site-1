import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './EducationalStandards.scss';

type OrderItem = {
  number: string;
  date: string;
  title: string;
  url?: string; // URL to the document file
};

type Translations = {
  [key in Language]: {
    title: string;
    description: string;
    orderPrefix: string;
    datePrefix: string;
    orders: OrderItem[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Образовательный стандарт СПбГУ',
    description: 'В этом разделе собраны документы в виде электронных документов, подписанных простой электронной подписью в соответствии с Федеральным законом от 6 апреля 2011 г. № 63-ФЗ «Об электронной подписи», утверждающие образовательные стандарты СПбГУ.',
    orderPrefix: 'Приказ',
    datePrefix: 'от',
    orders: [
      {
        number: '7828/1',
        date: '09.08.2018',
        title: '«Об утверждении Образовательного стандарта высшего образования СПбГУ»',
        url: '/files/20180809_7828_1_ecp.pdf'
      },
      {
        number: '8527/1',
        date: '29.08.2018',
        title: '«О внесении изменений в приказ от 09.08.2018 № 7828/1 "Об утверждении Образовательного стандарта высшего образования Санкт-Петербургского государственного университета"»',
        url: '/files/20180829_8527_1_ecp.pdf'
      },
      {
        number: '12151/1',
        date: '18.12.2018',
        title: '«О внесении изменений в приказ от 09.08.2018 № 7828/1 "Об утверждении Образовательного стандарта высшего образования Санкт-Петербургского государственного университета"»',
        url: '/files/20181218_12151_1_ecp.pdf'
      },
      {
        number: '11670/1',
        date: '23.12.2020',
        title: '«О внесении изменений в приказ от 09.08.2018 № 7828/1 "Об утверждении Образовательного стандарта высшего образования Санкт-Петербургского государственного университета" (в ред. приказа от 18.12.2018 № 12151/1)»',
        url: '/files/20201223_11670_1_ecp.pdf'
      },
      {
        number: '3034/1',
        date: '12.04.2021',
        title: '«О внесении изменений в приказ от 09.08.2018 № 7828/1 "Об утверждении Образовательного стандарта высшего образования Санкт-Петербургского государственного университета" (с последующими изменениями и дополнениями)»',
        url: '/files/20210412_3034_1_ecp.pdf'
      },
      {
        number: '8344/1',
        date: '31.08.2021',
        title: '«О внесении изменений в Образовательный стандарт СПбГУ и утверждении Рабочей программы воспитания в СПбГУ и Календарного плана воспитательной работы на 2021-2022 учебный год»',
        url: '/files/20210831_8344_1_ecp.pdf'
      },
      {
        number: '1175/1',
        date: '07.02.2025',
        title: '«О внесении изменений в приказ от 09.08.2018 № 7828/1 «Об утверждении Образовательного стандарта высшего образования Санкт-Петербургского государственного университета» (с последующими изменениями и дополнениями)»',
        url: '/files/20250207_1175_1_0.pdf'
      },
      {
        number: '6371/1',
        date: '19.05.2025',
        title: '«О внесении изменений в приказ от 09.08.2018 № 7828/1 «Об утверждении Образовательного стандарта высшего образования Санкт-Петербургского государственного университета»',
        url: '/files/20250519_6371_1.pdf'
      }
    ]
  },
  uz: {
    title: 'SPbDU ta\'lim standarti',
    description: 'Ushbu bo\'limda 2011 yil 6 apreldagi 63-FZ-sonli "Elektron imzo to\'g\'risida"gi Federal qonunga muvofiq oddiy elektron imzo bilan imzolangan elektron hujjatlar shaklida SPbDU ta\'lim standartlarini tasdiqlovchi hujjatlar to\'plangan.',
    orderPrefix: 'Buyruq',
    datePrefix: 'dan',
    orders: [
      {
        number: '7828/1',
        date: '09.08.2018',
        title: '«SPbDU oliy ta\'lim standartini tasdiqlash to\'g\'risida»',
        url: '/files/20180809_7828_1_ecp.pdf'
      },
      {
        number: '8527/1',
        date: '29.08.2018',
        title: '«09.08.2018 yildagi 7828/1-sonli buyruqda o\'zgartirishlar kiritish to\'g\'risida "Sankt-Peterburg davlat universitetining oliy ta\'lim standartini tasdiqlash to\'g\'risida"»',
        url: '/files/20180829_8527_1_ecp.pdf'
      },
      {
        number: '12151/1',
        date: '18.12.2018',
        title: '«09.08.2018 yildagi 7828/1-sonli buyruqda o\'zgartirishlar kiritish to\'g\'risida "Sankt-Peterburg davlat universitetining oliy ta\'lim standartini tasdiqlash to\'g\'risida"»',
        url: '/files/20181218_12151_1_ecp.pdf'
      },
      {
        number: '11670/1',
        date: '23.12.2020',
        title: '«09.08.2018 yildagi 7828/1-sonli buyruqda o\'zgartirishlar kiritish to\'g\'risida "Sankt-Peterburg davlat universitetining oliy ta\'lim standartini tasdiqlash to\'g\'risida" (18.12.2018 yildagi 12151/1-sonli buyruq bilan o\'zgartirilgan)»',
        url: '/files/20201223_11670_1_ecp.pdf'
      },
      {
        number: '3034/1',
        date: '12.04.2021',
        title: '«09.08.2018 yildagi 7828/1-sonli buyruqda o\'zgartirishlar kiritish to\'g\'risida "Sankt-Peterburg davlat universitetining oliy ta\'lim standartini tasdiqlash to\'g\'risida" (keyingi o\'zgartirishlar va qo\'shimchalar bilan)»',
        url: '/files/20210412_3034_1_ecp.pdf'
      },
      {
        number: '8344/1',
        date: '31.08.2021',
        title: '«SPbDU ta\'lim standartida o\'zgartirishlar kiritish va SPbDUda tarbiya ish dasturini va 2021-2022 o\'quv yili uchun tarbiya ishlari kalendar rejasini tasdiqlash to\'g\'risida»',
        url: '/files/20210831_8344_1_ecp.pdf'
      },
      {
        number: '1175/1',
        date: '07.02.2025',
        title: '«09.08.2018 yildagi 7828/1-sonli buyruqda o\'zgartirishlar kiritish to\'g\'risida "Sankt-Peterburg davlat universitetining oliy ta\'lim standartini tasdiqlash to\'g\'risida" (keyingi o\'zgartirishlar va qo\'shimchalar bilan)»',
        url: '/files/20250207_1175_1_0.pdf'
      },
      {
        number: '6371/1',
        date: '19.05.2025',
        title: '«09.08.2018 yildagi 7828/1-sonli buyruqda o\'zgartirishlar kiritish to\'g\'risida "Sankt-Peterburg davlat universitetining oliy ta\'lim standartini tasdiqlash to\'g\'risida"»',
        url: '/files/20250519_6371_1.pdf'
      }
    ]
  },
  en: {
    title: 'SPbSU Educational Standard',
    description: 'This section contains documents in the form of electronic documents, signed with a simple electronic signature in accordance with Federal Law No. 63-FZ of April 6, 2011 "On Electronic Signature," approving the educational standards of SPbSU.',
    orderPrefix: 'Order',
    datePrefix: 'of',
    orders: [
      {
        number: '7828/1',
        date: '09.08.2018',
        title: '"On the approval of the Educational Standard of Higher Education of SPbSU"',
        url: '/files/20180809_7828_1_ecp.pdf'
      },
      {
        number: '8527/1',
        date: '29.08.2018',
        title: '"On making changes to order of 09.08.2018 No. 7828/1 \'On the approval of the Educational Standard of Higher Education of Saint Petersburg State University\'"',
        url: '/files/20180829_8527_1_ecp.pdf'
      },
      {
        number: '12151/1',
        date: '18.12.2018',
        title: '"On making changes to order of 09.08.2018 No. 7828/1 \'On the approval of the Educational Standard of Higher Education of Saint Petersburg State University\'"',
        url: '/files/20181218_12151_1_ecp.pdf'
      },
      {
        number: '11670/1',
        date: '23.12.2020',
        title: '"On making changes to order of 09.08.2018 No. 7828/1 \'On the approval of the Educational Standard of Higher Education of Saint Petersburg State University\' (as amended by order of 18.12.2018 No. 12151/1)"',
        url: '/files/20201223_11670_1_ecp.pdf'
      },
      {
        number: '3034/1',
        date: '12.04.2021',
        title: '"On making changes to order of 09.08.2018 No. 7828/1 \'On the approval of the Educational Standard of Higher Education of Saint Petersburg State University\' (with subsequent changes and additions)"',
        url: '/files/20210412_3034_1_ecp.pdf'
      },
      {
        number: '8344/1',
        date: '31.08.2021',
        title: '"On making changes to the Educational Standard of SPbSU and approval of the Work Program for Education at SPbSU and the Calendar Plan for Educational Work for the 2021-2022 academic year"',
        url: '/files/20210831_8344_1_ecp.pdf'
      },
      {
        number: '1175/1',
        date: '07.02.2025',
        title: '"On making changes to order of 09.08.2018 No. 7828/1 \'On the approval of the Educational Standard of Higher Education of Saint Petersburg State University\' (with subsequent changes and additions)"',
        url: '/files/20250207_1175_1_0.pdf'
      },
      {
        number: '6371/1',
        date: '19.05.2025',
        title: '"On making changes to order of 09.08.2018 No. 7828/1 \'On the approval of the Educational Standard of Higher Education of Saint Petersburg State University\'"',
        url: '/files/20250519_6371_1.pdf'
      }
    ]
  }
};

const EducationalStandards: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('EducationalStandards must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="educational-standards">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">📚</span>
          <h1 className="main-title">{t.title}</h1>
        </div>
        
        <div className="info-section">
          <div className="section-content">
            <p className="description-text">{t.description}</p>
            
            <div className="orders-list">
              <ul>
                {t.orders.map((order, index) => (
                  <li key={index}>
                    <a 
                      href={order.url} 
                      className="order-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <strong>{t.orderPrefix} № {order.number} {t.datePrefix} {order.date}</strong> {order.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalStandards;
