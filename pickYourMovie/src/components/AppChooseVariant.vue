<script setup lang="ts">
import AppStar from '@/components/icons/AppStar.vue';
</script>

<template>
    <div class="field"> 
        <p class="choosing-text"> Категория </p>
        <AppStar class="star" width="28px" height="28px"/>
    </div>
</template>

<style scoped>
.field {
    width: 654px;
    border-radius: 6.25rem;
    border: 5px solid #EBEBEB;
    padding: 28px 48px;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.star {
    flex-shrink: 0;
}
.choosing-text {
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    padding: 0;
}
</style>