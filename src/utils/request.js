// 封装axios 请求
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net'
})

export default request
