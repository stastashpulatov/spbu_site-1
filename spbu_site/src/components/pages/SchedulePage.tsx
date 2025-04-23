import React, { useState } from 'react';
import Schedule from '../shared/Schedule';
import './SchedulePage.scss';

const SchedulePage: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  
  // Sample groups - you can replace this with actual data from your API
  const groups = [
    'Группа 1',
    'Группа 2',
    'Группа 3',
    'Группа 4',
    'Группа 5',
  ];

  return (
    <div className="schedule-page">
      <div className="schedule-page-header">
        <h1>Расписание занятий</h1>
        <p className="schedule-page-description">
          Выберите группу, чтобы увидеть расписание занятий
        </p>
      </div>
      
      <div className="schedule-filter">
        <label htmlFor="group-select">Выберите группу:</label>
        <select 
          id="group-select"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="">Все группы</option>
          {groups.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
      </div>
      
      <div className="schedule-container">
        <Schedule group={selectedGroup} />
      </div>
    </div>
  );
};

export default SchedulePage;
