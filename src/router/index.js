import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Col from '@/components/Col'
import User from '@/components/User'
import Article from '@/components/Article'
import Lanmu from '@/components/Lanmu'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/col',
      name: 'col',
      component: Col
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/article/:id',
      name: 'article',
      component: Article
    },{
      path: '/lanmu',
      name: 'lanmu',
      component: Lanmu
    },{
      path: '/',
      redirect: '/home'
    },{
      path: '*',
      redirect: '/home'
    }
  ]
})

export default router