import React from 'react';
import './History.scss';

const History: React.FC = () => {
  return (
    <div className="history-page">
      <h1>История</h1>
      <div className="history-hero">
        <img 
          src="/images/image.png" 
          alt="Здание СПбГУ" 
          className="history-image"
        />
      </div>
      <div className="history-year">1724</div>
      <div className="history-content">
        <p>
          СПбГУ — первый университет России. Он был основан по указу императора Петра I, и сегодня Санкт-Петербургский 
          университет — единственный вуз России, отметивший своё 300-летие. За три века истории 
          Университета в нем учились и работали тысячи выдающихся ученых, общественных, государственных и 
          политических деятелей, писателей, художников и музыкантов: Дмитрий Менделеев, Александр Попов, Иван 
          Тургенев, Петр Столыпин, Иван Павлов, Дмитрий Мамин-Сибиряк, Василий Докучаев, Александр Блок, Михаил 
          Врубель, Михаил Глинка, Николай Рерих, Лев Ландау, Леонид Канторович, Владимир Путин, Дмитрий Медведев и 
          другие.
        </p>
        <a 
          href="https://spbu.ru/history" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="details-button"
        >
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default History;
