import { defineConfig, presetWind4, presetIcons } from "unocss";

export default defineConfig({
  dark: 'class',
  presets: [presetWind4(), presetIcons()],
});
