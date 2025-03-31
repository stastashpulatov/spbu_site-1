import React from 'react';
import './Contacts.scss';

const Contacts: React.FC = () => {
  return (
    <div className="contacts">
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
                Мирабадский район, ул. Шахрисабз, д. 34<br />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.086591346607!2d69.2862!3d41.2925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzMzLjAiTiA2OcKwMTcnMTAuMyJF!5e0!3m2!1sru!2s!4v1635000000000!5m2!1sru!2s"
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
