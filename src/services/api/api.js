import * as axios from 'axios';

const baseURL = 'http://localhost:5000/api';

export const authApi = {
  postRegisterData(data) {
    return axios.post(`${baseURL}/auth/register`, { ...data }).then(response => response.data);
  },
  postLoginData(data) {
    return axios.post(`${baseURL}/auth/login`, { ...data }).then(response => response.data);
  },
  getProfileData() {
    return axios.get(`${baseURL}/auth/profile`, {
      headers: { 'Authorization': localStorage.token }
    }).then(response => response.data);
  },
};