<template>
    <div class="album">
        <mu-container>
            <mu-row gutter>
                <mu-col span="12" md="4" v-for="(item, index) in photos" :key="index">
                    <img :src="item.url" class="gambar"/>
                </mu-col>
            </mu-row>
        </mu-container>
    </div>
</template>
<script>
import { RepositoryAPI } from '@/api/api_repository';
const albums = RepositoryAPI.get('albums');
export default {
    name: "Album",
    data() {
        return {
            photos: [],
        }
    },
    mounted() {
        let id = this.$route.params.id;
        this.callPotosByAlbums(id);
    },
    methods: {
        async callPotosByAlbums(id) {
            try {
                const data = await albums.fetchPotosByAlbums(id);
                this.photos = data.data.slice(0, 3);
            } catch(e) {
                console.log(e);
            }
        },
    }
}
</script>
<style scoped>
.album {
    margin-top: 40px;
}
.gambar {
    width: 100%;
}
</style>