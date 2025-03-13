import React from 'react';
import './History.scss';

const History: React.FC = () => {
  return (
    <div className="history-page">
      <div className="history-container">
        <h1 className="history-title">История СПбГУ</h1>
        
        <section className="history-section">
          <h2>Основание университета</h2>
          <p>
            Санкт-Петербургский государственный университет был основан 28 января (8 февраля) 1724 года
            указом Петра I. Он является первым университетом России и одним из старейших научных центров страны.
          </p>
        </section>

        <section className="history-section">
          <h2>Важные вехи</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1724</div>
              <div className="timeline-content">
                <h3>Основание Академического университета</h3>
                <p>Создание первого в России университета при Академии наук в Санкт-Петербурге.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1819</div>
              <div className="timeline-content">
                <h3>Реорганизация в Санкт-Петербургский университет</h3>
                <p>Преобразование Главного педагогического института в Санкт-Петербургский университет.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1821</div>
              <div className="timeline-content">
                <h3>Переезд на Васильевский остров</h3>
                <p>Университет переезжает в историческое здание Двенадцати коллегий.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1918</div>
              <div className="timeline-content">
                <h3>Советский период</h3>
                <p>Начало нового этапа в истории университета после Октябрьской революции.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1989</div>
              <div className="timeline-content">
                <h3>Возвращение исторического названия</h3>
                <p>Университету возвращено историческое название - Санкт-Петербургский государственный университет.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="history-section">
          <h2>Знаменитые выпускники</h2>
          <div className="alumni-grid">
            <div className="alumni-item">
              <h3>Наука</h3>
              <ul>
                <li>Д.И. Менделеев - создатель периодической системы химических элементов</li>
                <li>И.П. Павлов - первый российский нобелевский лауреат</li>
                <li>Л.В. Канторович - лауреат Нобелевской премии по экономике</li>
              </ul>
            </div>
            <div className="alumni-item">
              <h3>Культура и искусство</h3>
              <ul>
                <li>И.А. Бродский - лауреат Нобелевской премии по литературе</li>
                <li>И.С. Тургенев - писатель, поэт, публицист</li>
                <li>А.А. Блок - поэт Серебряного века</li>
              </ul>
            </div>
            <div className="alumni-item">
              <h3>Государственные деятели</h3>
              <ul>
                <li>В.И. Ленин - революционер, создатель первого в мире социалистического государства</li>
                <li>Б.В. Штюрмер - председатель Совета министров Российской империи</li>
                <li>А.Ф. Керенский - министр-председатель Временного правительства</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="history-section">
          <h2>Университет сегодня</h2>
          <p>
            Сегодня СПбГУ - это современный научно-образовательный центр, один из ведущих классических 
            университетов России. Университет продолжает развиваться, сохраняя традиции и внедряя инновации 
            в образовательный процесс.
          </p>
        </section>
      </div>
    </div>
  );
};

export default History;
