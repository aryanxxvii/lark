import axios from 'axios';
import config from '../config';

const auth = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = async (email, password) => {
  const response = await auth.post('/auth/login', { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (email, password) => {
  const response = await auth.post('/auth/register', { email, password });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export default auth; 