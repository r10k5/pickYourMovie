<script setup lang="ts">

interface AppCloseIconProps {
    width: string;
    height: string;
}

defineProps<AppCloseIconProps>();
</script>

<template>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_275_109)">
        <path d="M29.9999 29.9999L20 20M20 20L10 10M20 20L30.0001 10M20 20L10 30.0001" stroke="#D7D7D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <filter id="filter0_d_275_109" x="-4" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_109"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_109" result="shape"/>
        </filter>
        </defs>
    </svg>
</template>