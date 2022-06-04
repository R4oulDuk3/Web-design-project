import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';

createApp(App).use(router).mount('#app').component('vue-navigation-bar', VueNavigationBar);
