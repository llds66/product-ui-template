<script setup lang='ts'>
import { ref } from 'vue'
import { useTheme } from '@composables/useTheme'
const toolList = ref([
    { url: '/', icon: 'i-mingcute-notification-line' },
    { url: 'https://tiktok.com', icon: 'i-mingcute-tiktok-line' },
    { url: 'https://youtube.com', icon: 'i-mingcute-youtube-line' },
    { url: 'https://github.com/llds66/product-ui-template', icon: 'i-mingcute-github-line' },
])
const { toggleDark, isDark } = useTheme()
</script>

<template>
    <div class="flex justify-end items-center gap-x-1 font-size-xl">
        <div @click="toggleDark"
            class="flex p-2 rounded-md hover:bg-#f3f4f7 dark:hover:bg-#27272a transition-colors duration-200">
            <div :class="isDark ? 'i-mingcute-moon-line' : 'i-mingcute-sun-line'"></div>
        </div>
        <a v-for="item in toolList" target="_blank" :key="item.url" :href="item.url"
            class="flex p-2 rounded-md hover:bg-#f3f4f7 dark:hover:bg-#27272a transition-colors duration-200">
            <div :class="item.icon"></div>
        </a>
    </div>
</template>