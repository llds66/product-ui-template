<script setup lang="ts">
import { motion } from "motion-v"

</script>

<template>
  <!-- <div class="flex flex-col items-center">
    <div v-for="(a, index) in animations" :key="index"
      class="h-88vh w-full border-2 rounded-lg border-dashed border-stone-500 dark:border-stone-200 mt-5 flex flex-col items-center justify-center gap-y-2">
      <motion.div
        :initial="a.initial"
        :while-in-view="a.whileInView"
        :transition="a.transition"
        class="h-100px w-100px bg-stone-800 dark:bg-stone-100 rounded-lg"
      />
    </div>
  </div> -->
  <div>
    <!-- #1 -->
    <div class="text-xl font-bold text-center mt-8">#1</div>
    <div class="flex flex-col sm:flex-row gap-2 mt-5 px-0 xl:px-50">
      <motion.div :initial="{ opacity: 0, x: -50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[2] border-2 rounded-lg border-dashed border-stone-500" />

      <motion.div :initial="{ opacity: 0, x: 50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[1] border-2 rounded-lg border-dashed border-stone-500" />
    </div>
    <div class="flex flex-col sm:flex-row gap-2 mt-2 px-0 xl:px-50">
      <motion.div :initial="{ opacity: 0, x: -50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[1] border-2 rounded-lg border-dashed border-stone-500" />

      <motion.div :initial="{ opacity: 0, x: 50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[2] border-2 rounded-lg border-dashed border-stone-500" />
    </div>
    <!-- #2 -->
    <div class="text-xl font-bold text-center mt-8">#2</div>
    <div class="w-full flex gap-2 mt-5 px-0 xl:px-50">
      <motion.div :initial="{ opacity: 0, x: -50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-120 w-full  border-2 rounded-lg border-dashed border-stone-500" />
    </div>
    <!-- #3 -->
    <div class="text-xl font-bold text-center mt-8">#3</div>
    <div class="w-full flex gap-2 mt-5 px-0 xl:px-50">
      <motion.div :initial="{ opacity: 0, x: 50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-120 w-full  border-2 rounded-lg border-dashed border-stone-500" />
    </div>
    <!-- #4 -->
    <div class="text-xl font-bold text-center mt-8">#4</div>
    <div class="w-full flex gap-2 mt-5 px-0 xl:px-50">
      <motion.div :initial="{ opacity: 0, y: 50 }" :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-120 w-full  border-2 rounded-lg border-dashed border-stone-500" />
    </div>
  </div>
</template>
