<script lang="ts" setup>

import AppChooseVariant from '@/components/AppChooseVariant.vue';
import AppMinus from '@/components/icons/AppMinus.vue';
import AppPlus from '@/components/icons/AppPlus.vue';
import AppDeleteMember from '@/components/icons/AppDeleteMember.vue';
import AppCheckMark from '@/components/icons/AppCheckMark.vue';
import { useRouter } from 'vue-router';


const router = useRouter();

function nextToSession() {
  router.push({ name: 'session' });
}

</script>

<template>
    <!-- смотреть компонент AppChooseVariant -->
    <div class="session">
        <div class="create-session">
            <AppChooseVariant class="category"> Категория </AppChooseVariant>
            <AppChooseVariant class="genre"> Жанр </AppChooseVariant>
        </div>
        <p class="warning">
            Ссылка для подключения и персональный код команды появится после заполнения всех полей
        </p>
        <div class= "members">
            <AppMinus class="minus"> </AppMinus>
            <p class="countMembers">
                2
            </p>
            <AppPlus class="plus"> </AppPlus>
            <div class="textBox"> 
                <p class="membersList">
                    Список участников
                </p>
            </div>
        </div>
        <div class="deleteMember">
            <AppDeleteMember class="deleteMemberButton"> </AppDeleteMember>
            <p class="excludeText">
                Исключить
            </p>
            <div class="confirmAndSave" @click="nextToSession">
                <p class="confirm">
                    Подтверждаю
                </p>
                <AppCheckMark class="checkMark"> </AppCheckMark>
            </div>
        </div>
    </div>
</template>

<style scoped>
 /* .session {
   height: 100%;
   width: 100%;
} */
.create-session {
    margin: 96px 0 0 176px;
    display: flex;
}
.confirmAndSave{
    display: flex;
    margin: 0 32px;
    border-radius: 10px;
    width: 208px;
    height: 48px;
    background-color: rgba(126, 208, 158, 1);
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