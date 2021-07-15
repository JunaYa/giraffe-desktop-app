import { Menu } from './type'

export const mutations = {
  init(state: { navList: Array<Menu> }) {
    state.navList = [
      {
        id: 1001,
        name: 'InBox',
        icon: 'icon-menu-inbox',
        path: '/things/inbox',
        color: '#fdd502',
      },
      {
        id: 1002,
        name: 'Today',
        icon: 'icon-menu-today',
        path: '/things/today',
        color: '#27a2f0',
      },
      {
        id: 1003,
        name: 'UpComming',
        icon: 'icon-menu-upcomming',
        path: '/things/upcomming',
        color: '#f83470',
      },
      {
        id: 1004,
        name: 'Anytime',
        icon: 'icon-menu-anytime',
        path: '/things/anytime',
        color: '#37a59a',
      },
      {
        id: 1005,
        name: 'Someday',
        icon: 'icon-menu-someday',
        path: '/things/someday',
        color: '#cabe86',
      },
      {
        id: 1006,
        name: 'Logbook',
        icon: 'icon-menu-logbook',
        path: '/things/logbook',
        color: '#4abd5e',
      },
    ]
  },
  updateNavList(state: { navList: Menu[] }, list: Array<Menu>) {
    state.navList = list
  },
  activeMenu(state: { currentPage: String }, page: String) {
    state.currentPage = page
  },
}
