<template lang="">
    <div>
        <div>Количество лайков: <strong> {{ likes }} </strong></div>
        <div>Количество дизлайков: <strong> {{ dislikes }} </strong></div>
        <div>
            <button @click="addLike">Like</button>
            <button @click="addDislike">Dislike</button>
        </div>        
    </div>
</template>
<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0
        }
    },

    methods: {
        addLike() {
            this.likes += 1;
        },

        addDislike(){
            this.dislikes += 1;
        },
    },
}
</script>
<style lang="">
    
</style>