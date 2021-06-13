import {json} from '@/api/config';

export default {
    fetchAbums() {
        return json.get('albums');
    },
    fetchPhotos() {
        return json.get('photos');
    },
    fetchAlbumById(id) {
        return json.get('albums/' + id);
    },
    fetchPotosByAlbums(id) {
        return json.get('albums/' + id + '/photos');
    },
    fetchUser() {
        return json.get('users');
    },
    fetchUserById(id) {
        return json.get('users/' + id);
    },
    fetchAlbumByUser(id) {
        return json.get('users/' + id + '/albums');
    }
}
