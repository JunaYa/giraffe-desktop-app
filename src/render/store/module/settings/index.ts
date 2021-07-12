const state = {
  count: 0,
  theme: {},
  language: 'zh',
  showEye: true,
}
const getters = {}

const mutations = {
  increment(state: { count: number }) {
    state.count++
  },
  toggleShowEye(state: { showEye: boolean }) {
    state.showEye = !state.showEye
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
