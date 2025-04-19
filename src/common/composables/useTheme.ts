import { ref, onMounted } from "vue";

export function useTheme() {
  const isDark = ref(false);

  const toggleDark = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      isDark.value = true;
      document.documentElement.classList.add("dark");
    }
  });

  return {
    isDark,
    toggleDark,
  };
}
