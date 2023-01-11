<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
        v-model="searchQuery"
        placeholder="Поиск"
        />
        <div class="app__btns">
            <my-button
            @click="showDialog"
            >
            Создать пост
            </my-button>
            <my-select 
            v-model="selectedSort" 
            :options="sortOptions"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"></post-form>
        </my-dialog>
        <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
        ></post-list>
        <div v-else>Идёт загрузка...</div>
        <!-- постраничная пагинация -->
        <div class="page__wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber"
            class="page"
            :class="{
                'current-page' : page == pageNumber
            }"
            @click="changePage(pageNumber)"
            > 
                {{ pageNumber }} 
            </div>
        </div>
    </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from 'axios'

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
            ],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'}
            ],
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
        }
    },

    methods: {
        createPost(post){
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog(){
            this.dialogVisible = true;
        },
        changePage(pageNumber){
            this.page = pageNumber;
            this.fetchPosts();
        },
        async fetchPosts(){
            try {
                this.isPostLoading = true;
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPages = Math.ceil(responce.headers['x-total-count'] / this.limit);
                this.posts = responce.data;
            } catch (e) {
                alert('Произошла ошибка!')
            } finally {
                this.isPostLoading = false;
            }
        },
    },

    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortedPosts(){
            return [...this.posts].sort((post1 , post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
}
</script>

<style scoped> 
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    padding: 10px;
    border: 1px solid black;
}

.current-page {
    border: 2px solid teal;
}

</style>