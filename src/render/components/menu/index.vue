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
    display: flex;
    flex: 1;
    margin-bottom: 8px;
    padding: 4px 6px;
    color: #4c4e53;
    font-weight: 600;
    font-size: 0.8rem;
    text-align: left;
    text-shadow: 1px 1px 0 #fff;
    border-radius: 4px;
    // box-shadow: 0.3rem 0.3rem 0.5rem rgb(195 193 198 / 90%), -0.2rem -0.2rem 0.4rem #fff
    // box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

    &--selected {
      background-color: #dce0e7;
    }

    &__content {
      margin-left: 4px;
    }
  }
</style>
