<template>
    <AddTaskModal v-model:visible="isAddTaskFormVisible" />
    <TaskList />
</template>
<script setup>
import AddTaskModal from '../components/AddTaskModal.vue';
import TaskList from '../components/TaskList.vue';

const isAddTaskFormVisible = defineModel('isAddTaskFormVisible', {
        type: Boolean,
        default: false,
    })
</script>
