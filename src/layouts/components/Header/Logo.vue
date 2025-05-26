<script setup lang='ts'>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex items-center gap-x-4 justify-center md:justify-start cursor-pointer" @click="router.push('/')">
    <img src="/logo.svg" class="h-6 w-6">
    <span class="font-700">product-ui-template</span>
  </div>
</template>
