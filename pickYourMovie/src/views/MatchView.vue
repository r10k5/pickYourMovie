<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useCardsStore } from '@/stores/cards';
import AppCard from '@/components/AppCard.vue';
import AppConfetti from '@/components/icons/AppConfetti.vue';
import { useSessionStore } from '@/stores/session';
import { computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

// Инициализация хранилищ
const cardsStore = useCardsStore();
const sessionStore = useSessionStore();
const userStore = useUserStore();

// Остановка автоматического обновления данных сессии
sessionStore.stopInfinityUpdate();

// Инициализация маршрутизатора и текущего маршрута
const router = useRouter();
const route = useRoute();

// Получение данных о текущей сессии и ее результате
const session = computed(() => sessionStore.session);
const result = computed(() => session.value.result);

// Обработка события после монтирования компонента
onMounted(() => {

    // Проверка наличия данных о сессии и параметров маршрута
    if (!session.value.uid && !route.params.uid) {
        router.push({ name: 'not-found' });
    }
    
     // Если отсутствует UID сессии, но присутствует UID в параметрах маршрута и имя пользователя, 
    // то выполняется запрос к серверу для получения данных о сессии
    if (!session.value.uid && route.params.uid && userStore.name) {
        sessionStore.getSession(route.params.uid.toString(), userStore.name)
            .then(data => {

                // Обработка ошибок и проверка статуса сессии
                if (data.error) {
                    router.push({ name: 'not-found' });
                    return;
                }

                if (data.status !== 'started') {
                    router.push({ name: 'not-found' });
                    return;
                }

                // Обновление данных о сессии
                sessionStore.updateSessionLocal(data);
            });
        return;
    }
});

// cardsStore.getCards();

// Функция для перехода на страницу результатов
function results() {
  router.push({ name: 'results' });
}
</script>

<template>
    <div class="div-match"> 
        <!-- Отображение карточки при наличии совпадения -->
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