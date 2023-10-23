<script setup lang="ts">
interface AppStarProps {
    width: string;
    height: string;
}

defineProps<AppStarProps>();
</script>

<template>
    <svg :width="width" :height="height" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="60" fill="#E8505B"/>
        <path d="M60 47.0828C54 32.9995 33 34.4995 33 52.4996C33 70.4997 60 85.5002 60 85.5002C60 85.5002 87 70.4997 87 52.4996C87 34.4995 66 32.9995 60 47.0828Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="93.1057" y1="35.8192" x2="27.5736" y2="81.7053" stroke="white" stroke-width="2"/>
        <line x1="91.9586" y1="81.7053" x2="26.4264" y2="35.8191" stroke="white" stroke-width="2"/>
    </svg>
</template>