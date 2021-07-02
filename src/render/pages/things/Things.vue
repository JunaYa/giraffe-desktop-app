<template>
  <div>{{ count }}</div>
  <button @click="increment">increament</button>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
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
