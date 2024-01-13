<template>
    <header class="header">
        <div>
            <h2>Task Manager</h2>
        </div>
        <div>
            <BaseButton text="Add Task" @on-click="$emit('displayAddTaskForm')"/>
        </div>
    </header>
</template>
<script setup>
import BaseButton from './BaseButton.vue';

defineEmits(['addTask']);
</script>
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(214, 212, 212);
        color: black;
        padding: 10px 15px;
        border-bottom: 1px solid rgb(192, 189, 189);
    }
</style>