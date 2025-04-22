import { createPinia } from "pinia";

const pinia = createPinia();
export * from "./stores/theme"; // 导出主题模块
export default pinia;
