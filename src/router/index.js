import { createRouter, createWebHistory } from 'vue-router'

const routes=[
  {
    path: '/',
    redirect:'/login'
  },
  {
    // 用户登录界面
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LoginView.vue')
  },
  {
    // 注册界面
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    // 主页
    path: '/index',
    name: 'index',
    component: () => import('../views/IndexView.vue')
  },
  {
    // 个人中心页面
    path: '/personalCenter',
    name: 'personalCenter',
    component: () => import('../views/PersonalPage.vue')
  },









// 后台系统的路由
  {
     // 后台主页
     path: '/backgroundindex',
     name: 'backgroundindex',
     component: () => import('../views/backgroundViews/BackgroundIndex.vue')
  },
  {
    // 匹配其他路由 404
    path: '/:catchAll(.*)',
    name: 'notfind',
    component: () => import('../views/NotFount.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
