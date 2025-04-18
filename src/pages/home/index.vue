<script setup lang='ts'>
import { motion } from "motion-v"
import { useRouter } from "vue-router";
const router = useRouter()
</script>

<template>
    <div>
        <div class="text-3xl md:text-6xl font-bold text-stone-950 dark:text-white  text-center">
            <motion.div :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }">Clean and Minimal Product</motion.div>
            <motion.div :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }">Website Template.</motion.div>
        </div>
        <div class="text-lg sm:text-xl text-center max-w-[750px] text-center mx-auto text-stone-500 dark:text-stone-400  mt-5">
            <motion.div :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }">Modern Vue 3 template styled with UnoCSS and animated with Motion. Lightweight. Flexible.</motion.div>
        </div>
        <div class="flex justify-center mt-10">
            <motion.button @click="router.push('/effect')" :while-hover="{ scale: 1.1 }" :while-press="{ scale: 0.95 }"
                :transition="{ type: 'spring', stiffness: 300 }"
                class="w-90px h-35px bg-stone-950 dark:bg-stone-50 rounded-md flex items-center justify-center">
                <div class="text-white dark:text-stone-950 text-sm">Get Started</div>
            </motion.button>
        </div>
        <div class="rounded-lg shadow-md mt-5 overflow-hidden">
            <iframe src="https://vite.dev/" frameborder="0" height="600" width="100%" scrolling="no"></iframe>
        </div>
    </div>
</template>