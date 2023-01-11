<template lang="">
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
.input {
    width: 100%;
    height: 30px;
    border: 1px solid teal;
    padding: 15px;
    margin-top: 15px;
    box-sizing: border-box;
}
</style>