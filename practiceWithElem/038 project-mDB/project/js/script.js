
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
      btn = document.querySelector('.add').lastElementChild,
      input = document.querySelector('.adding__input'),
      checkBox = document.querySelector('.add').children[4];

      

      let movList = function() {  
        movieList.innerHTML = "";
        movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
};
    movList();


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';


btn.addEventListener('click', (event) => {
    let inp = input.value;
    event.preventDefault();

    if (checkBox.checked && inp) {
        console.log('Добавляем любимый фильм');
        if (inp.length < 21) {
          movieDB.movies.push(inp);
        } else {
            inp = inp.slice(0, 21) + '...';
            movieDB.movies.push(inp);
        }
        movieDB.movies.sort();
        movList();
        input.value = null;

    }
    console.log(movieDB.movies);
});

movieDB.movies.sort();



