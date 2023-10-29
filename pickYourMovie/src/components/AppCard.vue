<script setup lang="ts">
import AppDiscription from '@/components/icons/AppDiscription.vue';

interface AppCardProps {
    img: string;
    name: string;
    time: string;
}
defineProps<AppCardProps>();

</script>

<template>
<div class="card">
    <slot />
    <img :src="img" alt="Изображение съела БД" class="img">
    <div>
        <p class="name">{{ name }}</p>
        <p class="text"> {{ time }}</p>
    </div>
    <AppDiscription class="app-discription" width="40px" height="40px" />
</div>
</template>

<style scoped>
.card {
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08) inset;
    width: 540px;
    height: 92%;

    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.app-discription{
    margin: auto auto 8px auto;
}

.img{
    margin-top: 16px;
    height: 400px;
    width: 300px;
    margin-top: 56px;
}
.name{
    color: #EBEBEB;
    font-size: 28px;
    text-align: center;
}
.text{
    color: #c9c7c7;
    font-size: 20px;
    text-align: center;
    margin: 0;
}
</style>