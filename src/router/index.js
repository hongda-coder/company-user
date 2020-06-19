import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      component: () => import('../views/home/Home'),
    },
    {
      path: '/home',  // 首页
      component: () => import('../views/home/Home'),
      meta: {navShow: true}
    },
    {
      path: '/manage', // 信息
      component: () => import('../views/manage/Manage'),
      meta: {navShow: true}
    },
    {
      path: '/mine', // 我的
      component: () => import('../views/mine/Mine'),
      meta: {navShow: true}
    },
    {
      path: '/login',  // 首页
      component: () => import('../views/login/Login'), 
    },
    {
      path: '/plan',  // 发布计划
      component: () => import('../views/plan/Plan'), 
    },
    {
      path: '/mine/info',  // 个人信息
      component: () => import('../views/mine/Info'), 
    },
    {
      path: '/execute/details',  // 面试执行
      component: () => import('../views/home/details/ExecuteDetails'), 
    }
  ]
})
