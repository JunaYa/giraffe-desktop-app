<template>
  <div
    class="g-menu"
    :class="{ 'g-menu--selected': currentPath === info?.id }"
    @click="onClick"
  >
    <Icon :color="info?.color || 'red'" :size="'1rem'" :icon="info?.icon" />
    <span class="g-menu__content">{{ info?.name }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import Icon from '@/components/icons/index.vue'

  export default defineComponent({
    components: {
      Icon,
    },
    props: {
      info: {
        type: Object,
      },
    },
    setup(props) {
      const { info } = props
      const store = useStore()
      const router = useRouter()
      const onClick = () => {
        router.push(info?.path)
        store.commit('activeMenu', info?.id)
      }
      return {
        info,
        onClick,
        currentPath: computed(() => store.state.things.currentPage),
      }
    },
  })
</script>

<style scoped lang="scss">
  .g-menu {
    flex: 1;
    color: #4c4e53;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 8px;
    padding: 4px 6px;
    border-radius: 4px;
    display: flex;

    &--selected {
      background-color: #dce0e7;
    }
    &__content {
      margin-left: 4px;
    }
  }
</style>
