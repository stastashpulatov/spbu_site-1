import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authorization header for admin requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

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
  let url = '/events/schedule/';
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
  return api.get(`/events/schedule/${id}/`);
};

export const createSchedule = async (scheduleData: any) => {
  return api.post('/events/schedule/', scheduleData);
};

export const updateSchedule = async (id: number, scheduleData: any) => {
  return api.put(`/events/schedule/${id}/`, scheduleData);
};

export const deleteSchedule = async (id: number) => {
  return api.delete(`/events/schedule/${id}/`);
};

// Groups API
export const getGroups = async () => {
  return api.get('/events/schedule/groups/');
};

export default api;
