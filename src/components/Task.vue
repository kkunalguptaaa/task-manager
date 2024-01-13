<template lang="">
  <div
    @dblclick="$emit('toggle-reminder', task)"
    :class="[task.reminder ? 'reminder' : 'no-reminder', 'task']"
  >
    <h3>
      {{ task.title }}
      <i @click="$emit('delete-task', task.id)" class="fa fa-trash"></i>
    </h3>
    <p>{{ task.dateTime }}</p>
  </div>
</template>

<script setup>
defineEmits(['toggle-reminder', 'delete-task']);
defineProps({
    task: {
        id: String,
        title: String,
        dateTime: String,
        reminder: Boolean,
    }
})
</script>

<style scoped>
.fa {
  color: #50C878;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid #50C878;
}

.task.no-reminder {
  border-left: 5px solid transparent;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>