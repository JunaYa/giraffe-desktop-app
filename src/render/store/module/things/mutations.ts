export const mutations = {
  init(state) {
    state.navList = [
      { id: 1001, name: 'InBox', icon: 'icon-in-box', path: '/things/inbox' },
      {
        id: 1002,
        name: 'UpComming',
        icon: 'icon-up-comming',
        path: '/things/upcomming',
      },
      {
        id: 1003,
        name: 'Anytime',
        icon: 'icon-anytime',
        path: '/things/anytime',
      },
      {
        id: 1004,
        name: 'Someday',
        icon: 'icon-someday',
        path: '/things/someday',
      },
      {
        id: 1005,
        name: 'Logbook',
        icon: 'icon-logbook',
        path: '/things/logbook',
      },
    ]
  },
  updateNavList(state, list) {
    state.navList = list
  },
}
