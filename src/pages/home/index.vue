<script setup lang='ts'>
import { motion } from 'motion-v'
import { ref } from 'vue'
import Btn from './components/Btn.vue'
import MainTitle from './components/MainTitle.vue'
import SubTitle from './components/SubTitle.vue'

const featuresList = ref([
  {
    icon: 'i-logos-vitejs',
    title: 'Vue 3',
    description: 'Vue 3 is a progressive JavaScript framework used for building user interfaces.',
  },
  {
    icon: 'i-logos-unocss',
    title: 'UnoCSS',
    description: 'UnoCSS is a utility-first CSS framework that provides a fast and efficient way to style your web applications.',
  },
  {
    icon: 'i-logos-vitejs',
    title: 'Motion',
    description: 'Motion is a Vue 3 animation library that provides a simple and powerful way to animate your components.',
  },
  {
    icon: 'i-logos-vitejs',
    title: 'Vite',
    description: 'Vue 3 is a progressive JavaScript framework used for building user interfaces.',
  },
  {
    icon: 'i-logos-vitejs',
    title: 'PrimeVue',
    description: 'UnoCSS is a utility-first CSS framework that provides a fast and efficient way to style your web applications.',
  },
  {
    icon: 'i-logos-vitejs',
    title: 'Lenis',
    description: 'Motion is a Vue 3 animation library that provides a simple and powerful way to animate your components.',
  },
])
</script>

<template>
  <div>
    <!-- 主标题 -->
    <MainTitle />
    <!-- 副标题 -->
    <SubTitle />
    <!-- 按钮 -->
    <div class="flex justify-center mt-10 gap-x-4">
      <Btn text="Get Started" bg-color="black" />
      <Btn text="Video" icon="i-mingcute-play-line" bg-color="white" />
      <Btn text="Android" icon="i-mingcute-android-2-line" bg-color="white" />
      <Btn text="Windows" icon="i-mingcute-windows-line" bg-color="white" />
    </div>
    <!-- #3:iframe -->
    <div class="rounded-lg shadow-md mt-5 overflow-hidden">
      <iframe src="https://vite.dev/" frameborder="0" height="850" width="100%" scrolling="no" />
    </div>
    <!-- #4 -->
    <div class="mt-10 w-full grid gap-6 cols-1 sm:cols-2 lg:cols-3">
      <motion.div
        v-for="(i, index) in featuresList" :key="i.title" :initial="{ opacity: 0, y: 100 }"
        :while-in-view="{ opacity: 1, y: 0 }" :transition="{ delay: index * 0.05, ease: [0.42, 0, 0.58, 1] }"
        class="cursor-default  hover:shadow-md hover:rounded-lg transition-all duration-500 flex items-center gap-x-5 h-30 bg-[rgba(183,183,255,0.05)] border-1 border-solid border-#E5E7EBFF dark:border-#3F3F46 rounded-md transition-shadow p-5"
      >
        <div :class="`${i.icon} text-4xl shrink-0`" />
        <div class="flex flex-col">
          <div class="text-lg font-bold text-stone-950 dark:text-white">
            {{ i.title }}
          </div>
          <div class="text-sm text-stone-500 dark:text-stone-400">
            {{ i.description }}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</template>
