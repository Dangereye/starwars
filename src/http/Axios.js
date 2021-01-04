import Axios from 'axios';
export const getData = (params) => {
  Axios.get(`https://swapi.dev/api/${params}`);
};
