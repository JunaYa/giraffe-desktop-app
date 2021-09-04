<template>
  <div class="inbox-root">InBox</div>
  <div class="type-group">
    <GButton text="default" @click="onClick">aya</GButton>
    <GButton type="primary" text="primary" @click="onClick">aya</GButton>
    <GButton type="info" text="info" @click="onClick">aya</GButton>
    <GButton type="success" size="tiny" text="success" @click="onClick"
      >aya</GButton
    >
    <GButton type="warning" size="small" text="warning" @click="onClick"
      >aya</GButton
    >
    <GButton type="danger" size="medium" text="danger" @click="onClick"
      >aya</GButton
    >
    <GButton type="danger" text="danger" disabled @click="onClick">aya</GButton>
  </div>
  <div class="shadow-group">
    <GButton shadow="pill" @click="onClick">aya</GButton>
    <GButton shadow="raised" @click="onClick">aya</GButton>
    <GButton shadow="primary" @click="onClick">aya</GButton>
    <GButton pin shadow="pill" shape="round" @click="onClick">+</GButton>
    <GButton pin shadow="raised" shape="round" @click="onClick">+</GButton>
    <GButton pin shadow="pill" shape="square" @click="onClick">+</GButton>
    <GButton pin shadow="raised" shape="square" @click="onClick">+</GButton>
  </div>
  <div class="size-group">
    <GButton text="tiny" size="tiny" @click="onClick">aya</GButton>
    <GButton text="small" size="small" @click="onClick">aya</GButton>
    <GButton text="medium" size="medium" @click="onClick">aya</GButton>
    <GButton text="large" size="large" @click="onClick">aya</GButton>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { GButton } from '@/components/button/index'

  export default defineComponent({
    components: {
      GButton,
    },
    setup() {
      const onClick = () => {
        console.log('---- click')
      }
      return {
        onClick,
      }
    },
  })
</script>
