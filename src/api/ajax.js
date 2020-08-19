import axios from 'axios'

const ajax = axios.create({ //  http://192.168.0.59:8065/api/HrApiWeb   // https://api.jobyes.com/api/HrApiWeb
  baseURL:'/api',   
  timeout: 15000,  
  withCredentials: true
})

ajax.interceptors.response.use(
  response => {
    const res = response
    if (res.status != 200) {  //请求不正确
      return Promise.reject(new Error(res.status))  //改变promise状态
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) 
    return Promise.reject(error)
  }
)
export default ajax  



s









