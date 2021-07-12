const state = {
  count: 0,
  theme: {},
  language: 'zh',
  showEye: false,
  showDialogSetting: false,
}
const getters = {}

const mutations = {
  increment(state: { count: number }) {
    state.count++
  },
  toggleShowEye(state: { showEye: boolean }) {
    state.showEye = !state.showEye
  },
  toggleDialogSettings(state: { showDialogSetting: boolean }) {
    state.showDialogSetting = !state.showDialogSetting
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
