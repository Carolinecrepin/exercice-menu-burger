import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PostView from '../views/PostView.vue'
import PostFormView from '../views/PostFormView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },
  {
    path: '/postForm',
    name: 'postForm',
    component: PostFormView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
