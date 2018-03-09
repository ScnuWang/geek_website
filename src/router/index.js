import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Website from '@/components/website/Website'
import ProductList from '@/components/product/ProductList'
import ProductAnalysis from '@/components/product/ProductAnalysis'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/home',
      component: Home,
      children:[
        {path:'/index',component:Index},
        {path:'website',component:Website},
        {path:'productlist',component:ProductList},
        {path:'productAnalysis',component:ProductAnalysis}
      ]
    }
  ]
})
