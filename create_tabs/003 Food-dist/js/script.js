window.addEventListener('DOMContentLoaded', () => {

const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

function hideTabComtent() {
    tabsContent.forEach(el => el.style.display = 'none');
    tabs.forEach(el => el.classList.remove('tabheader__item_active'));
}

console.dir(tabsParent);

function showTabContent(i=0) {
    tabsContent[i].style.display = 'block';
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



});