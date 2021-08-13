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
    overflow: hidden;
    font-size: 16px;
    border: 0;
    -webkit-user-select: none;
    user-select: none;
  }

  #app {
    display: flex;
    width: 100%;
    height: 100%;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    list-style: none;
  }
</style>
