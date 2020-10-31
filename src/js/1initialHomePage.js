import noPoster from '../images/no-poster.png'

export default {
    movieList: document.querySelector('.js-movieList'),
    URLimage: 'https://image.tmdb.org/t/p/w500',

    generateMarkup(films) {
        const listItem = films.results.map(film => this.createMarkup(film)).join(' '); 
        this.movieList.insertAdjacentHTML('beforeend', listItem);
    },

    createMarkup(film) {
        return `<li class="homePage__movieItem" data-id="${film.movieId}">
            <img src="${film.backdrop_path === null ? noPoster : `https://image.tmdb.org/t/p/w500${film.backdrop_path}`}" alt="${film.title}" class="homePage__movieItem-poster">
            <div class="homePage__overlay">
                <p class="homePage__movieItem-name">${film.title}</p>
                </div>  
            </li>`;
    },
}