<script lang="ts" setup>

export type HistoryElem = {
    card: {
        name: string,
        genres: string,
        time: string,
    },
    isLiked: boolean,
}

interface SelectionHistoryProps {
    history: HistoryElem[];
}

defineProps<SelectionHistoryProps>();
</script>

<template>
    <div class="div-selected">
        <p v-for="elem in history" class="selected-movie" :style="{ color: elem.isLiked ? '#7ED09E' : '#E8505B' }" > {{ elem.card.fields.name }} ( {{ elem.card.fields.genres }} ) - {{ elem.card.time }} </p>
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