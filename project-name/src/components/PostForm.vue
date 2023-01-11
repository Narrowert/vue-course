<template lang="">
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>

        <my-input 
        class="modal__input"
        v-model="post.title"
        type="text" 
        placeholder="Название"></my-input>

        <my-input 
        class="modal__input"
        v-model="post.body"
        type="text" 
        placeholder="Описание"></my-input>

        <my-button
        style="align-self: end; 
               margin-top: 15px;"
        @click="createPost">
        Создать
        </my-button>
    </form>
</template>
<script>
export default {
    data(){
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost(){
        this.post.id = Date.now();
        this.$emit('create', this.post, 'qwerty', 'uyiop')
        this.post = {
            title: '',
            body: ''
        }
        }
    },
    watch: {
        post: {
            handler(newVal){
                console.log(newVal)
            },
            deep: true
        }
    }
}
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
}   

.modal__input {
    border: 1px solid teal;
    padding: 10px;
}

</style>