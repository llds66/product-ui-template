<script setup lang='ts'>
import DrawerButtom from './DrawerButtom.vue'
import Logo from './Logo.vue'
import Navbar from './Navbar.vue'
import Tools from './Tools.vue'
</script>

<template>
  <header class="sticky top-0 z-40 backdrop-blur-lg bg-#ffffff/70 dark:bg-#09090b/70">
    <div class="container max-w-screen-2xl px-4 md:px-8 gap-2 mx-auto h-14 flex justify-between items-center">
      <div class="flex-1 md:hidden">
        <DrawerButtom />
      </div>
      <div class="flex-1 hidden md:block">
        <Logo />
      </div>
      <Navbar class="hidden md:flex" />
      <div class="flex-1">
        <Tools />
      </div>
    </div>
  </header>
</template>
