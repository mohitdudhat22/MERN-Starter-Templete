import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const login = async (email, password) => {
  const response = await axios.post('/api/auth/login', { email, password });
  return response.data;
};

export const register = async (email, password) => {
  const response = await axios.post('/api/auth/register', { email, password });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axios.get('/api/users/profile');
  return response.data;
};
