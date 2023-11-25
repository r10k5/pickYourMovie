<script lang="ts" setup>
import type { Card } from '@/stores/cards';


export type HistoryElem = {
    card: Card,
    isLiked: boolean,
}

interface SelectionHistoryProps {
    history: HistoryElem[];
}

defineProps<SelectionHistoryProps>();
</script>

<template>
    <div class="div-selected">
        <p v-for="elem in history" class="selected-movie" :style="{ color: elem.isLiked ? '#7ED09E' : '#E8505B' }" >
            {{ elem.card.name }} ({{ elem.card.genres.join(', ') }})
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