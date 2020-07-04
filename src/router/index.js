import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login',
      component: () => import('../views/login/Login'),
    },
    {
      path: '/home',  // 首页
      component: () => import('../views/home/Home'),
      meta: {navShow: true}
    },
    {
      path: '/manage', // 职位管理
      component: () => import('../views/manage/Manage'),
      meta: {navShow: true}
    },
    {
      path: '/mine', // 我的
      component: () => import('../views/mine/Mine'),
      meta: {navShow: true}
    },
    {
      path: '/login',  // 登录
      component: () => import('../views/login/Login'), 
    },
    {
      path: '/company/auth',  // 公司认证
      component: () => import('../views/login/next/CompanyInfo'), 
    },
    {
      path: '/company/apti',  // 资质认证
      component: () => import('../views/login/next/Aptitude'), 
    },
    {
      path: '/company/false',  // 审核不通过
      component: () => import('../views/mine/check/CheckNo'), 
    },
    {
      path: '/execute/details',  // 面试执行
      component: () => import('../views/home/details/ExecuteDetails'), 
    },
    {
      path: '/plan/details',  // 面试计划
      component: () => import('../views/home/details/PlanDetails'), 
    },
    {
      path: '/copy/name',  // 录入名单
      component: () => import('../views/home/children/CopyName'), 
    },
    {
      path: '/plan',  // 发布计划
      component: () => import('../views/home/nav/Plan'), 
    },
    {
      path: '/talents',  // 人才库
      component: () => import('../views/home/nav/Talents'), 
    },
    {
      path: '/create',  // 创建职位
      component: () => import('../views/home/nav/Create'), 
    },
    {
      path: '/job/details',  // 职位详情
      component: () => import('../views/manage/details/JobDetails'), 
    },
    {
      path: '/mine/info',  // 个人信息
      component: () => import('../views/mine/edit/Info'), 
    },
    {
      path: '/company/info',  // 公司信息
      component: () => import('../views/mine/edit/CompanyInfo'), 
    },
    {
      path: '/company/face',  // 企业风采
      component: () => import('../views/mine/edit/Face'), 
    },
    {
      path: '/company/weal',  // 福利标签
      component: () => import('../views/mine/edit/Weal'), 
    },
    {
      path: '/company/edit',  // 修改企业信息
      component: () => import('../views/mine/edit/EditCompany'), 
    },
    {
      path: '/mine/code',  // 二维码
      component: () => import('../views/mine/edit/Code'), 
    },
    {
      path: '/place/category',  // 职能分类
      component: () => import('../components/common/Place.vue'), 
    }
  ]
})
