import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import forms from './modules/forms';
import {showModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout( () => showModal('.modal', modalTimerId), 60000);

    tabs();
    calc();
    cards();
    modal('[data-modal]', '.modal', modalTimerId);
    slider();
    timer();
    forms(modalTimerId);
    

});