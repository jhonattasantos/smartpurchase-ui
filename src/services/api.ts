import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.smartpurchase.com/api', // Exemplo de URL base
});

export default api;
