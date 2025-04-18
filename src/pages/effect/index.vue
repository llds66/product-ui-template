<script setup lang="ts">
import { motion } from "motion-v"

const animations = [
  {
    label: 'Fade In',
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
  },
  {
    label: 'Slide In Top',
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
  },
  {
    label: 'Slide In Bottom',
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
  },
  {
    label: 'Slide In Left',
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
  },
  {
    label: 'Slide In Right',
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
  }
]
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-for="(a, index) in animations" :key="index"
      class="h-100 w-full border-2 rounded-lg border-dashed border-stone-500 dark:border-stone-200 mt-5 flex flex-col items-center justify-center gap-y-2">
      <motion.div
        :initial="a.initial"
        :while-in-view="a.whileInView"
        :transition="a.transition"
        class="h-100px w-100px bg-stone-800 dark:bg-stone-100 rounded-lg"
      />
    </div>
  </div>
</template>
