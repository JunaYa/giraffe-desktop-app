<template>
  <div class="container">
    <Eye v-if="showEye" />
    <SettingsPage v-if="showSettings" />
    <GCreditCard v-if="showCreditCard" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import Eye from '@/components/eye/Eye.vue'
  import SettingsPage from '@/pages/settings/Settings.vue'
  import GCreditCard from '@/components/creditCard/GCreditCard.vue'
  export default defineComponent({
    components: {
      Eye,
      SettingsPage,
      GCreditCard,
    },
    setup() {
      const store = useStore()
      return {
        showEye: computed(() => store.state.settings.showEye),
        showSettings: computed(() => store.state.settings.showDialogSetting),
        showCreditCard: computed(() => store.state.users.showCreditCard),
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
