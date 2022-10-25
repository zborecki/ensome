import axios from 'axios';

const { REACT_APP_DATABASE_BASE_URL } = process.env;

export default axios.create({
  baseURL: REACT_APP_DATABASE_BASE_URL
});
