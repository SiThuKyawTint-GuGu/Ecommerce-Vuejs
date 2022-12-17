import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path : '/HomePage',
    name  : 'HomePage',
    component : () => import ('../views/HomePage.vue')
  },{
    path:'/ShopPage',
    name:'ShopPage',
    component:() => import('../views/ShopPage.vue')
  },{
    path:'/DetailPage/:id',
    name:'DetailPage',
    component:() => import('../views/DetailPage.vue')
  },{
    path:'/CartPage/:id',
    name:'CartPage',
    component:() => import('../views/CartPage.vue')
  },{
    path:'/BlogPage',
    name:'BlogPage',
    component:() => import('../views/BlogPage.vue')
  },{
    path:'/BLogDetail/:id',
    name:'BlogDetail',
    component:() => import('../views/BLogDetail.vue')
  },{
    path:'/AboutPage',
    name:'AboutPage',
    component:() => import('../views/AboutPage.vue')
  },{
    path:'/HotPage',
    name:'HotPage',
    component:() => import('../views/HotPage.vue')
  },{
    path :'/DetailHotitem/:id',
    name:'DetailHotitem',
    component:() => import('../views/DetailHotitem.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
