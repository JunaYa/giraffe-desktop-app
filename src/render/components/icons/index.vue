<template>
  <Icon v-if="icon === 'icon-menu-inbox'" :color="color" :size="size" :tag="tag"><IosStar /></Icon>
  <Icon v-if="icon === 'icon-menu-today'" :color="color" :size="size" :tag="tag"><IosToday /></Icon>
  <Icon v-if="icon === 'icon-menu-upcomming'" :color="color" :size="size" :tag="tag"><IosCalendar /></Icon>
  <Icon v-if="icon === 'icon-menu-someday'" :color="color" :size="size" :tag="tag"><IosArchive /></Icon>
  <Icon v-if="icon === 'icon-menu-anytime'" :color="color" :size="size" :tag="tag"><IosApps /></Icon>
  <Icon v-if="icon === 'icon-menu-logbook'" :color="color" :size="size" :tag="tag"><MdBookmarks /></Icon>
  <Icon v-if="icon === 'icon-menu-options'" :color="color" :size="size" :tag="tag"><Options /></Icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@vicons/utils'
import {
  IosToday,
  IosStar,
  IosApps,
  MdBookmarks,
  IosCalendar,
  MdAlbums,
  IosArchive,
  IosOptions as Options,
} from '@vicons/ionicons4'

export default defineComponent({
  components: {
    Icon,
    IosToday,
    IosStar,
    IosApps,
    MdBookmarks,
    IosCalendar,
    MdAlbums,
    IosArchive,
    Options,
  },
  props: {
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: () => '1rem'
    },
    color: {
      type: String,
      default: () => '#333',
    },
    tag: {
      type: String,
    }
  },
  setup(props) {
    console.log(props)
    const { icon, size, color, tag } = props
    return {
      icon,
      size,
      color,
      tag,
    }
  },
})
</script>
