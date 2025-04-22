import { defineStore } from "pinia";
import { ref, watch, onMounted, watchEffect } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<"light" | "dark">("light");

  /** 切换主题 */
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };
  watchEffect

  watch(theme, (val) => {
    localStorage.setItem("theme", val);
    document.documentElement.classList.toggle("dark", val === "dark");
  });

  onMounted(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      theme.value = "dark";
      document.documentElement.classList.add("dark");
    } else {
      theme.value = "light";
      document.documentElement.classList.remove("dark");
    }
  });

  return {
    theme,
    toggleTheme,
  };
});
