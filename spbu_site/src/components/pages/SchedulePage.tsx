import React, { useState, useEffect } from 'react';
import Schedule from '../shared/Schedule';
import { getGroups } from '../../utils/api';
import './SchedulePage.scss';

interface Group {
  id: number;
  name: string;
}

const SchedulePage: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const response = await getGroups();
        setGroups(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching groups:', err);
        setError('Не удалось загрузить группы. Пожалуйста, попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchGroups();
  }, []);

  return (
    <div className="schedule-page">
      <div className="schedule-page-header">
        <h1>Расписание занятий</h1>
        <p className="schedule-page-description">
          Выберите группу, чтобы увидеть расписание занятий
        </p>
      </div>
      
      <div className="schedule-filter">
        <div className="group-selector">
          <h2>Выберите группу</h2>
          {loading ? (
            <div className="loading-message">Загрузка групп...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="group-select-container">
              <select 
                id="group-select"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="group-select"
              >
                <option value="">-- Выберите группу --</option>
                {groups.map(group => (
                  <option key={group.id} value={group.id.toString()}>{group.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      
      {selectedGroup ? (
        <div className="schedule-container">
          <Schedule group={selectedGroup} />
        </div>
      ) : (
        <div className="no-group-selected">
          <p>Пожалуйста, выберите группу для просмотра расписания</p>
        </div>
      )}
    </div>
  );
};

export default SchedulePage;
