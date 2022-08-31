/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelector('.promo__adv');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');

const films = document.querySelectorAll('.promo__interactive-item');

console.log(films);
adv.remove();
genre.innerHTML = 'драма';
bg.style.backgroundImage = 'url(img/bg.jpg)';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

for (let i = 0; i < movieDB.movies.length; i++) { 
    films[i].innerHTML = ` ${i+1}   ${movieDB.movies[i]}\n   <div class=\"delete\"></div>\n `;
}
console.log(movieDB.movies.sort());
console.log(films);

    