<script setup lang='ts'>
import Header from './components/Header/index.vue'
import MainContent from './components/MainContent/index.vue'
import Footer from './components/Footer/index.vue'
import { AnimatePresence, motion } from 'motion-v'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <Header />
    <MainContent>
        <AnimatePresence mode="wait">
            <motion.div layout :key="route.fullPath" :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: 20 }" :transition="{ duration: 0.3 }">
                <RouterView />
            </motion.div>
        </AnimatePresence>
    </MainContent>
    <Footer />
</template>