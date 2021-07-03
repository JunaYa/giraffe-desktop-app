<template>
  <div class="side-bar">
    <div class="nav-group">
      <div v-for="(item, index) in navList" :key="index" class="nav-item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    setup() {
      const store = useStore()
      console.log(store.state.things)
      return {
        navList: computed(() => store.state.things.navList),
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
  }
</style>
