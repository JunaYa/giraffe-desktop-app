<template>
  <div class="side-bar">
    <div class="nav-group">
      <template v-for="(item, index) in navList" :key="index">
        <Menu :info="item"></Menu>
      </template>
    </div>
    <div class="footer">
      <button>New List</button>
      <button><Icon icon="icon-menu-options" size="1rem" /></button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { useStore } from 'vuex'
  import Menu from '@/components/menu/index.vue'
  import Icon from '@/components/icons/index.vue'
  export default defineComponent({
    components: {
      Menu,
      Icon,
    },
    setup() {
      const store = useStore()

      return {
        navList: computed(() => store.state.things.navList),
      }
    },
  })
</script>

<style lang="scss">
  .side-bar {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f5f6f8;
    padding-top: 2rem;
    .nav-group {
      padding: 16px;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 40px;
      border-top: 1px solid #666;
      height: 2rem;
      line-height: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 4 16px;
    }
  }
</style>
