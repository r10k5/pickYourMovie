<script lang="ts" setup>

import AppChooseVariant from '@/components/AppChooseVariant.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function nextToSession() {
  router.push({ name: 'session' });
}

</script>

<template>
    <!-- смотреть компонент AppChooseVariant -->
    <div class="create-session">
        <AppChooseVariant />
        <div class="next" @click="nextToSession"></div>
    </div>
    
</template>

<style scoped>
.create-session {
    margin: 228px 0 0 176px;
}

.next {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
}
    
</style>