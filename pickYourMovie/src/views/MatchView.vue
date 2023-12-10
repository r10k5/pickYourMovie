<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCardsStore } from '@/stores/cards';
import AppCard from '@/components/AppCard.vue';
import AppConfetti from '@/components/icons/AppConfetti.vue';

const cardsStore = useCardsStore();

cardsStore.getCards();

const router = useRouter();

function results() {
  router.push({ name: 'results' });
}
</script>

<template>
    <div class="div-match"> 
        <AppCard 
            v-for="i in 1 " 
            :img="cardsStore.cards[i].filename" 
            :name="cardsStore.cards[i].name" 
            :duration_all="cardsStore.cards[i].duration_all" 
            :genres="cardsStore.cards[i].genres" 
            class="card"
        >
        </AppCard>
        <p class="matchTable">
            Match!
        </p>
        <u class="resultsLink" @click="results">
            Перейти к результатам->
        </u>
    </div>
    <AppConfetti width="60%" class="confetti"> </AppConfetti>
    <AppConfetti width="60%" class="confetti2"> </AppConfetti>
    <div class="zhopa" @click="results">
    </div>
</template>
<style scoped>
.zhopa {
width: 40px;
height: 40px;
position: absolute;
right: 10px;
bottom: 10px;
background-color: rgb(42, 165, 79);
}
.div-match {
    height: 100%;
    width: 100%;
    display: grid; 
    justify-content: center;
}
.card {
    width:460px;
    height: 631px;
    margin: -68px 0 0 709px;
}
.matchTable {
    margin: 0px 802px;
    color: #EBEBEB;
    font-size: 80px;
    font-weight: 700;
    text-shadow:
    -2px 0 0 #7ED09E,
    -4px 0 0 #E8505B;
}
.resultsLink {
    margin: 0 739px;
    color: #E8505B;
    font-size: 32px;
    font-weight: 400;
}
.confetti, .confetti2 {
    position: absolute;
    bottom: -550px;
    flex-shrink: 0;
}
.confetti2 {
    transform: rotateY(-180deg);
    right: 0; 
}
</style>