<template>
  <BaseModal color-variant="primary" v-model:visible="visible">
    <AddTaskForm />
  </BaseModal>
</template>

<script setup>
import BaseModal from './BaseModal.vue';
import AddTaskForm from './AddTaskForm.vue';

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
});
</script>
