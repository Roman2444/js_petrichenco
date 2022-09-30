window.addEventListener('DOMContentLoaded', () => {

    // TABS
    // ===========

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabComtent() {
        tabsContent.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show', 'fade');
        });

        tabs.forEach(el => {
            el.classList.remove('tabheader__item_active');
        });
        
    }

    console.dir(tabsParent);

    function showTabContent(i=0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabComtent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('tabheader__item')) {
            tabs.forEach((item, index) => { 
            if (target === item) {
                hideTabComtent();
                showTabContent(index);
                }    
            });
        }
    });
    console.log(tabs);

// TIMER
// ============


const deadline = '2022-11-11';

function getTimeRemaining(endtime) {
const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor( (t/(1000*60*60*24)) ),
    seconds = Math.floor( (t/1000) % 60 ),
    minutes = Math.floor( (t/1000/60) % 60 ),
    hours = Math.floor( (t/(1000*60*60) % 24) );

return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
};
}


function setClock(selector, endtime) {

const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

updateClock();

function getZero(num) {
    if (num >0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function updateClock() {
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
        clearInterval(timeInterval);
    }
}
}

setClock('.timer', deadline);




});