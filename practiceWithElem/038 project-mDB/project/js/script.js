
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      input = addForm.querySelector('.adding__input'),
      checkBox = addForm.querySelector('[type="checkbox"]');


    let movListCreate = function() {  
    movieList.innerHTML = "";
    movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
        });
    };
    
movListCreate();


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';


addForm.addEventListener('submit', (event) => {
    let inp = input.value;
    event.preventDefault();

    if (inp) {
     
        if (inp.length < 21) {
          movieDB.movies.push(inp);
        } else {
            inp = inp.slice(0, 21) + '...';
            movieDB.movies.push(inp);
        }
        movieDB.movies.sort();
        movListCreate();
        input.value = null;

        if (checkBox.checked) {
          console.log('Добавляем любимый фильм');
        }

    } 
});

movieDB.movies.sort();

console.log(movieList);

movieList.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('delete') ) {
        let indOfDeletFilm = e.target.parentNode.outerText[0] - 1;

        movieDB.movies.splice(indOfDeletFilm, 1);

        movieDB.movies.sort();
        movListCreate();
           
    }
});



