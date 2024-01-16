<template>
  <div
    @dblclick="$emit('toggle-reminder', task)"
    :class="[task.reminder ? 'border-primary-border' : 'border-transparent', 'bg-primary-background-light m-1 px-5 py-3 cursor-pointer border-l-4 border-solid flex justify-between items-center text-primary-default']"
  >
  <div>
    <h3 class="text-xl font-semibold flex justify-between items-center text-primary-text-heading">
      {{ task.title }}
    </h3>
    <p>{{ task.dateTime }}</p>
  </div>
    <i @click="$emit('delete-task', task.id)" class="fa fa-trash text-xl text-primary-icons-default hover:text-primary-icons-hover"></i>
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
