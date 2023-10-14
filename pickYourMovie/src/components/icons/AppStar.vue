<script setup lang="ts">
interface AppStarProps {
    width: string;
    height: string;
}

defineProps<AppStarProps>();
</script>

<template>
    <svg :width="width" :height="height" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_72_1530)">
        <path d="M14.5 0L19.7496 8.93146L29 14L19.7496 19.0685L14.5 28L9.25044 19.0685L0 14L9.25044 8.93146L14.5 0Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_72_1530" x="0" y="0" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="3"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.157617 0 0 0 0 0.157617 0 0 0 0 0.157617 0 0 0 0.75 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_1530"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_1530" result="shape"/>
        </filter>
        </defs>
    </svg>
</template>