<template>
    <div>
        <router-link :to="{name:'Album', params:{id: idAlbum}}">
            <mu-card style="margin: 10px; 0px;">
                <mu-card-media>
                    <img :src="photos.url">
                </mu-card-media>
              <mu-card-title :title="judul" class="judul"></mu-card-title>
            </mu-card>
        </router-link>
    </div>
</template>
<script>
import { RepositoryAPI } from '@/api/api_repository';
const albums = RepositoryAPI.get('albums');
export default {
    name: "CardComponent",
    props: {
        judul: {
            type: String,
            default: '',
        },
        idAlbum: {
            type: Number,
            default: null,
        }
    },
    data() {
        return {
            photos: [],
        }
    },
    mounted() {
        this.callPotosByAlbums(this.idAlbum);
    },
    methods: {
        async callPotosByAlbums(id) {
            try {
                const data = await albums.fetchPotosByAlbums(id);
                this.photos = data.data[0];
            } catch(e) {
                console.log(e);
            }
        },
    }
}
</script>
<style scoped>
.judul {
    text-transform:capitalize;
    font-weight: 700;
}
</style>