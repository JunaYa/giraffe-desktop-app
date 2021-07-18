<template>
  <div class="side-bar">
    <div class="nav-group">
      <template v-for="(item, index) in navList" :key="index">
        <Menu :info="item"></Menu>
      </template>
    </div>
    <div class="footer">
      <div class="button-group">
        <button class="button">
          <Icon icon="icon-menu-plus" size="1rem" />New List
        </button>
        <button class="button">
          <Icon icon="icon-menu-options" size="1rem" />
        </button>
      </div>
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
      bottom: 0;
      right: 0;
      left: 0;
      transform: translate(0, -100%);
      border-top: 1px solid #ddd;
      height: 2rem;
      line-height: 2rem;

      .button-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 4px 16px;
        overflow: hidden;

        .button {
          border: 1px solid #f5f6f8;
          background: #f5f6f8;
          padding: 4px;
          border-radius: 2px;
          cursor: pointer;
          outline: none;
          display: inline-flex;

          &:hover {
            border: 1px solid #ddd;
          }
          &:active {
            border: 1px solid #ddd;
          }
          &:focus {
            border: 1px solid #ddd;
            background: #dce0e7;
          }
        }
      }
    }
  }
</style>
