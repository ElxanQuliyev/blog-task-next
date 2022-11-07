import axios from "axios";
import queryStirng from 'query-string';
import apiConfig from "./ApiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'x-www-form-urlencoded',
        'X-Auth-Key':`${process.env.ACCESS_TOKEN}`
    },
});

axiosClient.interceptors.request.use(async(config)=> config);

axiosClient.interceptors.response.use((response)=>{
    console.log(response)
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error)=>{
    throw error;
});

export default axiosClient;