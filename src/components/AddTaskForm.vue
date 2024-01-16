<template>
    <div class="p-1 flex flex-col justify-center align-middle">
        <h2 class="text-3xl font-bold m-auto text-primary-text-default">Add Task</h2>
        <form @submit.prevent="onSubmit" class="flex flex-col justify-center">
            <label class="text-primary-text-default" for = 'task'>Task</label>
            <input id="task" required class="w-64 p-2 mb-5 border border-solid border-primary-border rounded-sm" name="title" type="text" v-model="title" placeholder="Enter Task" />
            <label class="text-primary-text-default" for = 'date-time'>Date & Time</label>
            <input id="date-time" required class="w-64 p-2 mb-5 border border-solid border-primary-border rounded-sm" name="date-time" type="datetime-local" v-model="dateTime" placeholder="Enter Date & Time" />
            <div class='flex flex-row align-middle'>
                <label class="text-primary-text-default" for="reminder">Set Reminder</label>
                <input id="reminder" class="ml-2" type="checkbox" v-model="reminder" name="reminder" />
            </div>
            <BaseButton type="submit" :full-size="true" :rounded="false" text="SUBMIT" />
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useTaskActions} from '../composables/useTask';
import BaseButton from './BaseButton.vue';

const {addTask} = useTaskActions();
const title = ref('');
const dateTime = ref(null);
const reminder = ref(false);

const resetForm = () =>{
    title.value = '';
    dateTime.value = null;
    reminder.value = false;
}

const onSubmit = () => {
    const newTask = {
        id: Math.floor(Math.random() * 100000).toString(),
        title: title.value,
        dateTime: dateTime.value,
        reminder: reminder.value,
    }

    addTask(newTask);
    resetForm();
}
</script>
