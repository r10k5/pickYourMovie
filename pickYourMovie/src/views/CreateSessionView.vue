<script lang="ts" setup>
import AppChooseVariant from '@/components/AppChooseVariant.vue';
import AppMinus from '@/components/icons/AppMinus.vue';
import AppPlus from '@/components/icons/AppPlus.vue';
import AppDeleteMember from '@/components/icons/AppDeleteMember.vue';
import AppCheckMark from '@/components/icons/AppCheckMark.vue';
import AppLinkAndCodeVue from '@/components/AppLinkAndCode.vue';
import { useRoute, useRouter } from 'vue-router';
import { genres } from '@/scripts/genres';
import { types } from '@/scripts/types';
import { computed, ref, onUnmounted, onMounted, watch } from 'vue';
import AppMyModal from '@/components/AppMyModal.vue';
import AppDotsElastic from '@/components/AppDotsElastic.vue';
import { useSessionStore } from '@/stores/session';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const route = useRoute();
const sessionStore = useSessionStore();
const user = useUserStore();
const session = computed(() => sessionStore.session);
const sessionError = computed(() => sessionStore.error);
const sessionStatus = computed(() => session.value.status);
const sessionUsersString = computed(() => ', ' + session.value.users.join(', '));

async function createSession() {
    await sessionStore.createSession(userName.value, currentType.value, currentGenre.value, limit.value);
}

async function startSession() {
    await sessionStore.startSession();
}

onMounted(() => {
    sessionStore.clearSession();
    sessionStore.stopInfinityUpdate();
});

onUnmounted(() => {
    sessionStore.clearSession();
    sessionStore.stopInfinityUpdate();
});

watch(sessionStatus, (value) => {
    if (value === 'started' && session.value.uid) {
        router.push({ name: 'session', params: { uid: session.value.uid } });
    }
});

const currentType = ref(1);
const currentGenre = ref(1);
const limit = ref(2);

function changeType(value: string) {
    const choosenType = types.find((item) => item.value === value) 
    if (choosenType) {
        currentType.value = choosenType.id;
    }
}

function changeGenre(value: string) {
    const choosenGenre = genres.find((item) => item.name === value) 
    if (choosenGenre) {
        currentGenre.value = choosenGenre.id;
    }
}

function decreaseLimit() {
    if (limit.value > 2) {
        limit.value--;
    }
}

function increaseLimit() {
    if (limit.value < 6) {
        limit.value++;
    }
}

const isModalOpen = ref(true);
const userName = ref(useUserStore().name);

if (userName.value.length > 0) {
    if (route.params.uid) {
        sessionStore.connectToSession(route.params.uid.toString(), userName.value);
    }
}

async function saveUser() {
    if (userName.value.length > 3) {
        isModalOpen.value = false;

        if (route.params.uid) {
            await sessionStore.connectToSession(route.params.uid.toString(), userName.value);
        }

        return;
    }
    alert('Имя должно быть больше трех символов');
}

const sessionLink = computed(() => {
    if (session?.value?.uid === undefined) {
        return undefined;
    }

    return `${window.origin}/connect-session/${session?.value?.uid}`;
});

const usersCount = computed(() => {
    if (session?.value?.users) {
        return session?.value?.users.length + 1;
    }

    return 1;
})
</script>

<template>
    <div class="container">
    <!-- смотреть компонент AppChooseVariant -->
    <div class="session">
        <AppMyModal v-if="isModalOpen && !user.name.length" :has-close="false">
            <div class="modal-container">
                <p class="modal-header-text"> Вы собираетесь присоединиться к сессии! Как к Вам обращаться? </p>
                <p class="modal-text">Имя будет отображаться для участников сессии.</p>
                <input v-model="userName" type="text" class="modal-input"/>
            </div>

            <button class="modal-button" @click="saveUser">GO</button>
        </AppMyModal>

        <div class="create-session">
            <AppChooseVariant :current-id="currentType" :list="types" class="category" @choose="changeType"> 
                Категория:  
            </AppChooseVariant>
            <AppChooseVariant :current-id="currentGenre" :list="genres" class="genre" @choose="changeGenre"> 
                Жанр: 
            </AppChooseVariant>
        </div>

        <p v-if="sessionError.length">
            {{ sessionError }}
        </p>

        <p class="warning">
            Ссылка для подключения и персональный код команды появится после заполнения всех полей
        </p>

        <div class= "members">
            <template v-if="!session.uid">
                <AppMinus width="56" height="56" class="minus" @click="decreaseLimit" />

                <p class="countMembers">
                    {{ limit }}
                </p>

                <AppPlus width="56" height="56" class="plus" @click="increaseLimit" />
            </template>

            <div class="textBox"> 
                <p class="membersList">
                    {{ session?.creatorName ?? userName }}
                    <template v-if="session?.users?.length">
                        {{ sessionUsersString }}
                    </template>
                </p>
            </div>
        </div>

        <div class="deleteMember">
            <AppDeleteMember width="78" height="50" class="deleteMemberButton" />
            <p class="excludeText">
                Исключить
            </p>
            <div v-if="!sessionStore.session?.uid" class="confirmAndSave" @click="createSession">
                <p class="confirm">
                    Подтверждаю
                </p>
                <AppCheckMark width="40" height="47" class="checkMark" />
            </div>
        </div>

        <div class="linkAndCode" v-if="sessionStore.session?.uid">
            <AppLinkAndCodeVue class="linkTextBox" :link="sessionLink"> 
                Ссылка для подключения
            </AppLinkAndCodeVue>
        </div>

        <div class="membersCounter">
            <p class="membersTitle">
                Участники
            </p>

            <p class="joinedMembers">
                {{ usersCount }}/{{ limit }}
            </p>

            <AppDotsElastic class="dotsElastic"></AppDotsElastic>

            <div v-if="sessionStore.session?.uid && user.name === session.creatorName" class="goButton" @click="startSession">
                <p class="goTitle">Go</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.container {
    display:flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    height: 100vh;
}
.modal-button {
    min-height: 60px;
    min-width: 120px;
    flex-shrink: 0;
    background-color: #E44F5A;
    border-radius: 30px;
    border: none;
    box-shadow: 0 4px 4px 0 #21171770 ;

    font-size: 32px;
    font-weight: 600;
    color: #EBEBEB;

    position: absolute;
    bottom: 32px;
    right: 16px;
}
.modal-input {
    flex-shrink: 0;
    border-radius: 10px;
    background: #1F1F1F;
    width: 100%;
    border: none;
    min-width: 552px;
    min-height: 48px;

    color: #7ED09E;
    padding: 12px;
    font-size: 24px;
    font-style: italic;
    font-weight: 200;
    margin-top: 36px;
}
.modal-container {
    min-width: 552px;
    min-height: 144px;
    width: 66%;
    margin-top: 64px;
    margin-left: 76px;
}
.modal-text {
    color: #c5c5c5;
    font-size: 16px;
    font-weight: 400;
    margin-top: 24p;
}
.modal-header-text {
    color: #EBEBEB;
    font-size: 40px;
    font-weight: 700;
}
  .session {
   height: 100%;
   width: 100%;
} 
.create-session {
    margin: 96px 0 0 176px;
    display: flex;
}
.linkTextBox{
    margin: 32px 176px;
}
.confirmAndSave{
    display: flex;
    margin: 0 32px;
    border-radius: 10px;
    width: 208px;
    height: 48px;
    background-color: rgba(126, 208, 158, 1);
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(33, 23, 23, 0.50);
}
.confirm{
    color: #363636;
    font-family: 'Inter';
    font-size: 20px;
    margin: 12px 12px;
}
.checkMark{
    width: 40px;
    height: 48px;
    margin: 0;
}
.deleteMember{
    display: flex;
    margin: 32px 1098px;
}
.excludeText{
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 24px;
    margin: 8px 16px;
}
.deleteMemberButton{
    height: 48px;
    width: 76px;
}
.textBox {
    width: 1064px;
    height: 72px;
    margin: 0 64px;
    background-color: rgba(31, 31, 31, 1);
}
.membersList{
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 28px;
    margin: 19px 32px;
}
.members {
    display: flex;
    margin: 64px 0 0 200px;
}
.membersCounter {
    display: flex;
    margin: 32px 696px;
}
.membersTitle {
    flex-direction: column;
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 36px;
    margin: 17px 0;
}
.joinedMembers {
    flex-direction: column;
    color: #9B9B9B;
    font-family: 'Inter';
    font-size: 64px;
    margin: 0 0 0 40px;
}
.dotsElastic {
    margin: 32px 96px;
}
.goButton {
    width: 240px;
    height: 104px;
    background: linear-gradient(180deg, #E8505B 0%, #8B3037 100%);
    margin:0 352px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0px 4px 4px 0px rgba(33, 23, 23, 0.50);
}
.goTitle {
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 64px;
    margin: 13px 75px;
    
}
.countMembers {
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 40px;
    margin: 12px 55px;
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

.minus, .plus {
    cursor: pointer;
    user-select: none;
}

.minus{
    height: 56px;
    width: 56px;
    flex-direction: column;
    margin: 8px 0;
}
.plus{
    height: 56px;
    width: 56px;
    margin: 8px 0;
}

    
</style>