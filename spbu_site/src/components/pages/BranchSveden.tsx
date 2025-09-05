import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './BranchSveden.scss';
import { Link } from 'react-router-dom';

type Translations = {
  [key in Language]: {
    title: string;
    description: string[];
    sections: {
      title: string;
      link: string;
    }[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Сведения об образовательной организации',
    description: [
      'В данном разделе представлена информация о филиале Санкт-Петербургского государственного университета в городе Ташкенте в соответствии с требованиями законодательства.',
      'Здесь вы можете ознакомиться с основными сведениями о филиале, его структуре, документами, образовательными программами и другой важной информацией.'
    ],
    sections: [
      { title: 'Основные сведения', link: '/branch-tashkent/sveden/common' },
      { title: 'Структура и органы управления', link: '/branch-tashkent/sveden/struct' },
      { title: 'Документы', link: '/branch-tashkent/sveden/document' },
      { title: 'Образование', link: '/branch-tashkent/sveden/education' },
      { title: 'Образовательные стандарты', link: '/branch-tashkent/sveden/eduStandarts' },
      { title: 'Руководство', link: '/branch-tashkent/sveden/leadership' },
      { title: 'Педагогический состав', link: '/branch-tashkent/sveden/employees' },
      { title: 'Материально-техническое обеспечение', link: '/branch-tashkent/sveden/objects' },
      { title: 'Стипендии и меры поддержки обучающихся', link: '/branch-tashkent/sveden/grants' },
      { title: 'Платные образовательные услуги', link: '/branch-tashkent/sveden/paid_edu' },
      { title: 'Финансово-хозяйственная деятельность', link: '/branch-tashkent/sveden/budget' },
      { title: 'Вакантные места для приема', link: '/branch-tashkent/sveden/vacant' },
      { title: 'Доступная среда', link: '/branch-tashkent/sveden/ovz' },
      { title: 'Международное сотрудничество', link: '/branch-tashkent/sveden/inter' }
    ]
  },
  uz: {
    title: 'Ta\'lim tashkiloti to\'g\'risida ma\'lumot',
    description: [
      'Ushbu bo\'limda qonun hujjatlari talablariga muvofiq Toshkent shahridagi Sankt-Peterburg davlat universiteti filiali to\'g\'risida ma\'lumot taqdim etilgan.',
      'Bu yerda siz filialning asosiy ma\'lumotlari, tuzilishi, hujjatlari, ta\'lim dasturlari va boshqa muhim ma\'lumotlar bilan tanishishingiz mumkin.'
    ],
    sections: [
      { title: 'Asosiy ma\'lumotlar', link: '/branch-tashkent/sveden/common' },
      { title: 'Tuzilishi va boshqaruv organlari', link: '/branch-tashkent/sveden/struct' },
      { title: 'Hujjatlar', link: '/branch-tashkent/sveden/document' },
      { title: 'Ta\'lim', link: '/branch-tashkent/sveden/education' },
      { title: 'Ta\'lim standartlari', link: '/branch-tashkent/sveden/eduStandarts' },
      { title: 'Rahbariyat', link: '/branch-tashkent/sveden/leadership' },
      { title: 'Pedagogik tarkib', link: '/branch-tashkent/sveden/employees' },
      { title: 'Moddiy-texnik ta\'minot', link: '/branch-tashkent/sveden/objects' },
      { title: 'Stipendiyalar va talabalarni qo\'llab-quvvatlash choralari', link: '/branch-tashkent/sveden/grants' },
      { title: 'Pullik ta\'lim xizmatlari', link: '/branch-tashkent/sveden/paid_edu' },
      { title: 'Moliyaviy-xo\'jalik faoliyati', link: '/branch-tashkent/sveden/budget' },
      { title: 'Qabul uchun bo\'sh joylar', link: '/branch-tashkent/sveden/vacant' },
      { title: 'Qulay muhit', link: '/branch-tashkent/sveden/ovz' },
      { title: 'Xalqaro hamkorlik', link: '/branch-tashkent/sveden/inter' }
    ]
  },
  en: {
    title: 'Information about the educational organization',
    description: [
      'This section provides information about the branch of St. Petersburg State University in Tashkent in accordance with legal requirements.',
      'Here you can find basic information about the branch, its structure, documents, educational programs, and other important information.'
    ],
    sections: [
      { title: 'Basic information', link: '/branch-tashkent/sveden/common' },
      { title: 'Structure and management bodies', link: '/branch-tashkent/sveden/struct' },
      { title: 'Documents', link: '/branch-tashkent/sveden/document' },
      { title: 'Education', link: '/branch-tashkent/sveden/education' },
      { title: 'Educational standards', link: '/branch-tashkent/sveden/eduStandarts' },
      { title: 'Leadership', link: '/branch-tashkent/sveden/leadership' },
      { title: 'Teaching staff', link: '/branch-tashkent/sveden/employees' },
      { title: 'Material and technical support', link: '/branch-tashkent/sveden/objects' },
      { title: 'Scholarships and student support measures', link: '/branch-tashkent/sveden/grants' },
      { title: 'Paid educational services', link: '/branch-tashkent/sveden/paid_edu' },
      { title: 'Financial and economic activities', link: '/branch-tashkent/sveden/budget' },
      { title: 'Vacant places for admission', link: '/branch-tashkent/sveden/vacant' },
      { title: 'Accessible environment', link: '/branch-tashkent/sveden/ovz' },
      { title: 'International cooperation', link: '/branch-tashkent/sveden/inter' }
    ]
  }
};

const BranchSveden: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchSveden must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="branch-sveden">
      <div className="content-container">
        <div className="header">
          <span className="header-icon">📋</span>
          <h1>{t.title}</h1>
        </div>
        <div className="description-card">
          {t.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="sections-grid">
          {t.sections.map((section, index) => (
            <Link to={section.link} key={index} className="section-card">
              <div className="section-content">
                <h3>{section.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchSveden;
