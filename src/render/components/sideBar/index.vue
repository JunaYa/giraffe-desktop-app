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
    padding-top: 2rem;
    background: #f5f6f8;

    .nav-group {
      padding: 16px;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2rem;
      line-height: 2rem;
      border-top: 1px solid #ddd;
      transform: translate(0, -100%);

      .button-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 4px 16px;
        overflow: hidden;

        .button {
          display: inline-flex;
          padding: 4px;
          background: #f5f6f8;
          border: 1px solid #f5f6f8;
          border-radius: 2px;
          outline: none;
          cursor: pointer;

          &:hover {
            border: 1px solid #ddd;
          }

          &:active {
            border: 1px solid #ddd;
          }

          &:focus {
            background: #dce0e7;
            border: 1px solid #ddd;
          }
        }
      }
    }
  }
</style>
