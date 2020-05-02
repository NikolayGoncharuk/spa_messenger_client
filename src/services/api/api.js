import * as axios from 'axios';

const baseURL = 'http://localhost:5000/api';

const requestParams = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
};

export const authApi = {
  async postRegister(data) {
    const response = await axios.post(`${baseURL}/auth/register`, { ...data });
    return response.data;
  },
  async postLogin(data) {
    const response = await axios.post(`${baseURL}/auth/login`, { ...data });
    return response.data;
  },
};

export const profileApi = {
  async getProfile() {
    const response = await axios.get(`${baseURL}/profile`, requestParams());
    return response.data;
  },
};

export const usersApi = {
  async getUsers() {
    const response = await axios.get(`${baseURL}/users`, requestParams());
    return response.data;
  },
};

export const chatApi = {
  async getDialogs() {
    const response = await axios.get(`${baseURL}/chat/dialogs`, requestParams());
    return response.data;
  },
};