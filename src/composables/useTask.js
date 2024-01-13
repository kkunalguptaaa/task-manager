import { ref } from "vue";

const tasks = ref([
    {
      "id": "1",
      "title": "Doctors Appointment",
      "dateTime": "March 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": "2",
      "title": "Meeting with boss",
      "dateTime": "March 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": "3",
      "title": "Food shopping",
      "dateTime": "March 7th at 2:00pm",
      "reminder": false
}]);

export const useTaskActions = () => {
    const addTask = (task) => {
        tasks.value.push(task);
    }

    const updateTask = (updatedTask) => {
      for (let task of tasks.value) {
        if( task.id === updatedTask.id) {
            task = updatedTask;
        }
      }
    }

    const deleteTask = (id) => {
        tasks.value = tasks.value.filter((task) => task.id !== id);
    }

    const getTasks = () => {
        return tasks.value;
    }

    return {addTask, deleteTask, getTasks, updateTask};
}

