const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const closeMovieDeletion = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    updateUI();
    closeMovieDeletion();
};

const startDeleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();

    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', closeMovieDeletion);  // Prevent multiple listeners
    confirmDeletionButton.removeEventListener('click', deleteMovie);        // Prevent multiple listeners

    cancelDeletionButton.addEventListener('click', closeMovieDeletion);
    confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5</p>
        </div>
    `;
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
};

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        parseFloat(ratingValue) < 1 ||
        parseFloat(ratingValue) > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5)');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropHandler = () => {
    closeMovieModal();
    closeMovieDeletion();
    clearMovieInputs();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
 