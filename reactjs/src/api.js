import axios from 'axios';


const api = axios.create({
//baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars'
baseURL: 'http://localhost:3333/products'
});

export default api;