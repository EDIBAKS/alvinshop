import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue';
import {auth} from './firebase'
import Admin from './views/Admin.vue';
import ProdDetails from './views/ProdDetails.vue'
import orders from './views/orders.vue';
import LoginForm from './views/LoginForm.vue';
import UserProfile from './components/AdminComponents/UserProfile.vue';
const routes = [

  { path: '/',
     component: Home
     },
  {
    path:'/admin',
    component:Admin
  },
  {
    path:'/productdetails/:id',
    component:ProdDetails
  },
  {
    path:'/orders',
    component:orders
  },
  {
    path:'/login',
    component:LoginForm
  },
  {
    path:'/user',
    component:UserProfile,
    meta:{
      requiresAuth:true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/user')
    return;
  }
  if (to.matched.some(record=>record.meta.requiresAuth) && !auth.currentUser){
next('/login')
return;
  }
  next()
})
export default router