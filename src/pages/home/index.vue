<script setup lang='ts'>
import { ref } from "vue";
import { motion } from "motion-v"
import { useRouter } from "vue-router";
const router = useRouter()
const featuresList = ref([
    {
        icon: 'i-logos-vitejs',
        title: "Vue 3",
        description: "Vue 3 is a progressive JavaScript framework used for building user interfaces.",
    },
    {
        icon: 'i-logos-unocss',
        title: "UnoCSS",
        description: "UnoCSS is a utility-first CSS framework that provides a fast and efficient way to style your web applications.",
    },
    {
        icon: 'i-logos-vitejs',
        title: "Motion",
        description: "Motion is a Vue 3 animation library that provides a simple and powerful way to animate your components.",
    },
    {
        icon: 'i-logos-vitejs',
        title: "Vite",
        description: "Vue 3 is a progressive JavaScript framework used for building user interfaces.",
    },
    {
        icon: 'i-logos-vitejs',
        title: "PrimeVue",
        description: "UnoCSS is a utility-first CSS framework that provides a fast and efficient way to style your web applications.",
    },
    {
        icon: 'i-logos-vitejs',
        title: "Lenis",
        description: "Motion is a Vue 3 animation library that provides a simple and powerful way to animate your components.",
    },
])

</script>

<template>
    <div>
        <!-- #1:主副标题 -->
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
        <div
            class="text-lg sm:text-xl text-center max-w-[750px] text-center mx-auto text-stone-500 dark:text-stone-400  mt-5">
            <motion.div :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }">Modern Vue 3 template styled with UnoCSS and animated with Motion. Lightweight. Flexible.</motion.div>
        </div>
        <!-- #2:按钮 -->
        <div class="flex justify-center mt-10 gap-x-4">
            <motion.button @click="router.push('/effect')" :while-hover="{ scale: 1.1 }" :while-press="{ scale: 0.95 }"
                :transition="{ type: 'spring', stiffness: 300 }"
                class="w-110px h-35px bg-stone-950 dark:bg-stone-50 rounded-md flex items-center justify-center border-1 border-stone-300 dark:border-stone-700">
                <div class="text-white dark:text-stone-950 text-sm">Get Started</div>
            </motion.button>

            <motion.button :while-hover="{ scale: 1.1 }" :while-press="{ scale: 0.95 }"
                :transition="{ type: 'spring', stiffness: 300 }"
                class="w-110px h-35px  rounded-md flex items-center justify-center gap-x-1 border-1 border-stone-300 dark:border-stone-700">
                <div class="i-mingcute-play-line"></div>
                <div class="text-stone-950 dark:text-stone-100 text-sm">Video</div>
            </motion.button>
            <motion.button :while-hover="{ scale: 1.1 }" :while-press="{ scale: 0.95 }"
                :transition="{ type: 'spring', stiffness: 300 }"
                class="w-110px h-35px  rounded-md flex items-center justify-center gap-x-1 border-1 border-stone-300 dark:border-stone-700">
                <div class="i-mingcute-arrow-down-line"></div>
                <div class="text-stone-950 dark:text-stone-100 text-sm">Download</div>
            </motion.button>
        </div>
        <!-- #3:iframe -->
        <div class="rounded-lg shadow-md mt-5 overflow-hidden">
            <iframe src="https://vite.dev/" frameborder="0" height="850" width="100%" scrolling="no"></iframe>
        </div>
        <!-- #4 -->
        <div class="mt-10 w-full grid gap-6 cols-1 sm:cols-2 lg:cols-3">
            <motion.div v-for="(i, index) in featuresList" :key="i.title" :initial="{ opacity: 0, y: 100 }"
                :while-in-view="{ opacity: 1, y: 0 }" :transition="{ delay: index * 0.05, ease: [0.42, 0, 0.58, 1] }"
                class="cursor-default  hover:shadow-md hover:rounded-lg transition-all duration-500 flex items-center gap-x-5 h-30 bg-[rgba(183,183,255,0.05)] border-1 border-solid border-#E5E7EBFF dark:border-#3F3F46 rounded-md transition-shadow p-5">
                <div :class="i.icon + ' text-4xl shrink-0'"></div>
                <div class="flex flex-col">
                    <div class="text-lg font-bold text-stone-950 dark:text-white">{{ i.title }}</div>
                    <div class="text-sm text-stone-500 dark:text-stone-400">{{ i.description }}</div>
                </div>
            </motion.div>
        </div>
    </div>
</template>