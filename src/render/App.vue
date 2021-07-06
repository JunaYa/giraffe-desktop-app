<template>
  <Things />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Things from '@/pages/things/Things.vue'
  import { getHello } from './api'
  export default defineComponent({
    name: 'App',
    components: {
      Things,
    },
    data() {
      return {
        msg: '',
      }
    },
    mounted() {
      getHello().then((res: any) => {
        this.msg = res.data
      })
    },
  })
</script>

<style>
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    border: 0;
    -webkit-user-select: none;
    user-select: none;
    overflow-x: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
