import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../views/MovieList'
import MovieDetails from '../views/MovieDetails'
import RegistrationPage from '../views/RegistrationPage'
import LoginPage from '../views/LoginPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/registration',
    name: 'registration-page',
    component: RegistrationPage
  },
  {
    path: '/',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/movies',
    name: 'movies-list',
    component: MovieList
  },
  {
    path: '/movies-list/:id',
    name: 'movies-details',
    component: MovieDetails
  },


]

const router = new VueRouter({
  routes
})

export default router
