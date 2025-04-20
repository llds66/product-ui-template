<script setup lang="ts">
import { ref, computed } from "vue"
import { useScroll, useMotionValueEvent } from "motion-v"

const progressNum = ref(0)
const { scrollYProgress } = useScroll()

useMotionValueEvent(scrollYProgress, "change", (latest) => {
    progressNum.value = latest
})

const progressDeg = computed(() => `${progressNum.value * 360}deg`)
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
</script>

<template>
    <div v-if="progressNum > 0" class="hidden md:block">
        <div class="w-8 h-8 fixed bottom-8 right-5 z-50 rounded-full cursor-pointer flex items-center justify-center"
            :style="{
                background: `conic-gradient(#44403b ${progressDeg}, #e5e7eb ${progressDeg})`
            }">
            <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow" @click="scrollToTop">
                <div class="i-iconamoon-arrow-up-2-fill text-stone-700 hover:text-stone-950 text-2xl"></div>
            </div>
        </div>
    </div>
</template>
