import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Assessment from './views/Assessment.vue';
import Result from './views/Result.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: Assessment,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    },
    {
      path: '*',
      redirect: Home,
    },
  ],
});
