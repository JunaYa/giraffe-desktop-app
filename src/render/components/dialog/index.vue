<template>
  <div class="g-dialog">
    <div class="g-dialog-header">header</div>
    <div class="g-dialog-body">
      <slot></slot>
    </div>
    <div class="g-dialog-footer">footer</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      props: {
      }
    },
  })
</script>

<style scoped lang="scss">
  .g-dialog {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.3);

    &-body {
      background-color: #fff;
    }
  }
</style>
