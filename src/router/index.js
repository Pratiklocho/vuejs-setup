import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Layout from '../views/Layout.vue';
import index from '../modules/index/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/index',
      children:[{
        path: '/index',
        name: 'index',
        component: index,
      }]
    }
  ]
});
