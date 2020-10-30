// class Tabs {
//     constructor({ rootSelector, activeControlClass = 'active' }) {
//         this._refs = this._getRefs(rootSelector);
//         this._activeControlClass = activeControlClass;
//     }

//     _getRefs(root) {
//         const refs = {};

//         refs.controls = document.querySelector(`${root} [data-controls]`);
//         refs.panes = document.querySelector(`[data-panes]`);
//         refs.panels = document.querySelector(`${root} [data-panels]`);
//         return refs;
//     }

//     _bindEvents() {
//         this._refs.controls.addEventListener('click',
//             this._onControlsClick.bind(this),
//         );
//     }

//     _onControlsClick(event) {
//         event.preventDefault();

//     if (event.target.nodeName !== "A") {
//     return;
//         }
        
//         // const currentActiveControlItem = this._refs.controls.querySelector(
//         //     `.${this._activeControlClass}`,
//         // );
        
//         const controlItem = event.target;
//     controlItem.classList.add('site-menu__link--active');
//     }

//     _getPaneId(control) {
//         return control.getAttribute('href').slice(1);
//     }

//     _getPaneBuId(id) {
//     return refs.panes.querySelector(`#${id}`)
// }
// }



// const tabs1 = new Tabs({
//     rootSelector: '#tabs-1',
//     activeControlClass: 'site-menu__link--active',
// });
// const tabs2 = new Tabs({
//     rootSelector: '#tabs-2',
// });

// console.log(tabs1);
// console.log(tabs2)
// FROM HERE 

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
    controls: document.querySelector('#tabs-2 [data-controls]'),
    panes: document.querySelector('#tabs-2 [data-panes]'),
};

console.log(refs2);

refs2.controls.addEventListener('click', changeBottomTabs)
    
    function changeBottomTabs(event) {
    event.preventDefault();

    if (event.target.nodeName !== "A") {
    return;
    }

    const currentActiveControlItem2 = document.querySelector('.site-menu__link--active');
    if (currentActiveControlItem2) {
    currentActiveControlItem2.classList.remove('site-menu__link--active');
    const paneId2 = getPaneId2(currentActiveControlItem2);
    const pane2 = getPaneById2(paneId2);
    pane2.classList.remove('pane--active');
    }

    const controlItem2 = event.target;
    controlItem2.classList.add('site-menu__link--active');
    
    const paneId2 = getPaneId2(controlItem);
    const pane2 = getPaneById2(paneId2);
        pane2.classList.add('pane--active');
        console.log(pane2)
}
    
function getPaneId2(control) {
    return control.getAttribute('href').slice(1);
}

function getPaneById2(id) {
    return refs.panes.querySelector(`#${id}`)
}