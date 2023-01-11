<template lang="">
    <div v-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <TransitionGroup name="post-list">
            <post-item 
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
            />
        </TransitionGroup>
    </div>
    <h2 v-else style="color:red">Список постов пуст</h2>
</template>
<script>
import PostItem from '@/components/PostItem.vue';
export default {
    components: {
        PostItem
    },
    props: {
        posts: {
        type: Array,
        required: true,
        }
    }
}
</script>

<style>
.post {
    padding: 15px;
    border: 2px solid green;
    margin-top: 15px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move, 
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>