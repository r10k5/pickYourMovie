<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import AppUnlike from '@/components/icons/AppUnlike.vue';
import AppLike from '@/components/icons/AppLike.vue';

</script>

<template>
<div class="container">
    <AppUnlike width="120px" height="120px" class="unlike" />
    <AppCard class="card" />
    <AppLike width="120px" height="120px" class="unlike" />
</div>

</template>

<style scoped>
.container{
    height: 100%;
    width: 100%;
    display: flex; 
    justify-content: center;
    gap: 80px;
}
.unlike {
    margin-top: 352px;
}

@keyframes rotate {
    0% {
    transform: rotate(0deg);
    }
  100% {
    transform: rotate(-10deg);
    background-color: rgba(232, 80, 91, 0.25);
    }
}

.unlike:hover {
    animation: rotate;
    animation-iteration-count: infinite;
}
</style>