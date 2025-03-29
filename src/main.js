import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import axios from 'axios';
import router from './router';

createApp(App).use(router).mount('#app');
// app.config.globalProperties.$axios = axios; // Make axios aailable globally
// const app = createApp(App);
// app.mount('#app');