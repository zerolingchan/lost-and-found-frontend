import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home/Home'
import AddMessages from '@/components/Add/AddMessages'
import LostThings from '@/components/List/LostThings'
import FindThings from '@/components/List/FindThings'
import FindPeople from '@/components/List/FindPeople'
import AdminCenter from '@/components/Center/AdminCenter'
import AddNotice from '@/components/Add/AddNotice'
import Article from '@/components/Article/Article'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/AddMessages',
      name:'AddMessages',
      component:AddMessages,
    },
    {
      path:'/LostThings',
      name:'LostThings',
      component:LostThings,
     },
    {
      path:'/FindThings',
      name:'FindThings',
      component:FindThings,
     },
    {
      path:'/FindPeople',
      name:'FindPeople',
      component:FindPeople,
     },
    {
      path:'/Login',
      name:'Login',
      component:Login,
     },
    {
      path:'/Register',
      name:'Register',
      component:Register,
     },
    {
      path:'/AdminCenter',
      name:'AdminCenter',
      component:AdminCenter,
    },
    {
      path:'/AddNotice',
      name:'AddNotice',
      component:AddNotice,
    },
    {
      path:'/Article',
      name:'Article',
      component:Article,
    }
  ]
})


