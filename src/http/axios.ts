/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const service = axios.create({
  timeout: 60 * 1000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    Promise.reject(error)
  }
)

export function Get<T>(url: string, params: T): Promise<any> {
  return new Promise((resolve, reject) => {
    service({
      method: 'get',
      url,
      params,
      responseType: 'json'
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function Post<T>(url: string, params: T): Promise<any> {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url,
      data: params,
      withCredentials: true
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
