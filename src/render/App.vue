<template>
  <div>{{ $store.state.count }}</div>
  <Home />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Home from '@/components/Home.vue'
  import { getHello } from './api'
  export default defineComponent({
    name: 'App',
    components: {
      Home,
    },
    data() {
      return {
        msg: '',
      }
    },
    mounted() {
      this.$store.commit('settings/increment')
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
