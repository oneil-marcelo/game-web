import axios from 'axios';

const ws = axios.create({
    baseURL:'http://drive.yeza.com.br/api/v1/'
    //baseURL: 'http://localhost:5000/api/'
});

export default ws;