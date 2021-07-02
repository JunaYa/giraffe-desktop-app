<template>
  <SideBar />
  <Container />
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import SideBar from './SideBar.vue'
  import Container from './Container.vue'

  export default defineComponent({
    components: {
      SideBar,
      Container,
    },
    setup() {
      const store = useStore()
      const increament = () => store.commit('settings/increment')

      return {
        count: computed(() => store.state.settings.count),
        increament,
      }
    },
  })
</script>
