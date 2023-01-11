<template lang="">
    <div class="navbar">
        <div>Vue 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/')">
                Главная
            </my-button>
            <my-button @click="$router.push('/posts')" style="margin-left:20px">
                Посты
            </my-button>
            <my-button @click="$router.push('/about')" style="margin-left:20px">
                О нас
            </my-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.navbar {
    padding: 0 20px;
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>