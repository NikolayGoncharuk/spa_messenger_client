import * as axios from 'axios';

const baseURL = 'http://localhost:5000/api';

export const authApi = {
  async postRegisterData(data) {
    const response = await axios.post(`${baseURL}/auth/register`, { ...data });
    return response.data;
  },
  async postLoginData(data) {
    const response = await axios.post(`${baseURL}/auth/login`, { ...data });
    return response.data;
  },
  async getUserData() {
    const response = await axios.get(`${baseURL}/auth/profile`, {
      headers: { 'Authorization': localStorage.token }
    });
    return response.data;
  },
};

export const usersApi = {
  async getUsers() {
    const response = await axios.get(`${baseURL}/users`, {
      headers: { 'Authorization': localStorage.token }
    });
    return response.data;
  },
};