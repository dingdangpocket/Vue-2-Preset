import axios from "axios";
import { Message } from "element-ui";
import router from "@/router/index.js";

//统一拦截请求携带token
axios.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
});

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          Message.error("身份认证失败，请重新登录");
          router.replace("/login");
          break;
        case 404:
          Message.error("资源已丢失");
          break;
        default:
          Message.error("数据库丢失");
          break;
      }
    } else {
      Message.error("服务器错误");
      router.replace("/login");
    }
    return Promise.reject(error);
  }
);
