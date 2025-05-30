<script setup lang='ts'>
import { motion } from 'motion-v'
</script>

<template>
  <div class="text-3xl md:text-6xl font-bold text-stone-950 dark:text-white  text-center">
    <motion.div
      :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }"
    >
      Clean and Minimal Product
    </motion.div>
    <motion.div
      :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }"
    >
      Website Template.
    </motion.div>
  </div>
</template>
