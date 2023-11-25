<script setup lang="ts">
import AppStar from '@/components/icons/AppStar.vue';
import type { HtmlHTMLAttributes } from 'vue';

// Атрибуты компонента
export interface AppChooseVariantProps {
    list: {
        id: number;
        name: string;
        value?: string;
    }[],
    currentId: number
}
defineProps<AppChooseVariantProps>();

// Событие, который генерирует компонент
export interface AppChooseVariantEmits {
    (e: 'choose', name: string): void;
}
const emit = defineEmits<AppChooseVariantEmits>();

</script>

<template>
    <div class="field"> 
        <div class="choosing-text">
            <slot></slot> 
            <select class="select-variant" @change="emit('choose', ($event.target as HTMLSelectElement).value)"> 
                <option v-for="item in list" :key="item.id" :value="item.value ?? item.name" :selected="item.id === currentId">{{ item.name }}</option>
            </select>  
        </div>
        <AppStar class="star" width="28px" height="28px"/>
    </div>
</template>

<style scoped>
.select-variant {
    background-color: transparent;
    color:#EBEBEB;
    width: 280px;
    font-size: 22pt;
    border: none;
}
.field {
    width: 654px;
    height: 104px;
    border-radius: 100px;
    border: 5px solid #EBEBEB;
    padding: 28px 48px;
    justify-content: space-between;
    align-items: center;
    display: flex;
}

.star {
    flex-shrink: 0;
}
.choosing-text {
    color: #EBEBEB;
    font-family: 'Inter';
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    padding: 0;
}
</style>