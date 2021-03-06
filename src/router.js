import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import Gallery from '@/components/Gallery'
import Post from '@/components/Post'


Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post
    }
  ]
})