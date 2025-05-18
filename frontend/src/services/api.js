import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getApiKeys = async () => {
  const response = await api.get('/api-keys');
  return response.data;
};

export const createApiKey = async () => {
  const response = await api.post('/api-keys');
  return response.data;
};

export const deleteApiKey = async (keyId) => {
  await api.delete(`/api-keys/${keyId}`);
};

export const getApiCalls = async () => {
  const response = await api.get('/analytics');
  return response.data;
};

export const testLarkAPI = async (apiKey, audioData) => {
  // Create a new axios instance without the global interceptor to avoid duplicate auth headers
  const tempAxios = axios.create({
    baseURL: config.apiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const response = await tempAxios.post(
    '/lark',
    { data: audioData },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data;
};

export default api;