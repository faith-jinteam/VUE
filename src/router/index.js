import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Main/HelloWorld'
import OneNew from '@/components/Main/OneNew'
import Datatable from '@/components/Main/Datatable'
import Banner from '@/components/common/banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/HelloWorld'
    },
    {
      path: '/Home',
      component: Banner
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/OneNew',
      component: OneNew
    },
    {
      path: '/Datatable',
      component: Datatable
    },
    {
      path: '#',
      redirect: '/HelloWorld'
    }
  ]
})
