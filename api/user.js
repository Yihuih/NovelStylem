import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const userApi = axios.create({
  baseURL: 'http://127.0.0.1:5000/user', // 设置你的基本URL
  timeout: 3000, // 设置请求超时时间（单位：毫秒）
});

// 请求拦截器
userApi.interceptors.request.use(
  (config) => {
    // 可以在发送请求之前做一些操作，例如添加 token、修改请求头等


    // 注册账号的时候生成并上传uuid
    if(config.url==='/register'){
    // 生成uuid
    const uuid=uuidv4()
      config.data={...config.data,uuid}
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
userApi.interceptors.response.use(
  (response) => {
    // 可以在处理响应数据之前做一些操作
    return response.data;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default userApi;
