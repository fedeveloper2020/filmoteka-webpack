import showDetails from './4filmDetailsPage'
import { renderFilms } from './1initialHomePage'
import refs from './refs';
let selectFilm = [];

export default function activeDetailsPage(movieId, itsLibraryFilm) {
    refs.homePage.classList.add('hidden');
    refs.movieList.classList.add('hidden');
    refs.footerContainer.classList.add('hidden');
    // можливо потрібно буде ще щось добавити
     if (itsLibraryFilm) {
    let allLocalStorageFilms  = [...JSON.parse(localStorage.getItem('filmsQueue')), ...JSON.parse(localStorage.getItem('filmsWatched'))];
    selectFilm = allLocalStorageFilms.find(film => film.id === movieId);
  } else {
    selectFilm = renderFilms.find(film => film.id === movieId);
  }
    showDetails(selectFilm);

    const button = document.querySelector('#back-button')
    button.addEventListener('click', () => {
        refs.homePage.classList.remove('hidden');
        refs.movieList.classList.remove('hidden');
        refs.footerContainer.classList.remove('hidden');
        refs.detailsSectionBlock.classList.add('visually-hidden')
    });

}


