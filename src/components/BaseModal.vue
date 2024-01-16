<template>
  <div v-if="visible" class="absolute top-0 flex h-dvh w-dvw items-center justify-center bg-black bg-opacity-40">
    <div class="relative flex flex-col bg-primary-background-light p-6">
      <button
        @click="onCloseModal"
        class="absolute right-0 top-0 flex cursor-pointer justify-end border-0 bg-transparent p-3"
      >
        <i
          :class="{
            'text-primary-icons-default hover:text-primary-icons-hover': colorVariant === 'primary',
          }"
          style="font-size: 24px"
          class="fa fa-close"
        ></i>
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineEmits(['onClose']);
defineProps({
  colorVariant: String,
});

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
});

const onCloseModal = () => {
  visible.value = false;
};
</script>
