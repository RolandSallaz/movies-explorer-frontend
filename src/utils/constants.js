const apiUrl = 'http://localhost:3000';
const filmsUrl = 'https://api.nomoreparties.co';
const shortFilmDuration = 40;
const initialMoviesPc = 12;
const initialMoviesTablet = 8;
const initialMoviesMobile = 5;
const addCardsPc = 3;
const addCards = 2;
const emailConflictError = "Данный e-mail уже используется";
const logginError = 'Неправильные e-mail или пароль';
const loadginCardsError = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export {
    apiUrl,
    filmsUrl,
    emailConflictError,
    logginError,
    loadginCardsError,
    shortFilmDuration,
    initialMoviesPc,
    initialMoviesTablet,
    initialMoviesMobile,
    addCardsPc,
    addCards
};