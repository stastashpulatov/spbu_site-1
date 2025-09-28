import React from 'react';
import './BranchEmployees.scss';

const BranchEmployees: React.FC = () => {
  return (
    <div className="branch-employees">
      <div className="content-container">
        <div className="main-header">
                    <span className="main-header-icon">�‍🏫</span>
          <h1 className="main-title">Педагогический состав</h1>
        </div>

        <div className="info-table-container">
          <h2 className="section-title">Информация о составе педагогических работников образовательных программ</h2>
          <ul className="programs-scan-list">
            <li className="group-title">02.03.02 фундаментальная информатика и информационные технологии</li>
            <li className="program-item"><a href="https://spbu.ru/sveden/employees/all?programm=7802" className="program-link">СВ.7802.* Программирование и информационные технологии</a></li>

            <li className="group-title">38.03.01 Экономика</li>
            <li className="program-item"><a href="https://spbu.ru/sveden/employees/all?programm=7800" className="program-link">СВ.7800.* Международный бизнес в цифровой экономике</a></li>

            <li className="group-title">38.04.01 Экономика</li>
            <li className="program-item"><a href="https://spbu.ru/sveden/employees/all?programm=7804" className="program-link">ВМ.7804.* Международное предпринимательство в цифровой экономике</a></li>

            <li className="group-title">40.04.01 Юриспруденция</li>
            <li className="program-item"><a href="https://spbu.ru/sveden/employees/all?programm=7801" className="program-link">ВМ.7801.* Международное частное право</a></li>

            <li className="group-title">58.04.01 Востоковедение и африканистика</li>
            <li className="program-item"><a href="https://spbu.ru/sveden/employees/all?programm=7803" className="program-link">ВМ.7803.* Современный Китай: экономика, политика, общество (с изучением китайского языка)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BranchEmployees;