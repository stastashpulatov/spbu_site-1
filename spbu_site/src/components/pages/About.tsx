import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import './About.scss';

type Translations = {
  [key in Language]: {
    title: string;
    description: string[];
    facts: {
      title: string;
      items: {
        number: string;
        text: string;
      }[];
    };
    mission: {
      title: string;
      text: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'О СПбГУ',
    description: [
      'Санкт-Петербургский государственный университет — один из старейших, крупнейших и ведущих классических университетов России.',
      'Основанный в 1724 году по указу Петра I, университет сегодня является научно-образовательным центром мирового значения.',
      'СПбГУ — первый университет России, в котором обучаются более 30 000 студентов по различным программам.'
    ],
    facts: {
      title: 'СПбГУ в цифрах',
      items: [
        { number: '1724', text: 'Год основания' },
        { number: '398', text: 'Образовательных программ' },
        { number: '30000+', text: 'Студентов' },
        { number: '6000+', text: 'Преподавателей' }
      ]
    },
    mission: {
      title: 'Миссия',
      text: 'Приумножение образовательного, научного и культурного потенциала России через сохранение традиций, развитие инноваций и интеграцию в международное академическое сообщество.'
    }
  },
  uz: {
    title: 'SPbDU haqida',
    description: [
      'Sankt-Peterburg davlat universiteti - Rossiyaning eng qadimgi, eng yirik va yetakchi klassik universitetlaridan biri.',
      'Pyotr I farmoni bilan 1724 yilda tashkil etilgan universitet bugungi kunda jahon ahamiyatiga ega ilmiy-ta\'lim markazidir.',
      'SPbDU - Rossiyaning birinchi universiteti bo\'lib, unda turli dasturlar bo\'yicha 30 000 dan ortiq talaba ta\'lim oladi.'
    ],
    facts: {
      title: 'SPbDU raqamlarda',
      items: [
        { number: '1724', text: 'Tashkil etilgan yil' },
        { number: '398', text: 'Ta\'lim dasturlari' },
        { number: '30000+', text: 'Talabalar' },
        { number: '6000+', text: 'O\'qituvchilar' }
      ]
    },
    mission: {
      title: 'Vazifa',
      text: 'An\'analarni saqlash, innovatsiyalarni rivojlantirish va xalqaro akademik hamjamiyatga integratsiyalashish orqali Rossiyaning ta\'lim, ilmiy va madaniy salohiyatini oshirish.'
    }
  },
  en: {
    title: 'About SPbU',
    description: [
      'Saint Petersburg State University is one of the oldest, largest, and leading classical universities in Russia.',
      'Founded in 1724 by decree of Peter I, the university today is a world-class scientific and educational center.',
      'SPbU is Russia\'s first university, with over 30,000 students enrolled in various programs.'
    ],
    facts: {
      title: 'SPbU in Numbers',
      items: [
        { number: '1724', text: 'Year founded' },
        { number: '398', text: 'Educational programs' },
        { number: '30000+', text: 'Students' },
        { number: '6000+', text: 'Faculty members' }
      ]
    },
    mission: {
      title: 'Mission',
      text: 'Enhancing Russia\'s educational, scientific, and cultural potential through preserving traditions, developing innovations, and integrating into the international academic community.'
    }
  }
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('About must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`about ${theme}`}>
      <div className="content-container">
        <h1>{t.title}</h1>
        <div className="about-grid">
          <div className="main-content">
            <div className="description-card">
              {t.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mission-card">
              <h2>{t.mission.title}</h2>
              <p>{t.mission.text}</p>
            </div>
          </div>
          <div className="facts-card">
            <h2>{t.facts.title}</h2>
            <div className="facts-grid">
              {t.facts.items.map((fact, index) => (
                <div key={index} className="fact-item">
                  <div className="fact-number">{fact.number}</div>
                  <div className="fact-text">{fact.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
