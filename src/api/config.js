import axios from 'axios'

const domain = 'https://jsonplaceholder.typicode.com/'
const baseURL = `${domain}`;

export const json = axios.create({
    baseURL,
    headers:{
        'Content-type': 'application/json'
    }
});