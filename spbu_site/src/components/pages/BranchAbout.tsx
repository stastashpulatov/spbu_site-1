import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from '../shared/HomeButton';
import './BranchAbout.scss';

type Translations = {
  [key in Language]: {
    title: string;
    description: string[];
    address: {
      title: string;
      text: string;
    };
    contacts: {
      title: string;
      phone: string;
      email: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'О филиале',
    description: [
      'Филиал Санкт-Петербургского государственного университета в городе Ташкенте был основан в 2022 году.',
      'Филиал предоставляет качественное образование по программам бакалавриата, основанным на высоких стандартах СПбГУ.',
      'Наша миссия - подготовка высококвалифицированных специалистов, способных внести значительный вклад в развитие экономики и общества.'
    ],
    address: {
      title: 'Адрес',
      text: 'улица Шахрисабз 25, 100060, Ташкент, Tashkent, Узбекистан'
    },
    contacts: {
      title: 'Контакты',
      phone: '+998 71 203 22 06',
      email: 'info@spbu.uz'
    }
  },
  uz: {
    title: 'Filial haqida',
    description: [
      'Sankt-Peterburg davlat universitetining Toshkent shahridagi filiali 2022-yilda tashkil etilgan.',
      'Filial SPbDUning yuqori standartlariga asoslangan bakalavriat dasturlari bo\'yicha sifatli ta\'lim beradi.',
      'Bizning vazifamiz - iqtisodiyot va jamiyat rivojiga sezilarli hissa qo\'shishga qodir yuqori malakali mutaxassislarni tayyorlash.'
    ],
    address: {
      title: 'Manzil',
      text: 'Toshkent shahri, Mirzo Ulug\'bek tumani, Istiqbol ko\'chasi, 15'
    },
    contacts: {
      title: 'Kontaktlar',
      phone: '+998 71 203 22 06',
      email: 'info@spbu.uz'
    }
  },
  en: {
    title: 'About the Branch',
    description: [
      'The branch of Saint Petersburg State University in Tashkent was established in 2022.',
      'The branch provides quality education in bachelor\'s degree programs based on SPbU\'s high standards.',
      'Our mission is to prepare highly qualified specialists capable of making a significant contribution to the development of the economy and society.'
    ],
    address: {
      title: 'Address',
      text: '15 Istiqbol Street, Mirzo-Ulugbek District, Tashkent'
    },
    contacts: {
      title: 'Contacts',
      phone: '+998 71 203 22 06',
      email: 'info@spbu.uz'
    }
  }
};

const BranchAbout: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchAbout must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`branch-about ${theme}`}>
      <HomeButton />
      <div className="content-container">
        <div className="header">
          <span className="header-icon">🏛️</span>
          <h1>{t.title}</h1>
        </div>
        <div className="team-image-container">
          <img 
            src="/images/branch-team.png" 
            alt="Branch Team" 
            className="team-image"
          />
        </div>
        <div className="about-grid">
          <div className="description-card">
            {t.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="info-cards">
            <div className="info-card">
              <div className="card-header">
                <span className="card-icon">📍</span>
                <h2>{t.address.title}</h2>
              </div>
              <p>{t.address.text}</p>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/place/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B9+%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82+%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D0%BA%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F,+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A8%D0%B0%D1%85%D1%80%D0%B8%D1%81%D0%B0%D0%B1%D0%B7+25,+100060,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.29869,69.2740714,19.92z/data=!4m9!1m2!2m1!1z0LzQtdGC0YDQviDQkNC50LHQtdC6!3m5!1s0x38ae8ada8b793859:0xa2f3efeb3e307c4!8m2!3d41.2984672!4d69.2745076!16s%2Fg%2F11w7pz6ths?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Branch Location"
                />
              </div>
            </div>
            <div className="info-card">
              <div className="card-header">
                <h2>{t.contacts.title}</h2>
              </div>
              <div className="contact-links">
                <a href={`tel:${t.contacts.phone}`} className="contact-link">
                  <span className="contact-icon">📞</span>
                  {t.contacts.phone}
                </a>
                <a href={`mailto:${t.contacts.email}`} className="contact-link">
                  <span className="contact-icon">✉️</span>
                  {t.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchAbout;
