<template>
  <Things />
  <Home />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Home from '@/pages/home/Home.vue'
  import Things from '@/pages/things/Things.vue'
  import { getHello } from './api'
  export default defineComponent({
    name: 'App',
    components: {
      Home,
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .logo {
    width: 150px;
    margin-right: 20px;
  }
</style>
