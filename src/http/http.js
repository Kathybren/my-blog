import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 50000
let baseURL = process.env.REACT_APP_API;

// http请求拦截器
axios.interceptors.request.use(config => {
  if (config.method === "POST") config.body = qs.stringify(config.body);
  // 添加请求头
  // config.headers['Authorization'] = localStorage.getItem('Authorization')
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截
axios.interceptors.response.use(response => {

  // 拦截后端返回code,异常处理
  // 后端请求code 枚举值
  // 200     正常访问
  // 400     无效或错误的参数
  // 401     需要提供凭证
  // 403     无权限访问
  // 500     服务器内部错误
  return response.data;
}, error => {
  // 错误处理
  return Promise.reject(error)
})
export default axios
