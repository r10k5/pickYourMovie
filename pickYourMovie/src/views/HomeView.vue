<script setup lang="ts">
import AppIcon from '@/components/icons/AppIcon.vue';
</script>

<template>
  <div class="text"> 
    <h2 class="header">
      Подберем фильм для вашего вечера
    </h2>
    <p class="description">
      Сервис подберет наилучшее решение для всей семьи бла бла бла
    </p>
    <button type="button" class="button">
      Попробовать
    </button>
  </div>
  <div class="image">
    <AppIcon width="auto" height="auto" />
  </div>
</template>

<style scoped> 
.text {
  display: flex;
  flex-direction: column;
}
.text, .image {
  width: 100%;
}
.header {
  color: #EBEBEB;
  font-size: 80px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 44px;
}
.description {
  color: #EBEBEB;
  font-size: 40px;
  font-weight: 400;
  margin: 0;
}
.button {
  border-radius: 60px;
  background: linear-gradient(180deg, #E8505B 0%, #8B3037 100%);
  margin: auto 0;
  color: #FFF;
  font-size: 40px;
  font-weight: 400;
  border: none;
  width: 100%;
  padding: 36px 0px;
}
@media (max-width: 1780px) {
  .description {
    font-size: 20px;
  }
  .header {
    font-size: 40px;
  }
  .button {
    font-size: 20px;
  }
}

</style>