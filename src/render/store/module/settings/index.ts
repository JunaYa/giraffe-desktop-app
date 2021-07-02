const state = {
  count: 0,
  theme: {},
  language: 'zh',
}
const getters = {}

const mutations = {
  increment(state: { count: number }) {
    state.count++
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
