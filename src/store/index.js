import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters'
import {mutations} from './mutations'
import actions from './actions'
import render from './modules/render'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    errMsg: '',
    mask: false,
    loading: false,
  },
  getters,
  mutations,
  actions,
  modules: {
    render
  },
  strict: debug
})
