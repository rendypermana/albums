import albums from '@/api/albums.js'

const repositories = {
    albums: albums,
};

export const RepositoryAPI = {
    get : name => repositories[name]
};