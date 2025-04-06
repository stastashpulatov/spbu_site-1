import React from 'react';
import HomeButton from '../shared/HomeButton';
import './Contacts.scss';

const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <HomeButton />
      <h1>Контакты</h1>
      <div className="contacts__content">
        <div className="contacts__info">
          <div className="contacts__image">
            <img src="/images/building.png" alt="Здание филиала" />
          </div>
          <div className="contacts__details">
            <div className="contacts__item">
              <h3>Адрес:</h3>
              <p>100060, Республика Узбекистан, г. Ташкент,<br />
                Мирабадский район, ул. Шахрисабз, д. 16<br />
                (метро: Айбек)</p>
              <p>Филиал Санкт-Петербургского<br />
                государственного университета<br />
                в городе Ташкенте</p>
            </div>
            <div className="contacts__item">
              <h3>E-mail:</h3>
              <p><a href="mailto:info@spbu.uz">info@spbu.uz</a></p>
            </div>
            <div className="contacts__item">
              <h3>Телефоны:</h3>
              <p>+998 97 721 44 04, +998 90 374 40 83</p>
            </div>
          </div>
        </div>
        <div className="contacts__map">
          <iframe 
            src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.274471%2C41.298603&mode=search&ol=geo%5Bpoint%5D=69.274449%2C41.298588&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D122210742797&source=mapframe&utm_source=mapframe&z=20.8"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
