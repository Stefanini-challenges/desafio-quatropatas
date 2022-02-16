import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
// import router from './router';

const appInstance = createApp(App);

appInstance.use(store);
// appInstance.use(router);
appInstance.mount('#app');
