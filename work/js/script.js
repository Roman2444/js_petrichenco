'use strict';

const personalMovieDB = {
  
    start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
      }
    },

    rememberMyFilms:  function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
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
    },

    detectPersonalLevel: function() {
        if(this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if(this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if(this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '' ) {
                i--; 
                console.log('Error');
            } 
          }
    },

    showMyDB: function() {
      if (personalMovieDB.privat === false) {
          console.log(personalMovieDB);
      }
    },

    toggleVisibleMyDB: function() {
      if (this.privat === false) {
        this.privat = true;
      } else if (this.privat === true) {
        this.privat = false;
      } 
     
    },
  
    count: 0,
    movies: {},  
    actors: {}, 
    genres: [],  
    privat: false,

  
};

personalMovieDB.start();


// personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();


console.log('personalMovieDB.count: ' , personalMovieDB.count);


personalMovieDB.genres.forEach((item, index) => {
  console.log(`Любимый жанр # ${index+1} - это ${item}`);
});


