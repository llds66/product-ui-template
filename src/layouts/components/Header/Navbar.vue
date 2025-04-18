<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { motion } from 'motion-v'

const route = useRoute()
const router = useRouter()
const navs1 = router.options.routes
    .filter((r) => r.children) // 过滤出有子路由的路由
    .flatMap((r) =>
        r.children?.filter((child) => child.meta?.nav !== false)
    )
    .map((r: any) => ({
        label: r.name as string,
        path: r.path.startsWith('/') ? r.path : '/' + r.path,
    }));
</script>

<template>
    <nav class="flex flex-col md:flex-row items-center gap-y-6 md:gap-x-4 relative">
        <RouterLink v-for="nav in navs1" :key="nav.path" :to="nav.path"
            class="relative text-sm font-semibold px-1 transition-colors">
            {{ nav.label }}
            <motion.div v-if="route.path === nav.path" layout-id="underline"
                class="absolute bottom--1 left-0 right-0 h-[2px] bg-#000 dark:bg-white rounded" />
        </RouterLink>
    </nav>
</template>