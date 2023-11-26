<script setup lang="ts">
import AppCopyIcon from "@/components/icons/AppCopyIcon.vue";
</script>

<template>
    <div class="field"> 
        <div class="block">
            <p class="choosing-text">
            <slot></slot> </p>
        </div>
            <u class="linktextbox">
                https://github.com...
            </u>
        <AppCopyIcon class="copy" width="46px" height="56px"/>
    </div>
</template>

<style scoped>
.linktextbox {
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 40px;
    margin: 0 0;
    padding: 0;
    font-weight: 440px;
}
.field {
    width: 654px;
    height: 104px;
    border-radius: 100px;
    border: 2px solid #9B9B9B;
    padding: 28px 48px;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:relative;
}
.block{
    width: max-content;
    height: 40;
    background-color: rgba(54, 54, 54, 1);
    margin:0 0;
    position:absolute;
    top:-20px;
    left: 10%;
    padding: 0 4px;
}
.copy {
    flex-shrink: 0;
    margin:8px 1px;
    width: 46px;
    height: 56px;
}
.choosing-text {
    color: #9B9B9B;
    font-family: 'Inter';
    font-size: 28px;
    margin: 0 0;
    padding: 0;
}
</style>