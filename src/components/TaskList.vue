<template lang="">
    <div>
        <Task :key="taskItem.id" v-for="taskItem in getTasks()" :task="taskItem" @delete-task="deleteTaskItem" @toggle-reminder="toggleReminder" />
    </div>
</template>
<script setup>
import Task from './Task.vue';
import {useTaskActions} from '../composables/useTask';

const { getTasks, deleteTask, updateTask } = useTaskActions();

const deleteTaskItem = (id) => {
    deleteTask(id);
}

const toggleReminder = (task) => {
    task.reminder = !task.reminder;
    updateTask(task);
}

</script>
<style scoped>
</style>