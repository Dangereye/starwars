import axios from 'axios';
export const getData = axios.create({
  baseURL: 'https://swapi.dev/api',
});
