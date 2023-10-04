import axios from 'axios';
// import { Swal } from '../plugins/swal';

/* ------------- 此api為Router更新頁面時使用 --------------- */

// 創建axios實例並給定預設網址
const F2E_axios = axios.create({
  baseURL: 'https://challenge.thef2e.com/api',
});

F2E_axios.interceptors.request.use(
  (config) => {
    const { headers, ...configSetting } = config;
    headers.Authorization = 'Bearer UxJuwbU7imojAcvH3Bm1TwnbYk3IIkY2iD4zsuglzy5DmeHKO8fYCLUZrtSb';

    return { ...configSetting, headers };
  },
  (error) => Promise.reject(error),
);

// 接收response
F2E_axios.interceptors.response.use(
  (response) => {
  // data => 使用者資訊跟Token & status => http的status code
    const { status, data: respData = {} } = response;
    const { items, success, room } = respData;
    // 回傳結果
    return {
      items, success, status, room, ...response,
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

export { F2E_axios };
