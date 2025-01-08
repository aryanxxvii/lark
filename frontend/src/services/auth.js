import axios from 'axios';
import config from '../config';

const auth = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export const login = async (email, password) => {
  const formData = new URLSearchParams();
  formData.append('username', email);  // OAuth2 expects 'username' field
  formData.append('password', password);
  
  const response = await auth.post('/auth/login', formData);
  localStorage.setItem('token', response.data.access_token);
  return response.data;
};

export const register = async (email, password) => {
  // For register, we still use JSON
  const response = await auth.post('/auth/register', 
    { email, password },
    { headers: { 'Content-Type': 'application/json' } }
  );
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export default auth; 