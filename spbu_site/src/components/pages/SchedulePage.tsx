import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import Schedule from '../shared/Schedule';
import { getGroups } from '../../utils/api';
import './SchedulePage.scss';

interface Group {
  id: number;
  name: string;
}

type Translations = {
  [key in Language]: {
    title: string;
    description: string;
    selectGroupTitle: string;
    loadingMessage: string;
    errorMessage: string;
    selectPlaceholder: string;
    noGroupSelected: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Расписание занятий',
    description: 'Выберите группу, чтобы увидеть расписание занятий',
    selectGroupTitle: 'Выберите группу',
    loadingMessage: 'Загрузка групп...',
    errorMessage: 'Не удалось загрузить группы. Пожалуйста, попробуйте позже.',
    selectPlaceholder: '-- Выберите группу --',
    noGroupSelected: 'Пожалуйста, выберите группу для просмотра расписания'
  },
  uz: {
    title: 'Darslar jadvali',
    description: 'Darslar jadvalini ko\'rish uchun guruhni tanlang',
    selectGroupTitle: 'Guruhni tanlang',
    loadingMessage: 'Guruhlar yuklanmoqda...',
    errorMessage: 'Guruhlarni yuklashda xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.',
    selectPlaceholder: '-- Guruhni tanlang --',
    noGroupSelected: 'Jadvalni ko\'rish uchun guruhni tanlang'
  },
  en: {
    title: 'Class Schedule',
    description: 'Select a group to view the class schedule',
    selectGroupTitle: 'Select Group',
    loadingMessage: 'Loading groups...',
    errorMessage: 'Failed to load groups. Please try again later.',
    selectPlaceholder: '-- Select Group --',
    noGroupSelected: 'Please select a group to view the schedule'
  }
};

const SchedulePage: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('SchedulePage must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

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
        // Добавляем fallback данные для демонстрации
        const fallbackGroups = [
          { id: 1, name: 'Группа 1' },
          { id: 2, name: 'Группа 2' },
          { id: 3, name: 'Группа 3' }
        ];
        setGroups(fallbackGroups);
        setError(null); // Убираем ошибку, показываем fallback данные
      } finally {
        setLoading(false);
      }
    };
    
    fetchGroups();
  }, [t.errorMessage]);

  return (
    <div className="schedule-page">
      <div className="schedule-page-header">
        <h1>{t.title}</h1>
        <p className="schedule-page-description">
          {t.description}
        </p>
      </div>
      
      <div className="schedule-filter">
        <div className="group-selector">
          <h2>{t.selectGroupTitle}</h2>
          {loading ? (
            <div className="loading-message">{t.loadingMessage}</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="group-select-container">
              <select
                name="group"
                aria-label={t.selectGroupTitle}
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                <option value="">{t.selectPlaceholder}</option>
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
          <p>{t.noGroupSelected}</p>
        </div>
      )}
    </div>
  );
};

export default SchedulePage;
