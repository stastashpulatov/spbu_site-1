import React from 'react';
import './Library.scss';

const Library: React.FC = () => {
  const handleLibraryClick = () => {
    window.open('https://library.spbu.ru/ru/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="library-page">
      <div className="hero-section">
        <h1>Научная библиотека имени М. Горького</h1>
        <p className="subtitle">Одна из крупнейших университетских библиотек России</p>
      </div>

      <div className="content-section">
        <div className="info-card">
          <h2>О библиотеке</h2>
          <p>
            Научная библиотека им. М. Горького СПбГУ — одна из старейших и крупнейших библиотек России. 
            Основанная в 1783 году она прошла долгий путь развития и сегодня представляет собой современный 
            информационный центр, обеспечивающий доступ к знаниям и информационным ресурсам для студентов, 
            преподавателей и исследователей университета.
          </p>
        </div>

        <div className="resources-section">
          <h2>Ресурсы и возможности</h2>
          <div className="resources-grid">
            <div className="resource-item">
              <h3>Электронные ресурсы</h3>
              <p>Доступ к электронным книгам, журналам и базам данных</p>
            </div>
            <div className="resource-item">
              <h3>Читальные залы</h3>
              <p>Комфортные пространства для работы и обучения</p>
            </div>
            <div className="resource-item">
              <h3>Редкие издания</h3>
              <p>Коллекция уникальных и исторических материалов</p>
            </div>
            <div className="resource-item">
              <h3>Онлайн-каталог</h3>
              <p>Удобный поиск по всем ресурсам библиотеки</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Перейти на сайт библиотеки</h2>
          <p>
            Для получения полной информации о работе библиотеки, доступа к каталогу 
            и электронным ресурсам перейдите на официальный сайт:
          </p>
          <button onClick={handleLibraryClick} className="library-button">
            Открыть сайт библиотеки
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
