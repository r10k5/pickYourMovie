<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import AppUnlike from '@/components/icons/AppUnlike.vue';
import AppLike from '@/components/icons/AppLike.vue';
import { ref, computed } from 'vue';
import cards from '@/views/cards.json';

let like:boolean = true; 

const rotateCard = ref('rotate(0deg)');
const colorCard = ref('transparent');
const colorNotify = ref('color');

const cardIndex = ref(0);
const card = computed(() => cards[cardIndex.value]);
const cardImg = computed(() => {
    return new URL(`../assets/images/${card.value.img}`, import.meta.url).href; 
})

const followMouse = (e: MouseEvent) => {
    const cordX = e.clientX;
    const widthScreen = window.innerWidth / 2;

    if (cordX > widthScreen) {
        rotateCard.value = 'rotate(10deg)';
        colorCard.value = 'rgba(126, 208, 158, 0.25)'; //green
        return
    }

    rotateCard.value = 'rotate(-10deg)';
    colorCard.value = 'rgba(232, 80, 91, 0.25)';
}

const nextCard = (e:MouseEvent) => {
    const cordX = e.clientX;
    const widthScreen = window.innerWidth / 2;
    
    cardIndex.value = (cardIndex.value+1) % cards.length;
    if (cordX > widthScreen) {
        // счетчик понравившихся
        like = true;
        colorNotify.value = '#7ED09E'

        return
    } 
    like = false;
    colorNotify.value = '#E8505B'
    // счетчик непонравившихся
}

</script>

<template>
<div class="container" @mouseover="followMouse" @click="nextCard">
    <AppUnlike width="120px" height="120px" class="unlike-icon" />
    <AppCard :img="cardImg" :name="card.name" :time="card.time" :genres="card.genres" :style="{ transform: rotateCard }" class="card"> 
        <div class="filter-color" :style="{ backgroundColor: colorCard }" />
    </AppCard>
    <AppLike width="120px" height="120px" class="unlike-icon" />
    <div>
        <p class="selected-movie" :style="{ color: colorNotify }" > {{ card.name}} ( {{ card.genres }} ) - {{ card.time }} </p>
    </div>
</div>

</template>

<style scoped>

.selected-movie {
    color: brown;
    position: absolute;
}
.filter-color {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    transition: .6s background-color ease-in-out;
}
.card {
    transition: .6s transform ease-in-out;
}
.container{
    height: 100%;
    width: 100%;
    display: flex; 
    justify-content: center;
    gap: 80px;
}
.unlike-icon {
    margin-top: 352px;
}

.unlike:hover {
    animation: rotate;
    animation-iteration-count: infinite;
}
</style>