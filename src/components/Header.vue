<template>
    <header class="bg-gradient-to-r from-primary-background-dark to-primary-background-medium flex justify-between items-center bg-primary-background px-4 py-2 border-b border-solid border-primary-border">
        <div class="flex align-middle">
            <h2 class="text-white text-3xl font-medium">Task Manager</h2>
        </div>
        <div v-if="isHomeScreen">
            <BaseButton text="Add Task" @on-click="$emit('displayAddTaskForm')"/>
        </div>
    </header>
</template>

<script setup>
import { watch, ref } from 'vue';
import BaseButton from './BaseButton.vue';
import { useRoute } from 'vue-router';

const allowedPath = ['/'];
const isHomeScreen = ref(false);
const route = useRoute();
defineEmits(['addTask']);

watch(route, ()=>{
    if(allowedPath.includes(route.path)) {
        isHomeScreen.value = true;
        return;
    }
    
    isHomeScreen.value =  false;
})

</script>
