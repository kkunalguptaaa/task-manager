<template>
  <Header @display-add-task-form="displayAddTaskForm" />
  <RouterView v-model:isAddTaskFormVisible="isAddTaskFormVisible" />
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const isAddTaskFormVisible = ref(false);

const displayAddTaskForm = () => {
  isAddTaskFormVisible.value = true;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

textarea:focus:focus-visible,
input:focus:focus-visible {
  outline: none;
}
</style>
