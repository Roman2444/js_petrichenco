'use strict';

let  numberOfFilms;

function start() {
    // numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

start();

console.log (numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},  
    actors: {}, 
    genres: [],  
    privat: false
};

let lastFilm, rating;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        rating = +prompt('На сколько оцените его?', '');
    if (lastFilm == null || lastFilm == '' || lastFilm.length > 50 ||
     rating == null || rating == '') {
        i--; 
        console.log('Error');
    } else {
        personalMovieDB.movies[lastFilm] = rating;
        console.log('Done!');
    }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

console.log(personalMovieDB);


