import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    },
    {
      path: '/',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/',
      name: 'Gallery',
      component: Gallery,
    }

  ]
})