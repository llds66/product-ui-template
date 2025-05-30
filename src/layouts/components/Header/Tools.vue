<script setup lang='ts'>
import { useThemeStore } from '@pinia/index'
import { ref } from 'vue'

const toolList = ref([
  { url: 'https://bilibili.com', icon: 'i-mingcute-bilibili-line' },
  { url: 'https://youtube.com', icon: 'i-mingcute-youtube-line' },
  { url: 'https://x.com', icon: 'i-mingcute-social-x-line' },
  { url: 'https://bluesky.app', icon: 'i-mingcute-bluesky-social-line' },
  { url: 'https://github.com/llds66/product-ui-template', icon: 'i-mingcute-github-line', isCode: true },
])
const userStore = useThemeStore()
const isDark = userStore.theme === 'dark'
function toggle() {
  userStore.toggleTheme()
}
</script>

<template>
  <div class="flex justify-end items-center gap-x-1 font-size-xl">
    <div
      class="flex p-2 rounded-md hover:bg-#f3f4f7 dark:hover:bg-#27272a transition-colors duration-200"
      @click="toggle"
    >
      <div :class="isDark ? 'i-mingcute-moon-line' : 'i-mingcute-sun-line'" />
    </div>
    <a
      v-for="item in toolList"
      :key="item.url" target="_blank" :href="item.url"
      class="flex p-2 rounded-md hover:bg-#f3f4f7 dark:hover:bg-#27272a transition-colors duration-200 relative"
    >
      <div :class="item.icon" />
    </a>
  </div>
</template>
