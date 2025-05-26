<script setup lang='ts'>
import { ref } from 'vue'

const footerList = ref([
  {
    name: 'X',
    icon: 'i-mingcute-social-x-line',
    link: 'https://x.com',
  },
  {
    name: 'Tiktok',
    icon: 'i-mingcute-tiktok-line',
    link: 'https://tiktok.com',
  },
  {
    name: 'Youtube',
    icon: 'i-mingcute-youtube-line',
    link: 'https://youtube.com',
  },
  {
    name: 'Github',
    icon: 'i-mingcute-github-line',
    link: 'https://github.com/llds66/product-ui-template',
  },
])
</script>

<template>
  <footer class="px-4 py-6 md:px-8 md:py-0  container mx-auto">
    <div class="container flex flex-col justify-between items-center md:h-24 md:flex-row">
      <span class="text-sm text-stone-600 dark:text-stone-400 order-last md:order-first md:mt-0 mt-4">©
        LsAng</span>
      <div class="flex-1" />
      <a
        v-for="item in footerList" :key="item.name" target="_blank" :href="item.link"
        class=" text-stone-600 dark:text-stone-400 dark:hover:bg-#27272a flex items-center justify-center gap-x-1 p-2 rounded-md hover:bg-#f3f4f7 transition-colors duration-200"
      >
        <div :class="`${item.icon} text-xl`" />
        <span class="text-sm">{{ item.name }}</span>
      </a>
    </div>
  </footer>
</template>
