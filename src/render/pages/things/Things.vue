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
      store.dispatch('init')
      return {}
    },
  })
</script>
