<template>
  <div>
    <router-link to="/vue-app/page1">Page 1</router-link>
    <router-link to="/vue-app/page2">Page 2</router-link>
    <router-view />
  </div>
</template>

<script>
import Page1 from './pages/Page1.vue';
import Page2 from './pages/Page2.vue';

export default {
  components: {
    Page1,
    Page2  
  },
};
</script>