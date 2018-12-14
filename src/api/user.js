import http from '../http/http'

// 登录
export function login(data){
  return http.post('/auth/login',data)
}