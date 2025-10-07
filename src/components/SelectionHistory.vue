<script lang="ts" setup>
import type { History } from '@/stores/session';

interface SelectionHistoryProps {
    history: History[];
}

defineProps<SelectionHistoryProps>();
</script>

<template>
    <div class="div-selected">
        <p v-for="elem in history" class="selected-movie" :style="{ color: elem.isLike ? '#7ED09E' : '#E8505B' }" >
            {{ elem.user }} - {{ elem.card.name }} ({{ elem.card.genres.join(', ') }})
            <template v-if="elem.card.duration_all != 0">
                - {{ elem.card.duration_all }} минут
            </template>
        </p>
    </div>
</template>

<style scoped>
.div-selected {
    width: 20%;
    position: absolute;
}

.selected-movie {
    color: brown;
}

</style>