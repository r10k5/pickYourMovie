<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import AppUnlike from '@/components/icons/AppUnlike.vue';
import AppLike from '@/components/icons/AppLike.vue';
import { ref, computed, onMounted } from 'vue';
import SelectionHistory from '@/components/SelectionHistory.vue';
import { useRoute, useRouter } from 'vue-router';
import { useSessionStore } from '@/stores/session';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const route = useRoute();
const sessionStore = useSessionStore();
const userStore = useUserStore();

const session = computed(() => sessionStore.session);

onMounted(() => {
    if (!session.value.uid) {
        if (route.params.uid) {
            if (userStore.name) {
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
                        sessionStore.runInfinityUpdate();
                    });
                return;
            }
        }
    }

    router.push({ name: 'not-found' });
});

function match() {
  router.push({ name: 'match' });
}

const rotateCard = ref('rotate(0deg)');
const colorCard = ref('transparent');

const cardIndex = ref(0);
const card = computed(() => session.value.cards[cardIndex.value]);

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

const nextCard = (e: MouseEvent) => {
    const cordX = e.clientX;
    const widthScreen = window.innerWidth / 2;
    const card = session.value.cards[cardIndex.value];
    cardIndex.value = cardIndex.value + 1;

    if (cordX > widthScreen) {
        sessionStore.likeCard(card);
        // счетчик понравившихся
        return
    }
    sessionStore.unlikeCard(card);
    // счетчик непонравившихся
}

</script>

<template>
    <div v-if="session && card" class="container" @mouseover="followMouse" @click="nextCard">
        <div class="div-card"> 
            <AppUnlike width="120px" height="120px" class="unlike-icon" />
            <AppCard :img="card.filename" :name="card.name" :duration_all="card.duration_all" :genres="card.genres" :style="{ transform: rotateCard }" class="card"> 
                <div class="filter-color" :style="{ backgroundColor: colorCard }" />
            </AppCard>
            <AppLike width="120px" height="120px" class="unlike-icon" />
            
        </div>
        <SelectionHistory :history="session.history" class="selection-history" />
    </div>
    <div class="zhopa" @click="match"></div>
</template>

<style scoped>
.selection-history {
    margin-left: 32px;
    margin-top: 16px;
    height: 760px;
    background-color: rgba(114, 114, 114, 0.192);
    overflow: hidden;

    overflow-y: auto
}
.zhopa {
width: 40px;
height: 40px;
position: absolute;
right: 10px;
bottom: 10px;
background-color: brown;
}
.div-card {
    height: 100%;
    width: 100%;
    display: flex; 
    justify-content: center;
    gap: 80px;
    flex-grow: 1;
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
    display: flex;
    width: 100%;
}
.unlike-icon {
    margin-top: 320px;
}

.unlike:hover {
    animation: rotate;
    animation-iteration-count: infinite;
}

@media screen and (max-width: 900px) {
    .container {
        flex-direction: column;
    }
    .div-card {
        gap: 60px;
    }

}
</style>