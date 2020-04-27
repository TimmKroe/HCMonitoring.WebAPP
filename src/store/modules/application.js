// initial state
const state = {
    isAuthenticated: false,
    compact: true,
    servers: []
  }
  
  // getters
  const getters = {
      Authenticated: state => {
          return state.isAuthenticated;
      },

      isCompact: state => {
          return state.compact;
      }
  }
  
  // actions
  const actions = {
    getAuthenticated ({ commit }) {
      commit('setAuthStatus', false)
    }
  }
  
  // mutations
  const mutations = {
    setAuthStatus (state, status) {
      state.isAuthenticated = status;
    },

    toggleCompact (state) {
      state.compact = !state.compact;
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }