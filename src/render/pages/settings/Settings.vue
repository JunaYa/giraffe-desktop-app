<template>
  <div class="settings-page">
    <div class="setting-container"></div>
  </div>
  <g-dialog>
    <div class="settings-list">
      <div class="settings-list-item">
        <span>按钮</span>
        <button>语言</button>
      </div>
      <div class="settings-list-item">
        <span>按钮</span>
        <button>主题</button>
      </div>
    </div>
  </g-dialog>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import GDialog from '@/components/dialog/GDialog.vue'

  export default defineComponent({
    components: {
      GDialog,
    },
    setup() {},
  })
</script>

<style scoped>
  .settings-page {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 16px;
  }

  .setting-container {
    background-color: #fff;
    border-radius: 3px;
    height: 100%;
    padding: 16px;
  }

  .settings-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 48px;
  }
</style>
