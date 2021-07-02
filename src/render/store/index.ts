import { createStore } from 'vuex'

import users from './module/users'
import tags from './module/users'
import settings from './module/settings'

export default createStore({
  modules: {
    users,
    tags,
    settings,
  },
})
