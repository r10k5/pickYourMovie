<script setup lang="ts">
import AppDiscription from '@/components/icons/AppDiscription.vue';
import { computed, ref } from 'vue';

interface AppCardProps {
    img: string;
    name: string;
    duration_all: number;
    genres: string[];
}
defineProps<AppCardProps>();

const nameRef = ref<HTMLElement | null>(null);
const rotateClass = ref('');
const rotateCard = () => {
    rotateClass.value = 'wrapper-rotate';
}
const disableRotation = () => {
    rotateClass.value = '';
}
const isBig = computed(() => {
    if (nameRef.value) {
        return nameRef.value.scrollWidth > nameRef.value.clientWidth
    }

    return false
})

</script>

<template>
<div :class="['card', rotateClass]">
    <slot />
    <img :src="img" alt="Изображение съела БД" class="img">
    <div class="info-container">
        <p ref="nameRef" class="name" :key="name">
            <span :class="{ 'name-marquee': isBig }">{{ name }}</span>
        </p>
        <p v-if="duration_all > 0" class="text"> {{ duration_all }} минут</p>
        <p class="genres"> {{ genres.join(', ') }}</p>
    </div>
    <div class="diacription-wrapper" @mouseenter="rotateCard" @mouseleave="disableRotation">
        <AppDiscription class="app-discription" width="40px" height="40px" />
    </div>
    
</div>
</template>

<style scoped>
.info-container {
    flex-shrink: 0;
    overflow: hidden;
}
.wrapper-rotate {
    transform: rotateX(180deg);
}
.diacription-wrapper {
    width: 100%;
    margin-top: auto;
    display: flex;
    z-index: 2;
}
.card {
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08) inset;
    width: 540px;
    height: 740px;

    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    transition: .6s transform ease-in-out;
}

.app-discription{
    margin: auto auto 8px auto;
}

.img{
    margin-top: 16px;
    height: 54%;
    width: 56%;
    margin-top: 56px;
}
.name {
    color: #EBEBEB;
    font-size: 28px;

    overflow: hidden;
    white-space: nowrap;
    width: 320px;
    margin: 0 auto;
    text-align: center;
}
.name-marquee {
    text-align: center;
    display: block;
    animation: marquee 6s linear infinite; 
}
.text , .genres{
    color: #c9c7c7;
    font-size: 20px;
    text-align: center;
    margin: 0;
    padding: 0 8px;
}

@keyframes marquee {
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(-100%); 
  }
}

@media screen and (max-width: 900px){
    .card {
        width: 90%;
        height: 80%;
    }
    .img {
        width: 80%;
        height: 60%;
    }
    .text , .genres, .name {
        font-size: 12px;
    }

}
</style>