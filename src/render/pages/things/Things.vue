<template>
  <div class="scalable" :style="{ width: sidebarWidth + 'px' }">
    <SideBar />
    <div class="separator"><i></i><i></i></div>
  </div>
  <div class="main" id="things_main">
    <Container />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
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
      let sidebarWidth = ref<any>(200)
      let startWidth = ref<any>(200)
      let startX = ref<any>(0)

      onMounted(() => {
        const startDrag = (e: any) => {
          startWidth.value = sidebarWidth.value
          startX.value = e.clientX
          document.documentElement.addEventListener('mousemove', onDrag)
          document.documentElement.addEventListener('mouseup', stopDrag)
        }

        const onDrag = (e: any) => {
          sidebarWidth.value = startWidth.value + e.clientX - startX.value
        }

        const stopDrag = (e: any) => {
          document.documentElement.removeEventListener('mousemove', onDrag)
          document.documentElement.removeEventListener('mouseup', stopDrag)
        }

        document
          ?.querySelector('.separator')
          ?.addEventListener('mousedown', startDrag)
      })
      return {
        sidebarWidth,
      }
    },
  })
</script>

<style scoped lang="scss">
  .scalable {
    position: relative;
    min-width: 36px;
    padding-right: 14px;
  }

  .main {
    flex: 1;
    position: relative;
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
    background-color: #ffffff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.35);
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
