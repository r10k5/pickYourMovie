<script setup lang="ts">

interface AppStarProps {
    width: string;
    height: string;
}

defineProps<AppStarProps>();
</script>

<template>
    <svg :width="width" :height="height" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="60" fill="#7ED09E"/>
        <path d="M60 48.0828C54 33.9995 33 35.4995 33 53.4996C33 71.4997 60 86.5002 60 86.5002C60 86.5002 87 71.4997 87 53.4996C87 35.4995 66 33.9995 60 48.0828Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>