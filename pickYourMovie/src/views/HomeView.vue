<script setup lang="ts">
import AppIcon from '@/components/icons/AppIcon.vue';
import AppLink from '@/components/AppLink.vue';
</script>

<template>
  <div class="text-content"> 
    <h2 class="header">
      Подберем фильм для вашего вечера
    </h2>
    <p class="description">
      Сервис подберет наилучшее решение для семьи и компании!
    </p>
    <AppLink to="about" class="link">
      Подробнее о сервисе ->
    </AppLink>
    <button type="button" class="button">
      Попробовать
    </button>
  </div>
  <div class="image">
    <AppIcon width="100%" height="100%" />
  </div>
</template>

<style scoped> 
.link {
  margin-top: 32px;
}

.text-content {
  display: flex;
  flex-direction: column;
  max-width: 764px;
  padding: 103px 0 76px 64px;
}
.text-content, .image {
  width: 100%;
}
.image {
  padding: 68px 64px 12px 0;
}
.header {
  color: #EBEBEB;
  font-size: 72px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 44px;
}
.description {
  color: #cecece;
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  font-style: normal;
  line-height: normal;
}
.button {
  border-radius: 60px;
  background: linear-gradient(180deg, #E8505B 0%, #8B3037 100%);
  margin: auto 0 0 0;
  color: #E7E6E6;
  font-size: 40px;
  font-weight: 400;
  border: none;
  width: 100%;
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