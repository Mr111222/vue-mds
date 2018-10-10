import axios from 'axios'

const state = {}
const getters = {}
const actions = {
  getCode (context, params) {
    return axios.get('mock/render/code', {params})
  },
  saveCode (context, params) {
    return axios.post('mock/render/code', params)
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
