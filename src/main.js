import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css';
import VueRouter from "vue-router";

// Pages
import IndexPage from '@/pages/Index';
import LoginPage from "@/pages/Login";
import OrgManagementPage from "@/pages/OrgManagement";
import SrvManagementPage from "@/pages/SrvManagement";
import SingleServerManagementPage from "@/pages/SingleServerManagement";
import SingleServerMonitoringPage from "@/pages/SingleServerMonitoring";
import AboutPage from "@/pages/About";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexPage },
  { path: '/about', exact: true, component: AboutPage },
  { path: '/servers/:id', exact: true, component: SingleServerMonitoringPage },
  { path: '/org-management', exact: true, component: OrgManagementPage },
  { path: '/srv-management', exact: true, component: SrvManagementPage },
  { path: '/srv-management/:id', exact: true, component: SingleServerManagementPage },
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
