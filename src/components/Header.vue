<template>
  <header
    class="bg-primary-background flex items-center justify-between border-b border-solid border-primary-border bg-gradient-to-r from-primary-background-dark to-primary-background-medium px-4 py-2"
  >
    <div class="flex align-middle">
      <h2 class="text-3xl font-medium text-white">Task Manager</h2>
    </div>
    <div v-if="isHomeScreen">
      <BaseButton text="Add Task" @on-click="$emit('displayAddTaskForm')" />
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

watch(route, () => {
  if (allowedPath.includes(route.path)) {
    isHomeScreen.value = true;
    return;
  }

  isHomeScreen.value = false;
});
</script>
