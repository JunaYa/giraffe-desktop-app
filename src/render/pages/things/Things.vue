<template>
  <div class="scalable">
    <SideBar />
    <div class="separator">
      <i></i><i></i>
    </div>
  </div>
  <div class="main">
    <Container />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import SideBar from './SideBar.vue'
  import Container from './Container.vue'

  export default defineComponent({
    components: {
      SideBar,
      Container,
    },
    setup() {
      const store = useStore()
      store.dispatch('init')
      return {}
    },
  })
</script>

<style scoped lang="scss">
  .scalable {
    position: relative;
    min-width: 12rem;
    padding-right: 14px;
  }

  .main {
    flex: 1;
  }

  .scalable .separator {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 14px;
    height: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .35);
    cursor: col-resize;
  }

  .scalable .separator i {
    display: inline-block;
    height: 14px;
    width: 1px;
    background-color: #e9e9e9;
    margin: 0 1px;
  }
</style>
