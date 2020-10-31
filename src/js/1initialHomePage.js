let baseURL = 'https://api.themoviedb.org/3';
let apiKey = 'c5a07ae819d95fe3119594f7b17c2bc2';
let renderFilms = [];
let genres;
let pageNumber = 1;
let inputValue = '';
import noPoster from '../images/no-poster.png'

const refs = {
    searchForm: document.querySelector('#search-form'),
    input: document.querySelector('.input-js'),
    movieList: document.querySelector('.js-movieList'),
    prevBtn: document.querySelector('[data-action="prev"]'),
    nextBtn: document.querySelector('[data-action="next"]'),
    pageValue: document.querySelector('.homePage__value'),
    errorRef: document.querySelector('.error-message'),
    title: document.querySelector('.title'),
}

function createCardFunc(imgPath, filmTitle, movieId) {
  const listItem = document.createElement('li');
  listItem.classList.add('homePage__movieItem');
  listItem.setAttribute('id','js-filmListItem');

  const img = document.createElement('img');
    img.classList.add('homePage__movieItem-poster');
    //  if (imgPath === null) {
    //      img.src = noPoster;
    //      return;
    //  }
 img.setAttribute('src', `https://image.tmdb.org/t/p/w500/${imgPath}`)
    // img.src = `https://image.tmdb.org/t/p/w500/${imgPath}`;

  const title = document.createElement('h2');
  title.classList.add('homePage__movieItem-name');
  title.textContent = filmTitle;

  listItem.append(img, title);

//   listItem.addEventListener('click', () => activeDetailsPage(movieId, false));
  return listItem;
};

const fetchPopularMoviesList = () => {
  fetch(`${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
    .then(data => data.json())
    .then(films => {
      if (films.results.length > 1) {
          clearContainer();
      }
        films.results.forEach(film => {
        refs.movieList.insertAdjacentElement('beforeend', createCardFunc(film.backdrop_path, film.title, film.id))
      })
      renderFilms = films.results;
      return renderFilms;
    })
    .catch(err => console.error(err));
}

function fetchGenres() {
  fetch(`${baseURL}/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(data => data.json())
    .then(films => {
      genres = [...films.genres];
    })
    .catch(err => console.error(err));
}

fetchPopularMoviesList();
fetchGenres();

function fetchFilms() {
  fetch(`${baseURL}/search/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}&include_adult=false&query=${inputValue}`)
    .then(data => data.json())
    .then(films => {
      if (films.results.length === 0) {
        refs.errorRef.textContent = "There are no exact matches.";
      }
      if (films.results.length > 1) {
          refs.errorRef.textContent = "";
      }
      films.results.forEach(film => {
        refs.movieList.insertAdjacentElement('beforeend', createCardFunc(film.backdrop_path, film.title, film.id))
      })
        renderFilms = films.results;
        refs.title.classList.add('hidden')
      return renderFilms;
    })
    .catch(error => console.error(error));
}

function handleSearchForm(event) {
  event.preventDefault();
  inputValue = refs.input.value;
  refs.searchForm.reset();
  fetchFilms();
}

refs.searchForm.addEventListener('submit', handleSearchForm);

function plaginationNavigation(event) {
    // зробити щоб на початку не було кнопки назад/disabled
  pageNumber === 1 || pageNumber < 1 ? refs.prevBtn.classList.add('hidden') : refs.prevBtn.classList.remove('hidden');
  if (event.target === refs.prevBtn) {
    pageNumber -= 1;
    refs.pageValue.textContent = pageNumber;
    if (inputValue === '') {
      fetchPopularMoviesList();
    } else {
      fetchFilms();
    }
  } else {
      pageNumber += 1;
    refs.pageValue.textContent = pageNumber;
    if (inputValue === '') {
      fetchPopularMoviesList();
    } else {
      fetchFilms();
    }
  }
  pageNumber === 1 || pageNumber < 1 ? refs.prevBtn.classList.add('hidden') : refs.prevBtn.classList.remove('hidden');
}

function clearContainer() {
    refs.movieList.innerHTML = "";
}


 refs.prevBtn.addEventListener('click', plaginationNavigation);
 refs.nextBtn.addEventListener('click', plaginationNavigation);


