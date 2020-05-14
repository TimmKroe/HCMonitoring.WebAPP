import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css';
import VueRouter from "vue-router";
import store from './store'

// Pages
import IndexPage from '@/pages/Index';
import LoginPage from "@/pages/Login";
import OrgManagementPage from "@/pages/OrgManagement";
import SrvManagementPage from "@/pages/serverManagement/SrvManagement";
import SingleServerManagementPage from "@/pages/serverManagement/SingleServerManagement";
import SingleServerMonitoringPage from "@/pages/SingleServerMonitoring";
import AboutPage from "@/pages/About";
import BackupsPage from "@/pages/Backups";
import SnapshotsPage from "@/pages/Snapshots";
import ProfilePage from "@/pages/Profile";

import ErrorSiteNotFoundPage from "@/pages/SiteNotFound";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexPage },
  { path: '/about', exact: true, component: AboutPage },
  { path: '/profile', exact: true, component: ProfilePage},
  { path: '/servers/:id', exact: true, component: SingleServerMonitoringPage },
  { path: '/backups', exact: true, component: BackupsPage },
  { path: '/snapshots', exact: true, component: SnapshotsPage },
  { path: '/org-management', exact: true, component: OrgManagementPage },
  { path: '/srv-management', exact: true, component: SrvManagementPage },
  { path: '/srv-management/:id', exact: true, component: SingleServerManagementPage },
  { path: '/login', exact: true, component: LoginPage },
  { path: '*', component: ErrorSiteNotFoundPage },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
