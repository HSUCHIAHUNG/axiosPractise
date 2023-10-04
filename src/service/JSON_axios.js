import axios from 'axios';
// import { Swal } from '../plugins/swal';

/* ------------- 此api為Router更新頁面時使用 --------------- */

// 創建axios實例並給定預設網址
const JSON_axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

JSON_axios.interceptors.request.use(
  (config) => {
    const { headers, ...configSetting } = config;

    return { ...configSetting, headers };
  },
  (error) => Promise.reject(error),
);

// 接收response
JSON_axios.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    // 回傳結果
    return {
      status, data, ...response,
    };
  },

  // 如果使用者登入驗證沒有通過就會進到error函式
  (error) => {
    const { response = {} } = error;
    const {
      status, statusText: message,
    } = response;

    return Promise.resolve({
      status, message, error,
    });
  },
);

export { JSON_axios };
