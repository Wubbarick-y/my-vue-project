import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/calculator",
    component:() => import('@/views/CalcView.vue')
   },
  {
    path:"/lorem1",
    component:()=> import('@/views/LoremView.vue')
  }
  ]
})

export default router
