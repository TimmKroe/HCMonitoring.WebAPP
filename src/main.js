import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css';
import VueRouter from "vue-router";

// Pages
import IndexPage from '@/pages/Index';
import LoginPage from "@/pages/Login";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexPage },
  { path: '/login', exact: true, component: LoginPage },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
