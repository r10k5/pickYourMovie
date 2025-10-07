<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader class="header"/>
  <div class="root">
    <RouterView />
  </div>
</template>

<style scoped>
.header {
  width: max-content;
}
.root {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #363636;
  display: flex; 
  gap: 166px;
}

@media (max-width: 1360px) {
  #app {
    gap: 24px;
    flex-direction: column-reverse;
  }
}

</style>