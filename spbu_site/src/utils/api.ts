import axios from 'axios';

// Используем переменные окружения или значения по умолчанию для определения API URL
const API_HOST = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Если API_HOST уже содержит /api, то не добавляем его снова
const API_URL = API_HOST.includes('/api') ? API_HOST : `${API_HOST}/api`;

// Логируем информацию о текущем URL и API URL
console.log('Current URL:', window.location.href);
console.log('API URL:', API_URL);
console.log('Environment variables:', import.meta.env.VITE_API_URL || 'Не установлено');

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем интерцептор для добавления токена авторизации
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    // Проверяем, что токен не является временным токеном
    if (token && token !== 'temp-token') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Добавляем интерцептор для обработки ответов
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Response Error:', error);
    
    // Если сервер недоступен, показываем сообщение
    if (error.message === 'Network Error') {
      console.error('Backend server is not available. Please check if it\'s running.');
      // Можно добавить глобальное сообщение об ошибке здесь
    }
    
    return Promise.reject(error);
  }
);

// News API
export const getNews = async (page = 1) => {
  try {
    const response = await api.get(`/events/news/?page=${page}`);
    console.log('News API response:', response.data);
    return response;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getNewsById = async (id: number) => {
  try {
    const response = await api.get(`/events/news/${id}/`);
    console.log('News by ID API response:', response.data);
    return response;
  } catch (error) {
    console.error('Error fetching news by ID:', error);
    throw error;
  }
};

export const createNews = async (newsData: any) => {
  try {
    // Создаем FormData для загрузки изображений
    const formData = new FormData();
    
    // Добавляем текстовые поля
    Object.keys(newsData).forEach(key => {
      if (key === 'image' && newsData[key] instanceof File) {
        formData.append(key, newsData[key]);
      } else if (key !== 'image') {
        formData.append(key, newsData[key]);
      }
    });
    
    const response = await api.post('/events/news/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Create news API response:', response.data);
    return response;
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

export const updateNews = async (id: number, newsData: any) => {
  try {
    // Создаем FormData для загрузки изображений
    const formData = new FormData();
    
    // Добавляем текстовые поля
    Object.keys(newsData).forEach(key => {
      if (key === 'image' && newsData[key] instanceof File) {
        formData.append(key, newsData[key]);
      } else if (key !== 'image') {
        formData.append(key, newsData[key]);
      }
    });
    
    const response = await api.put(`/events/news/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Update news API response:', response.data);
    return response;
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
};

export const deleteNews = async (id: number) => {
  return api.delete(`/events/news/${id}/`);
};

// Schedule API
export const getSchedule = async (params?: { group?: string; day?: string }) => {
  let url = '/schedule/';
  if (params) {
    const queryParams = new URLSearchParams();
    if (params.group) queryParams.append('group', params.group);
    if (params.day) queryParams.append('day', params.day);
    if (queryParams.toString()) {
      url += `?${queryParams.toString()}`;
    }
  }
  return api.get(url);
};

export const getScheduleById = async (id: number) => {
  return api.get(`/schedule/${id}/`);
};

export const createSchedule = async (scheduleData: any) => {
  return api.post('/schedule/', scheduleData);
};

export const updateSchedule = async (id: number, scheduleData: any) => {
  return api.put(`/schedule/${id}/`, scheduleData);
};

export const deleteSchedule = async (id: number) => {
  return api.delete(`/schedule/${id}/`);
};

// Groups API
export const getGroups = async () => {
  return api.get('/schedule/groups/');
};

// Auth API
export const login = async (username: string, password: string) => {
  return api.post('/user/auth/jwt/create', { username, password });
}
export default api;
