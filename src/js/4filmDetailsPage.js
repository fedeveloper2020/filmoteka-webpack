import 'basiclightbox/dist/basicLightbox.min.css';
import { genres } from './1initialHomePage'
import refs from './refs'

function monitorButtonStatusText() {
  let localStorageFilmsQueue = localStorage.getItem('filmsQueue');
  localStorageFilmsQueue === null ?
      refs.queueBtn.textContent = "Add to queue" :
      JSON.parse(localStorageFilmsQueue).find(film => film.id === selectFilm.id) ?
      refs.queueBtn.textContent = "Delete from queue" : refs.queueBtn.textContent = "Add to queue";

  let localStorageFilmsWatched = localStorage.getItem('filmsWatched');
    localStorageFilmsWatched === null ?
        refs.watchedBtn.textContent = "Add to watched" :
        JSON.parse(localStorageFilmsWatched).find(film => film.id === selectFilm.id) ?
        refs.watchedBtn.textContent = "Delete from watched" : refs.watchedBtn.textContent = "Add to watched";
}

function toggleToWatched() {
    let filmsToWatch = [];
    let localStorageData = JSON.parse(localStorage.getItem('filmsWatched'));
    if (localStorageData !== null) {
        filmsToWatch = [...JSON.parse(localStorageData)];
    }

    if (filmsToWatch.find(film => film.id === selectFilm.id)) {
        filmsToWatch = filmsToWatch.filter(film => film.id !== selectFilm.id);
    } else {
        filmsToWatch.push(selectFilm);
    }
    localStorage.setItem('filmsWatched', JSON.stringify(filmsToWatch));
    monitorButtonStatusText();
}

function toggleToQueue() {
    let filmsInQueue = [];
    let localStorageData = JSON.parse(localStorage.getItem('filmsQueue'));

    if (localStorageData !== null) {
        filmsInQueue = [...JSON.parse(localStorageData)]
    }
    if (filmsInQueue.find(film => film.id === selectFilm.id)) {
        filmsInQueue = filmsInQueue.filter(film => film.id !== selectFilm.id);
    } else {
        filmsInQueue.push(selectFilm);
    }

    localStorage.setItem('filmsQueue', JSON.stringify(filmsInQueue));
    monitorButtonStatusText();
}

export default function showDetails(selectFilm) {
    refs.detailsSectionBlock.innerHTML = "";
    const poster = `https://image.tmdb.org/t/p/w500/${selectFilm.poster_path}`
    refs.detailsSectionBlock.classList.remove('visually-hidden');
    refs.detailsSectionBlock.insertAdjacentHTML('beforeend', `
     <div class="container">
         <div class="details__img-wrapper">
             <img class="details__img" src="${poster}" alt="${selectFilm.title}">
         </div>
         <div class="details__description">
             <h2 class="details__titile">${selectFilm.title}
             <span class="film-card__release">(${selectFilm.release_date.split('-')[0]})</span></h2>
             <ul class="details-list">
                 <li class="details-list__item">
                     <p class="details-list__name">vote / votes</p>
                     <p class="details-list__desc details__rating">
                         <span class="details-list__rating">${selectFilm.vote_average}</span>
                         <span class="details-list__rating--dash"> / </span>
                         <span class="details-list__rating">${selectFilm.vote_count}</span>
                     </p>
                 </li>
                 <li class="details-list__item">
                     <p class="details-list__name">popularity</p>
                     <p class="details-list__desc">${selectFilm.popularity}</p>
                 </li>
                 <li class="details-list__item">
                     <p class="details-list__name">original title</p>
                     <p class="details-list__desc">${selectFilm.title}</p>

                 </li>
                 <li class="details-list__item">
                     <p class="details-list__name">genre</p>
                     <p class="details-list__desc">
                         <span class="card-item__genre">${genres
            .filter(genre => selectFilm.genre_ids.find(item => genre.id === item))
            .reduce((acc, genre) => acc + `${genre.name} `, '')}</span>
                     </p>
                 </li>
             </ul>
             <h3 class="details-list__about">About</h3>
             <p class="details__text">${selectFilm.overview}</p>
              <div class="button-container">
            <button class="back-button" id="back-button">Back</button>
             <button class="details__watched js-details__watched">Add to watched</button>
             <button class="details__queue js-details__queue">Add to queue</button>
              </div>
         </div>
     </div>`)
  }


 

