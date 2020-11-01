import showDetails from './4filmDetailsPage'
import { renderFilms } from './1initialHomePage'
import refs from './refs';
let selectFilm = [];
const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('[data-panes]'),
};

console.log(refs);

refs.controls.addEventListener('click', changeTopTabs)
    
    function changeTopTabs(event) {
    event.preventDefault();

    if (event.target.nodeName !== "A") {
    return;
    }

    const currentActiveControlItem = document.querySelector('.site-menu__link--active');
    if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('site-menu__link--active');
    const paneId = getPaneId(currentActiveControlItem);
    const pane = getPaneById(paneId);
    pane.classList.remove('pane--active');
    }

    const controlItem = event.target;
    controlItem.classList.add('site-menu__link--active');
    
    const paneId = getPaneId(controlItem);
    const pane = getPaneById(paneId);
    pane.classList.add('pane--active');
}
    
function getPaneId(control) {
    return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
    return refs.panes.querySelector(`#${id}`)
}
// Second Tabs 

const refs2 = {
    controls2: document.querySelector('#tabs-2 [data-controls]'),
    panes2: document.querySelector('#tabs-2 [data-panes]'),
};

refs2.controls2.addEventListener('click', changeBottomTabs);
function changeBottomTabs(event){
    event.preventDefault();

    if (event.target.nodeName !== "A") {
    return;
    }

    const currentActivecontrolItem2 = refs2.controls2.querySelector(
        '.underline--active',
    ); 

    if (currentActivecontrolItem2) {
        currentActivecontrolItem2.classList.remove('underline--active');
        const paneId2 = getPaneId2(currentActivecontrolItem2);
        const pane2 = getPaneById2(paneId2);
        // console.log(currentActivecontrolItem2);
        pane2.classList.remove('pane--active');
    }
    const controlItem2 = event.target;
    controlItem2.classList.add('underline--active');

    const paneId2 = getPaneId2(controlItem2);
    
    const pane2 = getPaneById2(paneId2);
    pane2.classList.add('pane--active');
}

function getPaneId2(control2) {
    return control2.getAttribute('href').slice(1)
}

function getPaneById2(id) {
    return refs2.panes2.querySelector(`#${id}`);
   }


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
