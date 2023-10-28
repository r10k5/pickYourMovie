<script lang="ts" setup>

import AppChooseVariant from '@/components/AppChooseVariant.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function nextToSession() {
  router.push({ name: 'session' });
}

</script>

<template>
    <!-- смотреть компонент AppChooseVariant -->
    <div class="session">
    <div class="create-session">
        <AppChooseVariant class="category"> Категория </AppChooseVariant>
        <AppChooseVariant class="genre"> Жанр </AppChooseVariant>
        <div class="next" @click="nextToSession"></div>
    </div>
    <p class="warning">
        Ссылка для подключения и персональный код команды появится после заполнения всех полей
    </p>
    </div>
</template>

<style scoped>
.create-session {
    margin: 228px 0 0 176px;
    display: flex;
}

.genre {
    margin: 0 132px;
}
.warning {
    flex-direction: column;
    color: #E8505B;
    font-family: 'Inter';
    font-size: 28px;
    margin: 64px 232px;
}
.next {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
}
    
</style>