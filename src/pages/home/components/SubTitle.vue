<script setup lang='ts'>
import { motion } from 'motion-v'
</script>

<template>
  <div
    class="text-lg sm:text-xl text-center max-w-[750px] text-center mx-auto text-stone-500 dark:text-stone-400  mt-5"
  >
    <motion.div
      :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }"
    >
      Modern Vue 3 template styled with UnoCSS and animated with Motion. Lightweight. Flexible.
    </motion.div>
  </div>
</template>
