import axios, { AxiosResponse } from 'axios';
import api from './index';

const responseBody = (response: AxiosResponse) => response.data;

const API = {
  signIn: (url: string, body: {}) => {
    api.post(url, body);
  },
};

export default API;
