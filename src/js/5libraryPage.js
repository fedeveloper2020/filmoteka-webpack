console.log('File 5libraryPage.js connected');
import li_itemTPL from '../templates/mylibraryFilm.hbs';

/*
 *- берем из DOM  ul в которой будет или список очереди просмотра или список просмотренных фильмов; Done
 */
const refFilmLibraryUl = document.querySelector('.js-mylibraryFilmList');
/**
         * - создаем функцию createLibraryCardFunc, принимает параметрами imgPath, filmTitle, movieId, voteAverage, 
        создает li согласно макета, вешает на нее слушателем функцию activeDetailsPage c параметрами movieId и флагом true
         так как фильм из библиотеки (смотри пункт “3)” создание activeDetailsPage);
         */

const createLibraryCardFunc = (imgPath, filmTitle, movieId, voteAverage) => {
  const markup = li_itemTPL(data);
//   refFilmLibraryUl.insertAdjacentHTML('beforeend', markup);



return markup
};

/**
         * - создаем функцию drawQueueFilmList, создает в себе переменную фрагмент, читает во вторую переменую из 
        local storage ключ filmsQueue и если ее значение не пустое и не равно нулю длина массива то проходим по нему
         и в созданный фрагмент в цикле кладем созданную li функцией createLibraryCardFunc, потом зачищаем все в ul списке библиотеки
        и кладем фрагмент в нее, в другом случае если в local storage пустота то и длина массива равна нулю то отрисовать заглушку 
        “You do not have to queue movies to watch. Add them.”, и удаляет класс активной кнопки у просмотренных фильмов и добавляет такой класс 
        кнопке очереде просомотра;
         */

const drawQueueFilmList = () => {
    let filmsQueueArr = [];
    let localStorageData = localStorage.getItem('filmsQueue');
    if (localStorageData !== null) {
      filmsQueueArr.push(...JSON.parse(localStorageData));
    }
};
