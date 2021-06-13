<template>
    <div>
        <mu-appbar style="width: 100%;"  class="navbar">
            <div class="title tunjuk" @click="home">Albums</div>
        </mu-appbar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "Index",
    methods: {
        home(){
            this.$router.push({path: "/"});
        },
    }
}
</script>
<style scoped>
.tunjuk{
    cursor: pointer;
}
</style>