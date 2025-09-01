import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './LocalDocuments.scss';

type Translations = {
  [key in Language]: {
    title: string;
    sections: {
      scholarship: {
        title: string;
        documents: {
          id: number;
          title: string;
          description: string;
          link: string;
          date: string;
        }[];
      };
      rules: {
        title: string;
        documents: {
          id: number;
          title: string;
          description: string;
          link: string;
          date: string;
        }[];
      };
      ethics: {
        title: string;
        documents: {
          id: number;
          title: string;
          description: string;
          link: string;
          date: string;
        }[];
      };
      jobDescriptions: {
        title: string;
        documents: {
          id: number;
          title: string;
          description: string;
          link: string;
          date: string;
        }[];
      };
      orders: {
        title: string;
        documents: {
          id: number;
          title: string;
          description: string;
          link: string;
          date: string;
        }[];
      };
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'ЛОКАЛЬНЫЕ ДОКУМЕНТЫ',
    sections: {
      scholarship: {
        title: 'Стипендия',
        documents: [
          {
            id: 1,
            title: 'Временное Положение о порядке назначения и выплаты стипендий обучающимся филиала Федерального государственного бюджетного образовательного учреждения высшего образования «Санкт-Петербургский государственный университет» в городе Ташкенте',
            description: 'Положение о стипендиях для студентов филиала СПбГУ в Ташкенте',
            link: '/files/Стипендия-положения.pdf',
            date: '2024'
          }
        ]
      },
      rules: {
        title: 'ПРАВИЛА ВНУТРЕННЕГО РАСПОРЯДКА ОБУЧАЮЩИХСЯ',
        documents: [
          {
            id: 1,
            title: 'Правила внутреннего распорядка обучающихся филиала Федерального государственного бюджетного образовательного учреждения высшего образования «Санкт-Петербургский государственный университет» в городе Ташкенте',
            description: 'Правила внутреннего распорядка для студентов филиала',
            link: '/files/правила_внутреннего_распорядка_обучающихся-1.pdf',
            date: '2024'
          }
        ]
      },
      ethics: {
        title: 'Этические правила',
        documents: [
          {
            id: 1,
            title: 'Этические правила сотрудников филиала Федерального государственного бюджетного образовательного учреждения высшего образования «Санкт-Петербургский государственный Университет» в городе Ташкенте',
            description: 'Этические правила для сотрудников филиала',
            link: '/files/этические_правила_сотрудников_Филиала.pdf',
            date: '2024'
          }
        ]
      },
      jobDescriptions: {
        title: 'Типовые должностные инструкции',
        documents: [
          {
            id: 1,
            title: 'Типовая должностная инструкция работников филиала Федерального государственного бюджетного образовательного учреждения высшего образования «Санкт-Петербургский государственный университет» в городе Ташкенте',
            description: 'Типовые должностные инструкции для работников филиала',
            link: '/files/Функционал_обязон_русс_ворд_222_1.pdf',
            date: '2024'
          }
        ]
      },
      orders: {
        title: 'Приказы',
        documents: [
          {
            id: 1,
            title: 'Приказ об утверждении положений о подразделениях Филиала Федерального государственного бюджетного образовательного учреждения высшего образования «Санкт-Петербургский государственный университет» в г.Ташкенте',
            description: 'Приказ об утверждении положений о подразделениях',
            link: '/files/Приказ.pdf',
            date: '2024'
          }
        ]
      }
    }
  },
  uz: {
    title: 'LOKAL HUJJATLAR',
    sections: {
      scholarship: {
        title: 'Stipendiya',
        documents: [
          {
            id: 1,
            title: 'Toshkent shahridagi "Sankt-Peterburg davlat universiteti" oliy ta\'lim muassasasi filialining talabalari uchun stipendiya berish va to\'lash tartibi to\'g\'risidagi vaqtincha nizom',
            description: 'Toshkentdagi SPbGU filiali talabalari uchun stipendiya nizomi',
            link: '/files/scholarship_regulation.pdf',
            date: '2024'
          }
        ]
      },
      rules: {
        title: 'TALABALARNING ICHKI TARTIB QOIDALARI',
        documents: [
          {
            id: 1,
            title: 'Toshkent shahridagi "Sankt-Peterburg davlat universiteti" oliy ta\'lim muassasasi filialining talabalari uchun ichki tartib qoidalari',
            description: 'Filial talabalari uchun ichki tartib qoidalari',
            link: '/files/internal_rules.pdf',
            date: '2024'
          }
        ]
      },
      ethics: {
        title: 'Axloqiy qoidalar',
        documents: [
          {
            id: 1,
            title: 'Toshkent shahridagi "Sankt-Peterburg davlat universiteti" oliy ta\'lim muassasasi filialining xodimlari uchun axloqiy qoidalar',
            description: 'Filial xodimlari uchun axloqiy qoidalar',
            link: '/files/ethics_rules.pdf',
            date: '2024'
          }
        ]
      },
      jobDescriptions: {
        title: 'Tipik lavozim ko\'rsatmalari',
        documents: [
          {
            id: 1,
            title: 'Toshkent shahridagi "Sankt-Peterburg davlat universiteti" oliy ta\'lim muassasasi filialining xodimlari uchun tipik lavozim ko\'rsatmasi',
            description: 'Filial xodimlari uchun tipik lavozim ko\'rsatmalari',
            link: '/files/job_descriptions.pdf',
            date: '2024'
          }
        ]
      },
      orders: {
        title: 'Buyruqlar',
        documents: [
          {
            id: 1,
            title: 'Toshkentdagi "Sankt-Peterburg davlat universiteti" oliy ta\'lim muassasasi filialining bo\'limlari to\'g\'risidagi nizomlarni tasdiqlash to\'g\'risidagi buyruq',
            description: 'Bo\'limlar to\'g\'risidagi nizomlarni tasdiqlash buyrug\'i',
            link: '/files/department_regulations_order.pdf',
            date: '2024'
          }
        ]
      }
    }
  },
  en: {
    title: 'LOCAL DOCUMENTS',
    sections: {
      scholarship: {
        title: 'Scholarship',
        documents: [
          {
            id: 1,
            title: 'Temporary Regulation on the procedure for awarding and paying scholarships to students of the branch of the Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University" in the city of Tashkent',
            description: 'Scholarship regulation for students of SPbSU branch in Tashkent',
            link: '/files/scholarship_regulation.pdf',
            date: '2024'
          }
        ]
      },
      rules: {
        title: 'INTERNAL REGULATIONS FOR STUDENTS',
        documents: [
          {
            id: 1,
            title: 'Internal regulations for students of the branch of the Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University" in the city of Tashkent',
            description: 'Internal regulations for branch students',
            link: '/files/internal_rules.pdf',
            date: '2024'
          }
        ]
      },
      ethics: {
        title: 'Ethical rules',
        documents: [
          {
            id: 1,
            title: 'Ethical rules for employees of the branch of the Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University" in the city of Tashkent',
            description: 'Ethical rules for branch employees',
            link: '/files/ethics_rules.pdf',
            date: '2024'
          }
        ]
      },
      jobDescriptions: {
        title: 'Standard job descriptions',
        documents: [
          {
            id: 1,
            title: 'Standard job description for employees of the branch of the Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University" in the city of Tashkent',
            description: 'Standard job descriptions for branch employees',
            link: '/files/job_descriptions.pdf',
            date: '2024'
          }
        ]
      },
      orders: {
        title: 'Orders',
        documents: [
          {
            id: 1,
            title: 'Order on the approval of regulations on the departments of the Branch of the Federal State Budgetary Educational Institution of Higher Education "Saint Petersburg State University" in Tashkent',
            description: 'Order on the approval of department regulations',
            link: '/files/department_regulations_order.pdf',
            date: '2024'
          }
        ]
      }
    }
  }
};

const LocalDocuments: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('LocalDocuments must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  const renderSection = (sectionKey: keyof typeof t.sections, icon: string) => {
    const section = t.sections[sectionKey];
    return (
      <div className="section-block">
        <div className="sub-header">
          <span className="sub-header-icon">{icon}</span>
          <h2 className="section-title">{section.title}</h2>
        </div>
        <div className="documents-grid">
          {section.documents.map((doc) => (
            <div key={doc.id} className="document-card">
              <div className="document-header">
                <div className="document-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="document-meta">
                  <span className="document-date">{doc.date}</span>
                </div>
              </div>
              <div className="document-content">
                <h3 className="document-title">{doc.title}</h3>
                <p className="document-description">{doc.description}</p>
              </div>
                             <div className="document-actions">
                 <div className="action-buttons">
                   <a href={doc.link} className="view-button" target="_blank" rel="noopener noreferrer">
                     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     {language === 'ru' ? 'Просмотр' : language === 'uz' ? 'Ko\'rish' : 'View'}
                   </a>
                   <a href={doc.link} className="download-button" download target="_blank" rel="noopener noreferrer">
                     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     {language === 'ru' ? 'Скачать' : language === 'uz' ? 'Yuklab olish' : 'Download'}
                   </a>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="local-documents">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">📄</span>
          <h1 className="main-title">{t.title}</h1>
        </div>
        
        {renderSection('scholarship', '💰')}
        {renderSection('rules', '📋')}
        {renderSection('ethics', '🤝')}
        {renderSection('jobDescriptions', '👥')}
        {renderSection('orders', '📜')}
      </div>
    </div>
  );
};

export default LocalDocuments;
