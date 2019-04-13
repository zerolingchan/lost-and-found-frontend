import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Header from '@/components/Header'
import Home from '@/components/Home'
import AddMessages from '@/components/AddMessages'
import LostThings from '@/components/LostThings'
import FindThings from '@/components/FindThings'
import FindPeople from '@/components/FindPeople'
import AdminCenter from '@/components/AdminCenter'
import CenterSidebar from '@/components/CenterSidebar'
import AddNotice from '@/components/AddNotice'

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
      path:'/CenterSidebar',
      name:'CenterSidebar',
      component:CenterSidebar,
    },
    {
      path:'/AddNotice',
      name:'AddNotice',
      component:AddNotice,
    }
  ]
})


