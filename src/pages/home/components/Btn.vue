<script setup lang='ts'>
import { motion } from 'motion-v'
import { computed } from 'vue'

const props = defineProps<{
  text?: string
  icon?: string
  bgColor?: 'white' | 'black'
  appPackage?: string
}>()

const btnClass = computed(() => {
  return {
    '': props.bgColor === 'white',
    'bg-stone-950 dark:bg-stone-50': props.bgColor === 'black',
  }
})
const textClass = computed(() => {
  return {
    'text-stone-950 dark:text-stone-100 text-sm select-none': props.bgColor === 'white',
    'text-white dark:text-stone-950 text-sm select-none': props.bgColor === 'black',
  }
})
const iconClass = computed(() => {
  return {
    'text-white dark:text-stone-950': props.bgColor === 'black',
    'text-black dark:text-white': props.bgColor === 'white',
  }
})
</script>

<template>
  <motion.a
    v-if="appPackage"
    :href="`/app/${appPackage}`"
    :while-hover="{ scale: 1.1 }" :while-press="{ scale: 0.95 }"
    :transition="{ type: 'spring', stiffness: 300 }"
    class="btn-container"
    :class="btnClass"
  >
    <div v-if="icon" :class="[icon, iconClass]" />
    <div :class="textClass">
      {{ text }}
    </div>
  </motion.a>
  <motion.div
    v-else
    :while-hover="{ scale: 1.1 }" :while-press="{ scale: 0.95 }"
    :transition="{ type: 'spring', stiffness: 300 }"
    class="btn-container"
    :class="btnClass"
  >
    <div v-if="icon" :class="[icon, iconClass]" />
    <div :class="textClass">
      {{ text }}
    </div>
  </motion.div>
</template>

<style scoped>
.btn-container{
    --uno:'w-110px h-35px rounded-md flex items-center justify-center gap-x-1 border-1 border-stone-300 dark:border-stone-700'
}
</style>
