<template>
  <div class="person-root">person</div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  export default defineComponent({
    components: {},
    setup() {
      const store = useStore()

      return {}
    },
  })
</script>
