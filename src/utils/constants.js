const apiUrl = 'https://api.diploma.roland.nomoredomains.work';
const filmsUrl = 'https://api.nomoreparties.co';
const shortFilmDuration = 40;
const initialMoviesPc = 12;
const initialMoviesTablet = 8;
const initialMoviesMobile = 5;
const addCardsPc = 3;
const addCards = 2;
const succesUpdateUserMessage= 'Пользователь успешно обновлен'
const emailConflictError = "Данный e-mail уже используется";
const logginError = 'Неправильные e-mail или пароль';
const loadingCardsError = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const tooManyRequestsError='Слишком много запросов';
const authError='Необходима авторизация';
export {
    apiUrl,
    filmsUrl,
    emailConflictError,
    logginError,
    loadingCardsError,
    shortFilmDuration,
    initialMoviesPc,
    initialMoviesTablet,
    initialMoviesMobile,
    addCardsPc,
    addCards,
    succesUpdateUserMessage,
    tooManyRequestsError,
    authError
};