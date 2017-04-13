//jshint esversion:6
import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
});
