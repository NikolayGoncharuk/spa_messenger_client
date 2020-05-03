import * as axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const authApi = {
  async postRegister(data) {
    const response = await axios.post(`/auth/register`, { ...data });
    return response.data;
  },
  async postLogin(data) {
    const response = await axios.post(`/auth/login`, { ...data });
    return response.data;
  },
};

export const profileApi = {
  async getProfile() {
    const response = await axios.get(`/profile`);
    return response.data;
  },
};

export const usersApi = {
  async getUsers() {
    const response = await axios.get(`/users`);
    return response.data;
  },
};

export const chatApi = {
  async getDialogs() {
    const response = await axios.get(`/chat/dialogs`);
    return response.data;
  },
  async postMessage(data) {
    const response = await axios.post(`/chat/message`, { ...data });
    return response.data;
  },
  async getMessages(id) {
    const response = await axios.get(`/chat/messages/query?dialogId=${id}`);
    return response.data;
  },
};