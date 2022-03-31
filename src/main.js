import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import router from './router'
import store from './store/index'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyFooter from './components/MyFooter';
import SidebarMenu from './components/Menu/SidebarMenu';

Vue.component('MyFooter', MyFooter);
Vue.component('SidebarMenu', SidebarMenu);
Vue.use(BootstrapVue);

Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
