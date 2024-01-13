<template lang="">
    <div v-if="visible" class='modal'>
        <div class="modal-body">
            <button @click='onCloseModal' class='close-icon'>
                <i :class="{'green-icon': colorVariant === 'green'}" style="font-size:24px" class="fa fa-close"></i >
            </button>
            <slot />
        </div>
    </div>
</template>

<script setup>

defineEmits(['onClose'])
defineProps({
    colorVariant: String,
})

const visible = defineModel('visible', {
    type: Boolean,
    default: false,
})

const onCloseModal = () => {
    visible.value = false;
}
</script>

<style scoped>
.modal {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
}
.modal-body {
    position: relative;
    padding: 25px;
    background-color: #fff;
    display:flex ;
    flex-direction: column;
}
.close-icon {
    position: absolute;
    background-color: transparent;
    border: 0;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: end;
    padding: 10px;
    cursor: pointer;
}
.green-icon {
    color: #50C878;
}

.green-icon:hover {
    color: #00A36C;
}
</style>