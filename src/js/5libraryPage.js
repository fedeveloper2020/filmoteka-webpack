
console.log('File 5libraryPage.js connected');

import li_itemTPL from '../templates/li_templete.hbs';
import data from './array-test.json'; // підставне, замінити або видалити

const libraryFilmListUlRef = document.querySelector('.js-watched-list-film');

const createLibraryCardFunc = movieId => {
  const filmListItem = li_itemTPL(data);

  //   filmListItem.addEventListener('click', () =>
  //     activeDetailsPage(movieId, true),
  //   ); розкоментувати!!!

  return filmListItem;
};

////////мусор видалити 
/**https://api.themoviedb.org/3/search/movie?api_key=c5a07ae819d95fe3119594f7b17c2bc2&query=Jack+Reacher */
const li = createLibraryCardFunc();
console.log(typeof li);
 localStorage.setItem('filmsQueue', JSON.stringify(data)); //const testLocalStorage =
// localStorage.clear('filmsQueue', JSON.stringify(data)); //const testLocalStorage =
///////////////////////////////////////////////////////////


const drawQueueFilmList = () => {
 
  let listQueueFromLocalSt = localStorage.getItem('filmsQueue');
  const arrParse = JSON.parse(listQueueFromLocalSt);
    console.log(arrParse.results);
  if (listQueueFromLocalSt !== null && arrParse.length !== 0) {
    libraryFilmListUlRef.innerHTML = '';
    libraryFilmListUlRef.insertAdjacentHTML('beforeend', createLibraryCardFunc());

  }
  if (listQueueFromLocalSt === null || arrParse.length === 0) {
    libraryFilmListUlRef.innerHTML = '';
    const listItemMessage = document.createElement('li');
    listItemMessage.classList.add('класс-для-цього-месседжа');
    listItemMessage.textContent =
      'You do not have to queue movies to watch. Add them.';
    libraryFilmListUlRef.append(listItemMessage);
    console.log(listItemMessage);
  }
  //кнопка активна   queueListButton.classList.add('класс');
  //кнопка не активна   watchedListButton.classList.remove('класс');
};
drawQueueFilmList();

const drawWatchedFilmList = () => {
 
    let listQueueFromLocalSt = localStorage.getItem('filmsWatched');
    const arrParse = JSON.parse(listQueueFromLocalSt);
      console.log(arrParse.results);
    if (listQueueFromLocalSt !== null && arrParse.length !== 0) {
      libraryFilmListUlRef.innerHTML = '';
      libraryFilmListUlRef.insertAdjacentHTML('beforeend', createLibraryCardFunc());
  
    }
    if (listQueueFromLocalSt === null || arrParse.length === 0) {
      libraryFilmListUlRef.innerHTML = '';
      const listItemMessage = document.createElement('li');
      listItemMessage.classList.add('класс-для-цього-месседжа');
      listItemMessage.textContent =
        'You do not have to queue movies to watch. Add them.';
      libraryFilmListUlRef.append(listItemMessage);
      console.log(listItemMessage);
    }
    //кнопка активна   queueListButton.classList.add('класс');
    //кнопка не активна   watchedListButton.classList.remove('класс');
  };

