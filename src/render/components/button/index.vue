<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      type: {
        type: String,
      },
      text: String,
    },
    setup(props) {
      return {}
    },
  })
</script>
