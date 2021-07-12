<template>
  <div class="person-root">
    <GCreditCard v-if="showCreditCard" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import GCreditCard from '@/components/creditCard/GCreditCard.vue'
  export default defineComponent({
    components: {
      GCreditCard,
    },
    setup() {
      const store = useStore()

      return {
        showCreditCard: computed(() => store.state.users.showCreditCard),
      }
    },
  })
</script>
