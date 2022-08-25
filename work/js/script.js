/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';
// const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log (numberOfFilms);
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},  
//     actors: {}, 
//     genres: [],  
//     privat: false
// };

// console.log (personalMovieDB.count);

// let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
// let balls = prompt('На сколько оцените его?', '');

// let lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
// let balls2 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastFilm] = balls;
// personalMovieDB.movies[lastFilm2] = balls2;
// console.log (personalMovieDB);





/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// Код возьмите из предыдущего домашнего задания

'use strict';
const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?', '');


console.log (numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},  
    actors: {}, 
    genres: [],  
    privat: false
};

let lastFilm, balls;

for(let i = 0; i < 2; i++){
    do {
        lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    } while (lastFilm === '' || lastFilm.length > 50 );

    balls = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[lastFilm] = balls;
}

if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 1 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        alert("Вы киноман");
    }

console.log(personalMovieDB);

console.log(0 && 'swag4a4whe4h');