
import ajax from './ajax'

// 1、登录请求
export function login(data){  
  return ajax({
      url:'/user/login',
      method:'post',
      data
  })
}

// 2、短信
export function shortCode(data){  
  return ajax({
      url:'/user/check',
      method:'post',
      data
  })
}

// 3、面试计划
export function inviteList(data) {
  return ajax({
    url: '/make/MakeList',
    method: 'post',
    data
  })
}

// 4、职位列表
export function jobList(data) {
  return ajax({
    url: '/job/joblist',
    method: 'post',
    data
  })
}

// 14、职位详情
export function jobDetail(data) {
  return ajax({
    url: '/job/JobSelect',
    method: 'post',
    data
  })
}
