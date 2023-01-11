<template lang="">
    <navbar></navbar>
    <div class="App">
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from '@/components/UI/Navbar.vue'
export default {
    components: {
        Navbar,
    }
}
</script>
<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.App {
    padding: 20px;
}
</style>