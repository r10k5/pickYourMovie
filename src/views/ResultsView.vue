<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCardsStore } from '@/stores/cards';
import AppCard from '@/components/AppCard.vue';

const cardsStore = useCardsStore();

cardsStore.getCards();

const router = useRouter();

</script>
<template>
    <div class="resultsView">
    <div class="results">
        <AppCard 
            v-for="i in 1 " 
            :img="cardsStore.cards[i].filename" 
            :name="cardsStore.cards[i].name" 
            :duration_all="cardsStore.cards[i].duration_all" 
            :genres="cardsStore.cards[i].genres" 
            class="card"
            style="width:540px; height: 740px;"
        >
        </AppCard>
        <AppCard 
            v-for="i in 1 " 
            :img="cardsStore.cards[i].filename" 
            :name="cardsStore.cards[i].name" 
            :duration_all="cardsStore.cards[i].duration_all" 
            :genres="cardsStore.cards[i].genres" 
            class="card2"
            style="width:400px; height: 560px; margin-top: 136px; margin-left: 128px;"
        >
        </AppCard>
        <AppCard 
            v-for="i in 1 " 
            :img="cardsStore.cards[i].filename" 
            :name="cardsStore.cards[i].name" 
            :duration_all="cardsStore.cards[i].duration_all" 
            :genres="cardsStore.cards[i].genres" 
            class="card"
            style="width:400px; height: 560px; margin-top: 136px; margin-left: 96px;"
        >
        </AppCard>
    </div>
    <div class="rating">
        <p class="firstPlace">1 место!</p>
        <p class="secPlace">2 место</p>
        <p class="thPlace">3 место</p>
    </div>
</div>
<p class="rec">
        Рекомендуем к рассмотрению:
    </p>
</template>
<style scoped>
.resultsView {
    display: flex;
    flex-direction: column;
    position: absolute;
}
.results {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:row;
    justify-content: center;
    margin-left: 144px;
    margin-top: -80px;
}
.rec {
    position: absolute;
    margin-top: -48px;
    margin-left: 884px;
    color: #EBEBEB;
    font-size: 48px;
    font-weight: 700;
}
.rating {
    display:flex;
    margin-left: 232px;
}
.firstPlace, .secPlace, .thPlace {
    color: #EBEBEB;
    font-family: 'Inter';
    font-weight: 700;
}
.firstPlace {
    font-size: 80px;
    text-shadow:
    -2px 0 0 #7ED09E,
    -4px 0 0 #E8505B;
    margin-top: 18px;
    margin-left: 96px;
}
.secPlace {
    font-size: 48px;
    text-shadow: -2px 0 0 #7ED09E;
    margin-top: 0;
    margin-left: 328px;
}
.thPlace {
    font-size: 48px;
    text-shadow: -2px 0 0 #7ED09E;
    margin-top: 0;
    margin-left: 304px;
}
</style>