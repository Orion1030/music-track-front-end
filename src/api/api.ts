import axios from 'axios';
import { apiHost } from '~/constants';
import { message } from "antd";

const api = axios.create({
  baseURL: apiHost,
  maxBodyLength: Infinity,
});

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    if (error.status === 401) {
      localStorage.removeItem('auth');
      window.location.href = '/login';
    } else if (error?.message) message.error(error?.message);
    return Promise.reject(error);
  }
);

export { api };
