import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import './History.scss';

type HistoryTranslations = {
  [key in Language]: {
    title: string;
    text: string[];
    detailsButton: string;
  };
};

const translations: HistoryTranslations = {
  ru: {
    title: 'История',
    text: [
      'Санкт-Петербургский государственный университет (СПбГУ) — старейший университет России, основанный в 1724 году по указу Петра I.',
      'За свою почти 300-летнюю историю университет подготовил множество выдающихся выпускников, включая нобелевских лауреатов, известных ученых, политических и общественных деятелей.',
      'СПбГУ сегодня — это современный научно-образовательный центр, сочетающий традиции классического образования с инновационными подходами к обучению.'
    ],
    detailsButton: 'Подробнее'
  },
  uz: {
    title: 'Tarix',
    text: [
      'Sankt-Peterburg davlat universiteti (SPbDU) - Rossiyaning eng qadimgi universiteti, 1724 yilda Pyotr I farmoni bilan tashkil etilgan.',
      'Deyarli 300 yillik tarixi davomida universitet Nobel mukofoti sovrindorlari, taniqli olimlar, siyosiy va jamoat arboblarini o\'z ichiga olgan ko\'plab mashhur bitiruvchilarni tayyorladi.',
      'Bugungi kunda SPbDU - an\'anaviy ta\'limni innovatsion o\'qitish usullari bilan birlashtirgan zamonaviy ilmiy-ta\'lim markazidir.'
    ],
    detailsButton: 'Batafsil'
  },
  en: {
    title: 'History',
    text: [
      'Saint Petersburg State University (SPbU) is the oldest university in Russia, founded in 1724 by decree of Peter I.',
      'Throughout its nearly 300-year history, the university has produced many distinguished graduates, including Nobel laureates, renowned scientists, political and public figures.',
      'Today, SPbU is a modern scientific and educational center that combines the traditions of classical education with innovative approaches to learning.'
    ],
    detailsButton: 'Learn more'
  }
};

const History: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('History must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`history-page ${theme}`}>
      <h1>{t.title}</h1>
      <div className="history-content">
        <div className="history-image-container">
          <img 
            src="/images/image.png" 
            alt="Saint Petersburg State University" 
            className="history-image"
          />
        </div>
        <div className="history-text">
          {t.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a 
            href="https://spbu.ru/history" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="details-button"
          >
            {t.detailsButton}
          </a>
        </div>
      </div>
    </div>
  );
};

export default History;
