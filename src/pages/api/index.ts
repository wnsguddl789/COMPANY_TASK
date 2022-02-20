import axios from 'axios';

const api = axios.create({
  baseURL: 'https://prap-back.herokuapp.com/api/',
});

export const API = {
  all: () => api.get('all'),
  nft: () => api.get('nft'),
  shooes: () => api.get('shooes'),
};
