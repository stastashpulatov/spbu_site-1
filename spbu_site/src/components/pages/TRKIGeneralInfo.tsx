import React from 'react';
import HomeButton from '../shared/HomeButton';
import './TRKIGeneralInfo.scss';

const TRKIGeneralInfo: React.FC = () => {
  return (
    <div className="trki-general-info">
      <HomeButton />
      <div className="page-container">
        <h1>Общая информация</h1>
        
        <div className="content">
          <div className="text-block">
            <p>
              Приказом Минобрнауки России от 6 июля 2019 года №47 СПбГУ присвоен статус головного центра тестирования иностранных граждан по русскому языку (ТРКИ), и уполномочен на выдачу сертификата государственного образца. Филиал СПбГУ стремится развить сеть центров тестирования, обеспечивающих проведение тестов владения русским языком (ТРКИ) на территории Республики Узбекистан, а также развивать сотрудничество в области (CEFR). Сертификат ТРКИ признается на государственном уровне во многих странах мира, таких как Армения, Турция, Италия, Польша, Румыния, Грузия, Узбекистан и т.д.
            </p>
          </div>

          <div className="text-block">
            <p>
              В филиале Санкт-Петербургского государственного университета в г. Ташкенте ТРКИ проводится еженедельно. На основе указа Президента Республики Узбекистан №УП-5847 от 21.10.2019 г. «Об утверждении стратегии развития системы высшего образования Республики Узбекистан до 2030 года» тестирование проводится на договорной основе.
            </p>
          </div>
          
          <div className="info-box">
            <p>Стоимость прохождения экзамена: <span className="price">950</span></p>
            <p className="note">Оплата производится в узбекских сумах</p>
          </div>

          <div className="contact-box">
            <h3>Справки для регистрации</h3>
            <p>Подробная информация по телефону: <a href="tel:+998909656644" className="phone-link">+998 90 965 66 44</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRKIGeneralInfo;
