import { setToken, setTel }  from '@/utils'
import { login } from '@/api/serve'

export default  {
  handLogin ({commit},user) {
    const { loginuser, pwd } = user
    return new Promise((resolve,reject) => {
      login({loginuser,pwd}).then(response => {
        commit('SET_TOKEN', response.data.token); 
        commit('SET_TEL', response.data.token);
        setToken('login-token', response.data.token); //值保存到cookie
        setTel('login-phone', response.data.tel)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}