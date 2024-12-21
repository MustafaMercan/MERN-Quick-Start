import axios from 'axios';
console.log('axios config test')
// import.meta.env.VITE_API_BASE_URL
const ApiClient = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
});

export default ApiClient;