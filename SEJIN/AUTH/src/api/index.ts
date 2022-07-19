import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: process.env.BACKEND_END_POINT || 'https://www.mecallapi.com/api',
});

export default api;
