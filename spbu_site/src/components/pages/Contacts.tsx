import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './Contacts.scss';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    address: string;
    addressText: string;
    institutionName: string;
    email: string;
    phones: string;
    howToFind: string;
    mapTitle: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Контакты',
    subtitle: 'Свяжитесь с нами для получения дополнительной информации',
    address: 'Адрес',
    addressText: '100060, Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16 (метро: Айбек)',
    institutionName: 'Филиал Санкт-Петербургского государственного университета в городе Ташкенте',
    email: 'E-mail',
    phones: 'Телефоны',
    howToFind: 'Как нас найти',
    mapTitle: 'Карта расположения филиала СПбГУ в Ташкенте'
  },
  uz: {
    title: 'Aloqa',
    subtitle: 'Qo\'shimcha ma\'lumot olish uchun biz bilan bog\'laning',
    address: 'Manzil',
    addressText: '100060, O\'zbekiston Respublikasi, Toshkent shahri, Mirabad tumani, Shahrisabz ko\'chasi, 16-uy (metro: Oybek)',
    institutionName: 'Toshkent shahridagi Sankt-Peterburg davlat universiteti filiali',
    email: 'E-mail',
    phones: 'Telefonlar',
    howToFind: 'Bizni qanday topish mumkin',
    mapTitle: 'Toshkentdagi SPbDU filiali joylashuv xaritasi'
  },
  en: {
    title: 'Contacts',
    subtitle: 'Contact us for additional information',
    address: 'Address',
    addressText: '100060, Republic of Uzbekistan, Tashkent, Mirabad district, Shahrisabz street, 16 (metro: Oybek)',
    institutionName: 'Branch of Saint Petersburg State University in Tashkent',
    email: 'E-mail',
    phones: 'Phones',
    howToFind: 'How to find us',
    mapTitle: 'Map of SPbU branch location in Tashkent'
  }
};

const Contacts: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('Contacts must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="contacts-page">
      <div className="hero-section">
        <h1 className="page-title">{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
      </div>
      
      <div className="container">
        <div className="contacts-content">
          <div className="contact-info-section">
            <div className="contact-image-container">
              <img 
                src="/images/building.png" 
                alt={t.mapTitle}
                className="contact-image"
              />
            </div>
            
            <div className="contact-details">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>{t.address}</h3>
                  <p>{t.addressText}</p>
                  <p className="institution-name">{t.institutionName}</p>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>{t.email}</h3>
                  <p><a href="mailto:info@spbu.uz" className="contact-link">info@spbu.uz</a></p>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0013 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2136 21.3523 21.4016C21.1473 21.5896 20.9056 21.7325 20.6407 21.8207C20.3758 21.9089 20.0937 21.9406 19.81 21.913C16.7428 21.4381 13.787 20.5344 11.19 19.22C8.77382 18.0574 6.72533 16.3019 5.20999 14.1337C3.69464 11.9656 2.75491 9.44629 2.46999 6.79999C2.44178 6.51557 2.47325 6.23266 2.56162 5.96678C2.64999 5.7009 2.79326 5.45812 2.98167 5.25222C3.17008 5.04632 3.39953 4.88191 3.65505 4.76931C3.91057 4.65671 4.18638 4.59861 4.46499 4.59999H7.46499C7.96622 4.59999 8.44652 4.79749 8.79672 5.15169C9.14692 5.50589 9.34499 5.98619 9.34499 6.49999C9.34499 7.61999 9.80499 8.67999 10.625 9.49999C11.445 10.32 12.505 10.78 13.625 10.78C14.1388 10.78 14.6191 10.9781 14.9733 11.3283C15.3275 11.6785 15.5256 12.1588 15.5256 12.66V15.66C15.5256 16.1728 15.3275 16.6531 14.9733 17.0073C14.6191 17.3615 14.1388 17.5596 13.625 17.5596C12.505 17.5596 11.445 18.0196 10.625 18.8396C9.80499 19.6596 9.34499 20.7196 9.34499 21.8396C9.34499 22.3524 9.14692 22.8327 8.79672 23.1869C8.44652 23.5411 7.96622 23.7396 7.46499 23.7396H4.46499C4.18638 23.741 3.91057 23.6829 3.65505 23.5703C3.39953 23.4577 3.17008 23.2933 2.98167 23.0874C2.79326 22.8815 2.64999 22.6387 2.56162 22.3728C2.47325 22.1069 2.44178 21.824 2.46999 21.5396C2.75491 18.8933 3.69464 16.374 5.20999 14.2059C6.72533 12.0377 8.77382 10.2822 11.19 9.11999C13.787 7.80559 16.7428 6.90189 19.81 6.42699C20.0937 6.39939 20.3758 6.43109 20.6407 6.51929C20.9056 6.60749 21.1473 6.75039 21.3523 6.93839C21.5573 7.12639 21.7209 7.35539 21.8325 7.61059C21.9441 7.86579 22.0013 8.14159 22 8.41999V11.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>{t.phones}</h3>
                  <p><a href="tel:+998977214404" className="contact-link">+998 97 721 44 04</a></p>
                  <p><a href="tel:+998903744083" className="contact-link">+998 90 374 40 83</a></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-section">
            <h3 className="map-title">{t.howToFind}</h3>
            <div className="map-container">
              <iframe 
                src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.274471%2C41.298603&mode=search&ol=geo%5Bpoint%5D=69.274449%2C41.298588&poi%5Buri%5D=ymapsbm1%3A%2Forg%3Foid%3D122210742797&source=mapframe&utm_source=mapframe&z=20.8"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
