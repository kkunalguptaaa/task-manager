<template>
    <div class="add-task">
        <h1 class="heading">Add Task</h1>
        <form @submit.prevent="onSubmit" class="add-task-form">
            <label for = 'task'>Task</label>
            <input id="task" required class="input-box" name="title" type="text" v-model="title" placeholder="Enter Task" />
            <label for = 'date-time'>Date & Time</label>
            <input id="date-time" required class="input-box" name="date-time" type="datetime-local" v-model="dateTime" placeholder="Enter Date & Time" />
            <div class='checkbox'>
                <label for="reminder">Set Reminder</label>
                <input id="reminder" class="checkbox-input" type="checkbox" v-model="reminder" name="reminder" />
            </div>
            <input class="submit-button" type="submit" />
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import {useTaskActions} from '../composables/useTask';

const {addTask, getTasks} = useTaskActions();
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
<style scoped>
.add-task {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: #50C878;
}

.add-task-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
}
.heading {
    margin-bottom: 20px;
}

.input-box {
    width: 250px;
    padding: 5px 10px;
    margin-bottom: 20px;
    border: 1px solid #50C878;
    border-radius: 2px;
}

.input-box:active {
    border: 1px solid #50C878;
}
.submit-button {
    background-color: #50C878;
    color: #FFFFFF;
    padding: 7px 10px;
    border-radius: 2px;
    border: 2px solid #50C878;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.5s;
}
.submit-button:hover {
    background-color: #FFFFFF;
    color: #50C878;
    border: 2px solid #50C878;
    cursor: pointer;
}
.checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}
.checkbox-input {
    margin-left: 10px;
}
</style>