<script setup lang="ts">
interface AppMinus {
    width: string;
    height: string;
}

defineProps<AppMinus>();
</script>

<template>
    <svg :width="width" :height="height" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M28 56C43.4638 56 56 43.4638 56 28C56 12.536 43.4638 0 28 0C12.536 0 0 12.536 0 28C0 43.4638 12.536 56 28 56Z" fill="white" fill-opacity="0.5"/>
        <path d="M38.9757 30.1H16.5757C15.4277 30.1 14.4757 29.148 14.4757 28C14.4757 26.852 15.4277 25.9 16.5757 25.9H38.9757C40.1237 25.9 41.0757 26.852 41.0757 28C41.0757 29.148 40.1517 30.1 38.9757 30.1Z" fill="#1F1F1F"/>
    </svg>
</template>