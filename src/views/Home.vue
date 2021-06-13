<template>
  <div class="home">
    <mu-container>
      <div class="pencarian">
        <label class="label">Search Album</label>
        <v-select 
          :options="option" 
          :reduce="option => option.id" 
          label="title" 
          v-model="search" 
          class="form-cari" 
          placeholder="Input Album Title">
        </v-select>
      </div>
      <mu-row>
        <mu-col span="12" v-if="isLoading">
          <div class="loading">
              <mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>
          </div>
        </mu-col>
        <mu-col span="12" md="4" v-for="(item, index) in albums" :key="index" v-else>
          <card-component
            :judul="item.title"
            :id-album="item.id"
          />
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent';
import { RepositoryAPI } from '@/api/api_repository';
const albums = RepositoryAPI.get('albums');
export default {
  name: "Home",
  data() {
    return {
      albums: [],
      user: [],
      option: [],
      search: null,
      isLoading: false,
    }
  },
  components: {
    CardComponent,
  },
  created() {
    this.callAlbums();
  },
  methods: {
    async callAlbums() {
      try {
        this.isLoading = true;
        const data = await albums.fetchAbums();
        this.albums = data.data;
        const list = data.data;
        list.forEach((item) => {
          let p ={
            title : item.title,
            id: item.id
          }
          this.option.push(p);
        });
        this.isLoading = false;
      } catch(e) {
        console.log(e);
      }
    },
    async callAlbumById(id) {
      try {
        this.isLoading = true;
        const data = await albums.fetchAlbumById(id);
        const newArr = [];
        newArr.push(data.data);
        this.albums = newArr;
        this.isLoading = false;
      } catch(e) {
        console.log(e);
      }
    },
  },
  watch: {
    search: function(val) {
      if(val == null) {
        this.callAlbums();
      } else {
        this.callAlbumById(val);
      }
    }
  }
}
</script>
<style scoped>
.home {
  margin-top: 40px;
}
</style>
