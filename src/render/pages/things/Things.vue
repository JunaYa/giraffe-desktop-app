<template>
  <div class="scalable" :style="{ width: sidebarWidth + 'px' }">
    <SideBar />
    <div class="separator"><i></i><i></i></div>
  </div>
  <div class="main" id="things_main">
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import SideBar from '@/components/sideBar/index.vue'

  export default defineComponent({
    components: {
      SideBar,
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
    position: relative;
    flex: 1;
  }

  .scalable .separator {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
    cursor: col-resize;
  }

  .scalable .separator i {
    display: inline-block;
    width: 1px;
    height: 14px;
    margin: 0 1px;
    background-color: #e9e9e9;
  }
</style>
