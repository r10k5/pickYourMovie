<script setup lang="ts">
import AppCopyIcon from './AppCopyIcon.vue';
</script>

<template>
    <div class="field"> 
        <div class="block">
            <p class="choosing-text">
            <slot></slot> </p>
        </div>
        <AppCopyIcon class="copy" width="46px" height="56px"/>
    </div>
</template>

<style scoped>
.field {
    width: 654px;
    height: 104px;
    border-radius: 100px;
    border: 2px solid #9B9B9B;
    padding: 28px 48px;
    justify-content: space-between;
    align-items:center;
    display:flex;
}
.block{
    width: 373;
    height: 40;
    background-color: rgb(124, 0, 0);
    margin:0 0;
}
.copy {
    flex-shrink: 0;
    margin:8px 1px;
}
.choosing-text {
    color: #9B9B9B;
    font-family: 'Inter';
    font-size: 28px;
    margin: 0 0;
    padding: 0;
}
</style>