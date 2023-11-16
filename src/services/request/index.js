import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

// 使用类来封装，内聚性更强
class ABYRequest {

  constructor(baseURL, timeout = 10000) {
    // 构造函数中的this指向类的实例对象
    this.axiosInstance = axios.create({ baseURL, timeout })

    // 响应拦截
    this.axiosInstance.interceptors.response.use(res => {
      // 成功响应拦截
      return res.data
    }, err => {
      // 失败响应拦截
      return err
    })
  }

  request(config) {
    // 类的方法中的this指向类的实例对象
    return this.axiosInstance.request({ ...config })
  }

  get(config) {
    // 类的方法中的this指向类的实例对象
    return this.axiosInstance.request({ ...config, method: 'get' })
  }

  post(config) {
    // 类的方法中的this指向类的实例对象
    return this.axiosInstance.request({ ...config, method: 'post' })
  }
}

const abyRequest = new ABYRequest(BASE_URL, TIMEOUT)

// 统一暴露
export {
  abyRequest
}

