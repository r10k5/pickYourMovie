<script setup lang="ts">
import AppLogo from './icons/AppLogo.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="app-header">
        <AppLogo width="106px" height="92px" class="app-header__logo" />
        <h1 v-if="route.meta?.title" class="app-header__text">
        <!-- Получаем заголовок; ? - если заголовка нет, то получим undefined -->
            {{ route.meta.title }}
             <!--Передаем в темплейт, чтобы отобразить заголовок -->
        </h1>
    </div>
</template>

<style scoped>
.app-header {
    padding: 42px 0 0 64px;
    display: flex;
    width: 100%;
    align-items: center;
}

.app-header__text {
    color: #EBEBEB;
    font-size: 80px;
    margin: 0;
    font-weight: 400;
    line-height: 1;
    width: max-content;
}

.app-header__logo {
    flex-shrink: 0;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.30));
}
</style>