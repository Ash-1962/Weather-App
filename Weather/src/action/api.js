import axios from 'axios';

var api = axios.create({
    baseURL: "https://apps.org.in/weather",
    responseType: 'json',
    responseEncoding: 'utf8',
});

export default api;