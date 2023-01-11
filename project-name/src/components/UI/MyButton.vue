<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "my-button",
}
</script>
<style>
.btn {
    padding: 10px;
    background: transparent;
    border: 2px solid teal;
    color: teal;
    cursor: pointer;
}
</style>