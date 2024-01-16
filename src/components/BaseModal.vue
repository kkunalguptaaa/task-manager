<template>
    <div v-if="visible" class='bg-black bg-opacity-40 absolute top-0 w-dvw h-dvh flex justify-center items-center'>
        <div class="bg-primary-background-light relative p-6 flex flex-col">
            <button @click='onCloseModal' class='bg-transparent absolute top-0 right-0 flex justify-end p-3 cursor-pointer border-0 '>
                <i :class="{'text-primary-icons-default hover:text-primary-icons-hover': colorVariant === 'primary'}" style="font-size:24px" class="fa fa-close"></i >
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
