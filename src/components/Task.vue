<template>
  <div
    @dblclick="$emit('toggle-reminder', task)"
    :class="[
      task.reminder ? 'border-primary-border' : 'border-transparent',
      'm-1 flex cursor-pointer items-center justify-between border-l-4 border-solid bg-primary-background-light px-5 py-3 text-primary-default',
    ]"
  >
    <div>
      <h3 class="flex items-center justify-between text-xl font-semibold text-primary-text-heading">
        {{ task.title }}
      </h3>
      <p>{{ task.dateTime }}</p>
    </div>
    <i
      @click="$emit('delete-task', task.id)"
      class="fa fa-trash text-xl text-primary-icons-default hover:text-primary-icons-hover"
    ></i>
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
  },
});
</script>
