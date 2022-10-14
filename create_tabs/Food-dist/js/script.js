window.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
          calc = require('./modules/calc'),
          cards = require('./modules/cards'),
          modal = require('./modules/modal'),
          slider = require('./modules/slider'),
          timer = require('./modules/timer'),
          forms = require('./modules/forms');
    
    tabs();
    calc();
    cards();
    modal();
    slider();
    timer();
    forms();
    

});