//存
export function setTel (Key, value) {
  return localStorage.setItem(Key, value)
}
//取
export function getTel (Key) {
  return localStorage.getItem(Key)
}

//存
export function setToken (cToken, value) {
  return localStorage.setItem(cToken, value)
}
//取
export function getToken (cToken) {
  return localStorage.getItem(cToken)
}


