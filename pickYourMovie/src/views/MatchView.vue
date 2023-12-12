<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useCardsStore } from '@/stores/cards';
import AppCard from '@/components/AppCard.vue';
import AppConfetti from '@/components/icons/AppConfetti.vue';
import { useSessionStore } from '@/stores/session';
import { computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

const cardsStore = useCardsStore();
const sessionStore = useSessionStore();
const userStore = useUserStore();

sessionStore.stopInfinityUpdate();

const router = useRouter();
const route = useRoute();

const session = computed(() => sessionStore.session);
const result = computed(() => session.value.result);

onMounted(() => {
    if (!session.value.uid && !route.params.uid) {
        router.push({ name: 'not-found' });
    }
    
    if (!session.value.uid && route.params.uid && userStore.name) {
        sessionStore.getSession(route.params.uid.toString(), userStore.name)
            .then(data => {
                if (data.error) {
                    router.push({ name: 'not-found' });
                    return;
                }

                if (data.status !== 'started') {
                    router.push({ name: 'not-found' });
                    return;
                }

                sessionStore.updateSessionLocal(data);
            });
        return;
    }
});

// cardsStore.getCards();

function results() {
  router.push({ name: 'results' });
}
</script>

<template>
    <div class="div-match"> 
        <AppCard 
            v-if="result.length > 0" 
            :img="result[0].card.filename" 
            :name="result[0].card.name" 
            :duration_all="result[0].card.duration_all" 
            :genres="result[0].card.genres" 
            class="card"
        >
        </AppCard>
        <p class="matchTable">
            Match!
        </p>
        <AppConfetti width="60%" class="confetti"> </AppConfetti>
        <AppConfetti width="60%" class="confetti2"> </AppConfetti>
    </div>
</template>
<style scoped>
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