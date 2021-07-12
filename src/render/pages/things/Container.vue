<template>
  <div class="container">
    <Eye v-if="showEye" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import Eye from '@/components/eye/Eye.vue'

  export default defineComponent({
    components: {
      Eye,
    },
    setup() {
      const store = useStore()
      return {
        showEye: computed(() => store.state.settings.showEye),
      }
    },
  })
</script>

<style lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background: #eee;
  }
</style>
