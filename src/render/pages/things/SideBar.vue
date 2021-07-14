<template>
  <div class="side-bar">
    <div class="nav-group">
      <div v-for="(item, index) in navList" :key="index" class="nav-item" @click="onItemNavClick(item)">
        {{ item.name }}
      </div>
    </div>
    <div class="footer">
      <div class="btn-setting" @click="onToggleSetting">settting</div>
      <div class="btn-showEye" @click="onToggleShowEye">show-eye-toggle</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    components: {},
    setup() {
      const store = useStore()
      const onToggleSetting = () => {
        store.commit('settings/toggleDialogSettings')
      }
      const onItemNavClick = (item: { action: string }) => {
        if (store.state.settings.showDialogSetting) {
          onToggleSetting()
        }
        if (item.action) {
          store.commit(`users/${item.action}`)
        }
      }
      const onToggleShowEye = () => {
        store.commit('settings/toggleShowEye')
      }
      return {
        navList: computed(() => store.state.things.navList),
        onToggleSetting,
        onToggleShowEye,
        onItemNavClick,
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
