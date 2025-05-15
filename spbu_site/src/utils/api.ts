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
    if (token) {
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
  return api.get(`/events/news/?page=${page}`);
};

export const getNewsById = async (id: number) => {
  return api.get(`/events/news/${id}/`);
};

export const createNews = async (newsData: any) => {
  return api.post('/events/news/', newsData);
};

export const updateNews = async (id: number, newsData: any) => {
  return api.put(`/events/news/${id}/`, newsData);
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

export default api;
