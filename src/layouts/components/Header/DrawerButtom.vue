<script setup lang='ts'>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";

const visible = ref(false);
const route = useRoute();
watch(route, () => {
    visible.value = false;
})
</script>

<template>
    <div>
        <Drawer v-model:visible="visible" header="Drawer">
            <template #header>
                <Logo />
            </template>
            <Navbar />
            <template #footer>
                <span class="text-sm text-slate-500">© Author</span>
            </template>
        </Drawer>
        <div @click="visible = true" class="flex p-2 rounded-md hover:bg-#f3f4f7 dark:hover:bg-#27272a transition-colors duration-200">
            <div class="i-mingcute-align-left-line h-5 w-5"></div>
        </div>
    </div>
</template>