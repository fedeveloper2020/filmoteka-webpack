export default {
    baseURL: 'https://api.themoviedb.org/3',
    apiKey: 'c5a07ae819d95fe3119594f7b17c2bc2',
    searchQuery: '',
    page: 1,
    selectedMovieId: '',
     fetchPopularMoviesList() {
         return fetch(`${this.baseURL}/movie/popular?api_key=${this.apiKey}&page=${this.page}`).then(res => res.json()).catch(error => console.error(error));
    },


    fetchGenres() {
        return fetch(`${this.baseURL}/genre/movie/list?api_key=${this.apiKey}&language=en-US`).then(res => res.json()).catch(error => console.error(error));
    },
    
    searchFilms() {
    return fetch(`${this.baseURL}/search/movie?api_key=${this.apiKey}&language=en-US&page=${this.page}&query=${this.query}`).then(res => res.json()).catch(error => console.error(error))
    },

    get query() {
    return this.searchQuery;
    },
    
    set query(value) {
        this.searchQuery = value;
    },

    resetPage() {
        this.page = 1;
    },

}

