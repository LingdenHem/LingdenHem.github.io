import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Page1 from './pages/Page1.vue';
import Page2 from './pages/Page2.vue';
import { defineAsyncComponent } from 'vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/vue-app/page1', component: Page1 },
      { path: '/vue-app/page2', component: Page2 },
      { path: '/vue-app', redirect: '/vue-app/page1' },
    ],
  });

const app = createApp(App);

app.use(router);

app.component('cat-facts', defineAsyncComponent(() => import('./components/CatFacts.vue')))

app.mount('#app');
