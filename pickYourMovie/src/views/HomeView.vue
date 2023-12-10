<script setup lang="ts">
import AppIcon from '@/components/icons/AppIcon.vue';
import AppLink from '@/components/AppLink.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function createSession() {
  router.push({ name: 'create-session' });
}
</script>

<template>
  <div class="home">
    <div class="text-content"> 
      <h2 class="header">
        Подберем фильм для вашего вечера
      </h2>
      <p class="description">
        Сервис подберет наилучшее решение для семьи и компании!
      </p>
      <AppLink link="about" class="link">
        Подробнее о сервисе ->
      </AppLink>
      <button type="button" class="button" @click="createSession">
        Попробовать
      </button>
    </div>
    <AppIcon width="100%" height="100%" class="image">
      
    </AppIcon>
</div>
</template>

<style scoped> 
.link {
  margin-top: 32px;
}
.home {
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
}
.text-content {
  display: flex;
  flex-direction: column;
  max-width: 764px;
  padding: 24px 0 12px 64px;
}
.text-content, .image {
  width: 100%;
}
.image {
  margin-left: 166px;
  max-width: 870px;
  max-height: 870px;
}
.header {
  color: #EBEBEB;
  font-size: 72px;
  font-weight: 400;
  margin: 0;
}
.description {
  color: #cecece;
  font-size: 40px;
  font-weight: 400;
  margin-top: 44px;
  font-style: normal;
  line-height: normal;
}
.button {
  cursor: pointer;
  border-radius: 60px;
  background: linear-gradient(180deg, #E8505B 0%, #8B3037 100%);
  margin-top: 320px;
  color: #E7E6E6;
  font-size: 40px;
  font-weight: 400;
  border: none;
  width: 764px;
  height: 120px;
  padding: 36px 0px;
  box-shadow: 0px 4px 4px 0px rgba(33, 23, 23, 0.50);
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