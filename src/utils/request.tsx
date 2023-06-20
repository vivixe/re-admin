// 请求文件
import axios from 'axios';
import { message } from 'antd';
import { getToken } from './auth';
// import { history } from '../App';
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 5000
});
service.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['Authorization'] = 'Bearer ' + getToken();
        }
        return config;
    }
);
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 20000) {
            message.error(res.message || 'Error');
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // history.push('/login');
            }
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res;
        }
    }
);
export default service;