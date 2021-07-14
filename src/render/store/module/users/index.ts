const state = {
  showCreditCard: false,
  navList: [
    { id: 2001, name: 'CreditCard', icon: 'icon-in-box', action: 'toggleShowCreditCard' },
    { id: 2002, name: 'Schedule', icon: 'icon-up-comming' },
    { id: 2003, name: 'TODO', icon: 'icon-anytime' },
  ],
}

const getters = {}

const mutations = {
  toggleShowCreditCard (state: { showCreditCard: boolean }) {
    state.showCreditCard = !state.showCreditCard
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
