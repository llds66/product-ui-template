import { createApp } from "vue";
import "./style.css";
import "virtual:uno.css";
import App from "./App.vue";
import router from "./router";
import pinia from "@pinia/index";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import 'lenis/dist/lenis.css';
import '@utils/applyDamping'

const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark',
    }
    },
  })
  .mount("#app");
