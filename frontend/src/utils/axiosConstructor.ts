import { Axios } from 'axios';

const token = window.localStorage.getItem('token');
const customAxios = new Axios({
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
    },
});

export default customAxios;
