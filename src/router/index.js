import Vue from 'vue';
import Router from 'vue-router';

import store from '~/store';

import middlewarePipeline from './middlewarePipeline';
import auth from './middleware/auth';
import guest from './middleware/guest';


Vue.use(Router);

// Массив с роутами отделен для легкого доступа
export const routers = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('~/components/MainPage'),
    meta: {
      visible: false
    }
  },
  
]

export const router = new Router({
  mode: 'history',
  base: '/',
  hashbang: false,
  routes: routers
});


router.beforeEach((to, from, next) => {
  store.commit('setRoute', to.path);
  if(!to.meta.middleware){ return next()} 
  const middleware = to.meta.middleware; 
  const context = {to, from, next, store};
  return middleware[0]({ ...context, next: middlewarePipeline(context, middleware, 1) }); 
});




