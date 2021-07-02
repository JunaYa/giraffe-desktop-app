import { createStore } from 'vuex'

import users from './module/users'
import tags from './module/users'
import settings from './module/settings'
import things from './module/things'

export default createStore({
  modules: {
    users,
    tags,
    settings,
    things,
  },
})
