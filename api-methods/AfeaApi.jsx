import axios from "axios";
import apiConfig from "./ApiConfig";
import axiosClient from "./AxiosClient";

const afeaApi={
    getAllBlogs:(limit,start,order_by,order_type,search)=>{
        const url=`/post/?limit=${limit}&start=${start}&order_by=${order_by}&order_type=${order_type}&${search}'`;
        return axiosClient.get(url);
    }

}
export default afeaApi;