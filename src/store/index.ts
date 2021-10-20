import { createStore } from 'vuex'
import mutations from './mutations'
import state from './state'

export const store = createStore({
  state() {
    return state
  },
  mutations: mutations
})
