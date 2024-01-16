<template>
  <div :class="{ 'w-full': fullSize }">
    <button
      class="bg-primary-button-default px-3 py-2 font-medium text-white hover:bg-primary-button-hover active:bg-primary-button-active"
      :class="[fullSize ? 'w-full' : '', rounded ? 'rounded' : 'rounded-sm']"
      @click="$emit('onClick')"
      :type="type"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Click Me',
  },
  fullSize: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  type: String,
});

defineEmits(['onClick']);
</script>
