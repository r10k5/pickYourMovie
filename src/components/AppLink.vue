<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface AppLinkProps {
    link: string;
}

defineProps<AppLinkProps>();

</script>

<template>
    <RouterLink :to="{ name: link }" class="link">
        <slot />
    </RouterLink>
</template>

<style scoped>
.link {
    color: #9B9B9B;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration-line: underline;
}
</style>