<script setup lang="ts">
import { motion } from 'motion-v'
import SectionTitle from '@/common/components/SectionTitle.vue'
</script>

<template>
  <div>
    <!-- #1 -->
    <SectionTitle
      main-title="Empower Products"
      sub-title="Use design to reveal true value and create lasting impressions"
    />
    <div class="flex flex-col sm:flex-row gap-2 mt-5 px-0 xl:px-50">
      <motion.div
        :initial="{ opacity: 0, x: -50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[2]  bg-#fafafa90 backdrop-blur-md rounded-lg border-1 border-stone-100 p-5"
      >
        <img src="@/common/assets/1.webp" class="object-contain  w-full rounded-lg h-[120px]">
        <div class="text-lg text-stone-900 dark:text-stone-950">
          Privacy-first
        </div>
        <div class="text-sm text-stone-500 dark:text-stone-800">
          Own your content with Cap's privacy-focused approach. Keep your sensitive
          information secure and maintain
          complete control over who can access your recordings
        </div>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, x: 50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[1] bg-#fafafa90 backdrop-blur-md rounded-lg border-1 border-stone-100 p-5"
      >
        <img src="@/common/assets/2.webp" class="object-contain  w-full rounded-lg h-[120px]">
        <div class="text-lg text-stone-900 dark:text-stone-950">
          Multi-Platform Support
        </div>
        <div class="text-sm text-stone-500 dark:text-stone-800">
          Cap works seamlessly across macOS and Windows, giving you the flexibility to
          create content on any device.
        </div>
      </motion.div>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 mt-2 px-0 xl:px-50">
      <motion.div
        :initial="{ opacity: 0, x: -50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[1] bg-#fafafa90 backdrop-blur-md rounded-lg border-1 border-stone-100 p-5"
      >
        <img src="@/common/assets/3.webp" class="object-contain  w-full rounded-lg h-[120px]">
        <div class="text-lg text-stone-900 dark:text-stone-950">
          Multi-Platform Support
        </div>
        <div class="text-sm text-stone-500 dark:text-stone-800">
          Cap works seamlessly across macOS and Windows, giving you the flexibility to
          create content on any device.
        </div>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, x: 50 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }"
        class="h-60 sm:flex-1 lg:flex-[2] bg-#fafafa90 backdrop-blur-md rounded-lg border-1 border-stone-100 p-5"
      >
        <img src="@/common/assets/4.webp" class="object-contain  w-full rounded-lg h-[120px]">
        <div class="text-lg text-stone-900 dark:text-stone-950">
          Multi-Platform Support
        </div>
        <div class="text-sm text-stone-500 dark:text-stone-800">
          Cap works seamlessly across macOS and Windows, giving you the flexibility to
          create content on any device.
        </div>
      </motion.div>
    </div>
    <!-- #2 -->
    <SectionTitle
      class="mt-20" main-title="Design Drives Growth"
      sub-title="Simplify complexity and turn ideas into real momentum"
    />
    <div class="w-full flex gap-2 mt-5 px-0 xl:px-50">
      <motion.div
        :initial="{ opacity: 0, y: 100 }" :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }" class="h-120 w-full  rounded-lg  "
      >
        <img src="@/common/assets/collaboration.webp" class="object-contain  w-full rounded-lg h-120">
      </motion.div>
    </div>
    <!-- #3 -->
    <SectionTitle
      class="mt-20" main-title="Craft New Experiences"
      sub-title="Transform creativity into experiences that connect and inspire"
    />
    <div class="w-full flex gap-2 mt-5 px-0 xl:px-50">
      <motion.div
        :initial="{ opacity: 0, x: 100 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }" class=" w-full"
      >
        <img src="@/common/assets/6.jpg" class="object-contain  w-full h-auto  rounded-xl ">
      </motion.div>
    </div>
    <div class="w-full flex gap-2 mt-5 px-0 xl:px-50">
      <motion.div
        :initial="{ opacity: 0, x: 100 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }" class=" w-full"
      >
        <img src="@/common/assets/7.jpg" class="object-contain  w-full h-auto  rounded-xl ">
      </motion.div>
    </div>
    <!-- #4 -->
    <SectionTitle
      class="mt-20" main-title="Beyond Perfection"
      sub-title="Bring products and users closer through thoughtful design"
    />
    <div class="w-full flex gap-2 mt-5 px-0 xl:px-50">
      <motion.div
        :initial="{ opacity: 0, x: 100 }" :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }" class=" w-full   "
      >
        <img src="@/common/assets/5.webp" class="object-contain  w-full h-auto  rounded-xl ">
      </motion.div>
    </div>
  </div>
</template>
