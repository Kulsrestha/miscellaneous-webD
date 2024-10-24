/*
const movieList = document.getElementById('movie-list');
movieList.style['backgroundColor'] = 'grey';
movieList.style.display = 'block';


const userChoice = 'user';

const person = {
    name: "Vishal",
    age : 22,
    hobbies : ['coding','cooking','dancing'],
    greet : function () {
        alert('Hi there!');
    },
    1.2 : 'number',
    [userChoice] : '...'
};

person.isAdmin = true;
// delete person.age;
person.age = null;

person[1.4] = 'anotherNumber';
console.log(person);
console.log(person[1.2]);
*/

const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
    }
    else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;

        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key} : ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.floor(Math.random() * 1000)
    };
    movies.push(newMovie);
    // console.log(newMovie);
    renderMovies();

    document.getElementById('title').value = '';
    document.getElementById('extra-name').value = '';
    document.getElementById('extra-value').value = '';
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);
