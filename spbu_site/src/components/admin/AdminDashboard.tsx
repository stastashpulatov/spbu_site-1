import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.scss';

type Tab = 'news' | 'schedule';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('news');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Панель администратора</h1>
        <button onClick={handleLogout} className="logout-button">
          Выйти
        </button>
      </div>

      <div className="dashboard-tabs">
        <button
          className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          Новости
        </button>
        <button
          className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          Расписание
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'news' && (
          <div className="news-management">
            <div className="section-header">
              <h2>Управление новостями</h2>
              <button className="add-button">Добавить новость</button>
            </div>
            <div className="news-list">
              {/* TODO: Implement news list */}
              <div className="empty-state">
                Список новостей пуст
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="schedule-management">
            <div className="section-header">
              <h2>Управление расписанием</h2>
              <button className="add-button">Добавить расписание</button>
            </div>
            <div className="schedule-list">
              {/* TODO: Implement schedule list */}
              <div className="empty-state">
                Список расписаний пуст
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
