<template>
  <div class="person-root">
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  export default defineComponent({
    components: {
    },
    setup() {
      const store = useStore()

      return {
        showCreditCard: computed(() => store.state.users.showCreditCard),
      }
    },
  })
</script>
