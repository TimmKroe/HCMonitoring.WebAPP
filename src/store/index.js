import Vue from 'vue'
import Vuex from 'vuex'
import application from "./modules/application";

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    application
  }
})