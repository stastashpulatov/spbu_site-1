import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getNews, 
  createNews, 
  updateNews, 
  deleteNews,
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule
} from '../../utils/api';
import './AdminDashboard.scss';

type Tab = 'news' | 'schedule';

interface NewsItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  description: string;
  description_uz: string;
  description_en: string;
  image: string | null;
  publication_date: string;
  is_visible: boolean;
}

interface ScheduleItem {
  id: number;
  title: string;
  title_uz: string;
  title_en: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
  location: string;
  teacher: string;
  group: string;
  is_visible: boolean;
}

interface FormData {
  [key: string]: any;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('news');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<FormData>({});
  
  const navigate = useNavigate();

  const dayNames: Record<string, string> = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
  };
  
  // Predefined groups
  const groups = [
    'Группа 1',
    'Группа 2',
    'Группа 3',
    'Группа 4',
    'Группа 5',
  ];

  useEffect(() => {
    if (activeTab === 'news') {
      fetchNews();
    } else if (activeTab === 'schedule') {
      fetchSchedule();
    }
  }, [activeTab]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await getNews();
      setNewsItems(response.data.results);
      setError(null);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Не удалось загрузить новости');
    } finally {
      setLoading(false);
    }
  };

  const fetchSchedule = async () => {
    try {
      setLoading(true);
      const response = await getSchedule();
      setScheduleItems(response.data.results);
      setError(null);
    } catch (err) {
      console.error('Error fetching schedule:', err);
      setError('Не удалось загрузить расписание');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleAddItem = () => {
    setEditingItem(null);
    setFormData({});
    if (activeTab === 'news') {
      setFormData({
        title: '',
        title_uz: '',
        title_en: '',
        description: '',
        description_uz: '',
        description_en: '',
        is_visible: true
      });
    } else if (activeTab === 'schedule') {
      setFormData({
        title: '',
        title_uz: '',
        title_en: '',
        day_of_week: 'monday',
        start_time: '09:00',
        end_time: '10:30',
        location: '',
        teacher: '',
        group: '',
        is_visible: true
      });
    }
    setShowForm(true);
  };

  const handleEditItem = (item: any) => {
    setEditingItem(item);
    setFormData({ ...item });
    setShowForm(true);
  };

  const handleDeleteItem = async (id: number) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот элемент?')) {
      return;
    }
    
    try {
      setLoading(true);
      if (activeTab === 'news') {
        await deleteNews(id);
        setNewsItems(newsItems.filter(item => item.id !== id));
      } else if (activeTab === 'schedule') {
        await deleteSchedule(id);
        setScheduleItems(scheduleItems.filter(item => item.id !== id));
      }
    } catch (err) {
      console.error('Error deleting item:', err);
      setError('Не удалось удалить элемент');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const dataToSubmit = { ...formData };
      
      // Handle new group creation
      if (activeTab === 'schedule' && formData.group === 'new' && formData.new_group) {
        dataToSubmit.group = formData.new_group;
        delete dataToSubmit.new_group;
      }
      
      if (editingItem) {
        if (activeTab === 'news') {
          await updateNews(editingItem.id, dataToSubmit);
          await fetchNews();
        } else if (activeTab === 'schedule') {
          await updateSchedule(editingItem.id, dataToSubmit);
          await fetchSchedule();
        }
      } else {
        if (activeTab === 'news') {
          await createNews(dataToSubmit);
          await fetchNews();
        } else if (activeTab === 'schedule') {
          await createSchedule(dataToSubmit);
          await fetchSchedule();
        }
      }
      
      setShowForm(false);
      setFormData({});
      setEditingItem(null);
    } catch (err) {
      console.error('Error saving item:', err);
      setError('Не удалось сохранить данные');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderNewsForm = () => (
    <form onSubmit={handleFormSubmit} className="admin-form">
      <h3>{editingItem ? 'Редактировать новость' : 'Добавить новость'}</h3>
      
      <div className="form-group">
        <label htmlFor="title">Заголовок</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="title_uz">Заголовок на узбекском</label>
        <input
          type="text"
          id="title_uz"
          name="title_uz"
          value={formData.title_uz || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="title_en">Заголовок на английском</label>
        <input
          type="text"
          id="title_en"
          name="title_en"
          value={formData.title_en || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleFormChange}
          required
          rows={5}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description_uz">Описание на узбекском</label>
        <textarea
          id="description_uz"
          name="description_uz"
          value={formData.description_uz || ''}
          onChange={handleFormChange}
          required
          rows={5}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description_en">Описание на английском</label>
        <textarea
          id="description_en"
          name="description_en"
          value={formData.description_en || ''}
          onChange={handleFormChange}
          required
          rows={5}
        />
      </div>
      
      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="is_visible"
            checked={formData.is_visible || false}
            onChange={(e) => setFormData({ ...formData, is_visible: e.target.checked })}
          />
          Видимость
        </label>
      </div>
      
      <div className="form-actions">
        <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>
          Отмена
        </button>
        <button type="submit" className="save-button" disabled={loading}>
          {loading ? 'Сохранение...' : 'Сохранить'}
        </button>
      </div>
    </form>
  );

  const renderScheduleForm = () => (
    <form onSubmit={handleFormSubmit} className="admin-form">
      <h3>{editingItem ? 'Редактировать расписание' : 'Добавить расписание'}</h3>
      
      <div className="form-group">
        <label htmlFor="title">Название предмета</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="title_uz">Название предмета на узбекском</label>
        <input
          type="text"
          id="title_uz"
          name="title_uz"
          value={formData.title_uz || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="title_en">Название предмета на английском</label>
        <input
          type="text"
          id="title_en"
          name="title_en"
          value={formData.title_en || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="day_of_week">День недели</label>
        <select
          id="day_of_week"
          name="day_of_week"
          value={formData.day_of_week || 'monday'}
          onChange={handleFormChange}
          required
        >
          {Object.entries(dayNames).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="start_time">Время начала</label>
        <input
          type="time"
          id="start_time"
          name="start_time"
          value={formData.start_time || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="end_time">Время окончания</label>
        <input
          type="time"
          id="end_time"
          name="end_time"
          value={formData.end_time || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="location">Аудитория</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="teacher">Преподаватель</label>
        <input
          type="text"
          id="teacher"
          name="teacher"
          value={formData.teacher || ''}
          onChange={handleFormChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="group">Группа</label>
        <select
          id="group"
          name="group"
          value={formData.group || ''}
          onChange={handleFormChange}
          required
        >
          <option value="">Выберите группу</option>
          {groups.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
          <option value="new">+ Добавить новую группу</option>
        </select>
      </div>
      
      {formData.group === 'new' && (
        <div className="form-group">
          <label htmlFor="new_group">Новая группа</label>
          <input
            type="text"
            id="new_group"
            name="new_group"
            value={formData.new_group || ''}
            onChange={handleFormChange}
            required
            placeholder="Введите название новой группы"
          />
        </div>
      )}
      
      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="is_visible"
            checked={formData.is_visible || false}
            onChange={(e) => setFormData({ ...formData, is_visible: e.target.checked })}
          />
          Видимость
        </label>
      </div>
      
      <div className="form-actions">
        <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>
          Отмена
        </button>
        <button type="submit" className="save-button" disabled={loading}>
          {loading ? 'Сохранение...' : 'Сохранить'}
        </button>
      </div>
    </form>
  );

  const renderNewsList = () => (
    <div className="news-list">
      {newsItems.length === 0 ? (
        <div className="empty-state">Список новостей пуст</div>
      ) : (
        newsItems.map(item => (
          <div key={item.id} className="list-item">
            <div className="list-item-content">
              <h3 className="list-item-title">{item.title}</h3>
              <p className="list-item-date">{formatDate(item.publication_date)}</p>
              <p className="list-item-visibility">
                {item.is_visible ? 'Видимая' : 'Скрытая'}
              </p>
            </div>
            <div className="list-item-actions">
              <button 
                className="edit-button" 
                onClick={() => handleEditItem(item)}
              >
                Редактировать
              </button>
              <button 
                className="delete-button" 
                onClick={() => handleDeleteItem(item.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const renderScheduleList = () => (
    <div className="schedule-list">
      {scheduleItems.length === 0 ? (
        <div className="empty-state">Список расписаний пуст</div>
      ) : (
        scheduleItems.map(item => (
          <div key={item.id} className="list-item">
            <div className="list-item-content">
              <h3 className="list-item-title">{item.title}</h3>
              <p className="list-item-details">
                {dayNames[item.day_of_week]}, {item.start_time.substring(0, 5)}-{item.end_time.substring(0, 5)}
              </p>
              <p className="list-item-details">
                Аудитория: {item.location}, Преподаватель: {item.teacher}
              </p>
              <p className="list-item-details">
                Группа: {item.group}
              </p>
              <p className="list-item-visibility">
                {item.is_visible ? 'Видимое' : 'Скрытое'}
              </p>
            </div>
            <div className="list-item-actions">
              <button 
                className="edit-button" 
                onClick={() => handleEditItem(item)}
              >
                Редактировать
              </button>
              <button 
                className="delete-button" 
                onClick={() => handleDeleteItem(item.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );

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

      {error && <div className="error-message">{error}</div>}

      <div className="dashboard-content">
        {showForm ? (
          activeTab === 'news' ? renderNewsForm() : renderScheduleForm()
        ) : (
          <>
            <div className="section-header">
              <h2>Управление {activeTab === 'news' ? 'новостями' : 'расписанием'}</h2>
              <button className="add-button" onClick={handleAddItem}>
                Добавить {activeTab === 'news' ? 'новость' : 'расписание'}
              </button>
            </div>
            
            {loading ? (
              <div className="loading-state">Загрузка...</div>
            ) : (
              activeTab === 'news' ? renderNewsList() : renderScheduleList()
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
