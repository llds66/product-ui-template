import { defineConfig, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
  dark: 'class',
  presets: [presetWind4(), presetIcons()],
})
