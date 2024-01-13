<template>
    <div>
        <button class="button green-btn" @click="$emit('onClick')">{{text}}</button>
    </div>
</template>
<script setup>
defineProps({
    text: {
        type: String,
        default: 'Click Me',
    },
});
defineEmits(['onClick']);
</script>
<style scoped>
    .button {
        font-weight: 600;
        font-size: 16px;
        padding: 10px 15px;
        border: 1px black;
        border-radius: 5px;
        border-color: green;
    }
    .green-btn {
        background-color: #50C878;
        color: #000;
    }
</style>