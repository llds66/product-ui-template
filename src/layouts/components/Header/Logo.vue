<script setup lang='ts'>
import { useRouter } from "vue-router";

const router = useRouter()
</script>

<template>
    <div @click="router.push('/')" class="flex items-center gap-x-4 justify-center md:justify-start cursor-pointer">
        <img src="/public/logo.svg" class="h-6 w-6">
        <span class="font-700">product-ui-template</span>
    </div>
</template>