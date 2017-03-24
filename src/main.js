import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if ( savedPosition ) {
      return savedPosition;
    }
    if ( to.hash ) { // If the to location has a hash property
      return { selector: to.hash };
    }
    return { x: 0, y: 0 } // Manually scroll to location
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  // next(false); prevents continuing on with the path.
  // next('/'); You can pass a hard coded URL to go to redirect to.
  // next({}); You can pass an object where you define the path to navigate.
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
