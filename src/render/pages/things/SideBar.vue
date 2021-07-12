<template>
  <div class="side-bar">
    <div class="nav-group">
      <div v-for="(item, index) in navList" :key="index" class="nav-item">
        {{ item.name }}
      </div>
    </div>
    <div class="footer">
      <div class="btn-setting" @click="onOpenSetting">settting</div>
    </div>
    <teleport to="#things_main">
      <SettingsPage />
    </teleport>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { useStore } from 'vuex'
  import SettingsPage from '@/pages/settings/Settings.vue'

  export default defineComponent({
    components: {
      SettingsPage,
    },
    setup() {
      const store = useStore()
      const showSetting = ref(false)
      console.log(store.state.things)
      const onOpenSetting = () => {
        showSetting.value = !showSetting.value
      }
      return {
        navList: computed(() => store.state.things.navList),
        showSetting,
        onOpenSetting,
      }
    },
  })
</script>

<style lang="scss">
  .side-bar {
    width: 100%;
    height: 100%;
    background: #333;
    padding-top: 2rem;

    .nav-group {
      padding: 16px;

      .nav-item {
        line-height: 2rem;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        text-align: right;
      }
    }

    .footer {
      color: white;
    }
  }
</style>
