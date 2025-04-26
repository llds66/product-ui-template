<script setup lang="ts">
import { motion } from "motion-v"

defineProps({
    mainTitle: {
        type: String,
        default: "Clean and Minimal Product"
    },
    subTitle: {
        type: String,
        default: "Don't just take our word for it"
    }
})
</script>

<template>
    <motion.div :initial="{ opacity: 0, scale: 0.5 }" :animate="{ opacity: 1, scale: 1 }" :transition="{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }">
        <div class="text-3xl font-medium text-stone-950 dark:text-white text-center">
            {{ mainTitle }}
        </div>
        <div class="text-center text-gray-400 mt-4">
            {{ subTitle }}
        </div>
    </motion.div>
</template>