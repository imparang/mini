import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Admin from '../components/Admin.vue'
import Allproducts from '../components/Allproducts.vue'
import AddProdut from '../components/AddProdut.vue'
import Product from '../components/Product.vue'
import Account from '../components/Account.vue'
import Mypage from '../components/Mypage.vue'
import NotFound from '../components/NotFound.vue'

const requireAuth = (to, from, next) => {
  const isAuth = sessionStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product/:pid',
      component: Product
    },
    {
      path: '/mypage',
      component: Mypage,
      beforeEnter: requireAuth
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          name: 'Allproducts',
          path: '/admin/query',
          component: Allproducts
        }
      ]
    },
    {
      path: '/admin/add',
      component: AddProdut
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})

export default router
