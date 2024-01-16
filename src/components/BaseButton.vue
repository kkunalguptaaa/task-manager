<template>
    <div :class="{'w-full': fullSize}">
        <button class="bg-primary-button-default hover:bg-primary-button-hover active:bg-primary-button-active text-white font-medium py-2 px-3" :class="[fullSize ? 'w-full' : '', rounded ? 'rounded':'rounded-sm']" @click="$emit('onClick')" :type="type">{{text}}</button>
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
