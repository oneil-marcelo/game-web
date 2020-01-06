import axios from 'axios';

const ws = axios.create({
    baseURL:'http://lab.yeza.com.br/api/v1/'
    // baseURL: 'http://localhost:5000/v1/'
});

export default ws;