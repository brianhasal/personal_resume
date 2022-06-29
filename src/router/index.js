import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import LogoutView from "../views/LogoutView.vue"
import ResumesNew from "../views/ResumesNew.vue"
import ResumesEdit from "../views/ResumesEdit.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { 
    path: "/login", 
    name: "login", 
    component: LoginView 
  },
  { 
    path: "/logout", 
    name: "logout", 
    component: LogoutView 
  },
  { 
    path: "/resumes/new", 
    name: "resumes-new", 
    component: ResumesNew 
  },
  { 
    path: "/resumes/edit", 
    name: "resumes-edit", 
    component: ResumesEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
