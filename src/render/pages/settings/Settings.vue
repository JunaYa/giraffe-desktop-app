<template>
  <GDialog>
    <div class="settings-list">
      <div class="settings-list-item">
        <span>语言</span>
        <button>选择</button>
      </div>
      <div class="settings-list-item">
        <span>主题</span>
        <button>选择</button>
      </div>
      <div class="settings-list-item">
        <span>things 功能</span>
        <button @click="onSelectNav('things')">选择</button>
      </div>
      <div class="settings-list-item">
        <span>users 功能</span>
        <button @click="onSelectNav('users')">选择</button>
      </div>
    </div>
  </GDialog>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from 'vuex'
  import GDialog from '@/components/dialog/index.vue'

  export default defineComponent({
    components: {
      GDialog,
    },
    setup() {
      const store = useStore()
      const onSelectNav = (moduleName: string) => {
        if (moduleName === 'things') {
          store.commit('init')
          return
        }
        store.commit('updateNavList', store.state[moduleName].navList)
      }
      return {
        onSelectNav,
      }
    },
  })
</script>

<style scoped>
  .settings-list {
    padding: 16px;
  }
  .settings-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 48px;
    background-color: #fff;
  }
</style>
