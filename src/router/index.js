import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/components/Home'

Vue.use(Router)
export default new Router({
  routes: [
  {
      path: '/',
      name: 'Login',
      component: Login,
      children: [
        {
          path:'/',
          name:'Register',
          component:Register
        }
      ]
    },
    {
      path: '/',
      name: 'Header',
      component: Header,
      children: [
        {
          path: '/',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path:'/',
      name:'Footer',
      component:Footer
    },
    {
      path:'/',
      name:'Home',
      component:Home
    }
  ]
})


