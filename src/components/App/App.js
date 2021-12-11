import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Propfile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../utils/MainApi';
import moviesApi from '../utils/MoviesApi';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { emailConflictError, loadginCardsError, logginError } from '../utils/constants';

import CurrentUserContext from '../../contexts/currentUserContext';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [resize, setResize] = useState(0);
  const [cards, setCards] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  //click logic
  const handleReturnBackClick = () => {
    navigate(-1);
  }

  const handleCloseError = () => {
    setErrorText('');
  }

  const handleUpdateUser = () => {

  }
  const handleLogOut = () => {

  }

  //click logic
  //movies logic
  const handleSearchFilms = (movieData) => {
    setLoading(true)
    moviesApi.getMovies()
      .then(res => setCards(res.filter((movie) => {
        if (movie.description.toLowerCase().includes(movieData.filmName.toLowerCase()) || movie.nameRU.toLowerCase().includes(movieData.filmName.toLowerCase())) {
          if (!movieData.shortFilms && movie.description >= 40) {
            return movie;
          }
          return movie;
        }
      })))
      .catch(() => setErrorText(loadginCardsError)
      )
      .finally(() => setLoading(false));
  }
  const handleMoreButtonClick = () => {

  }
  //movies logic

  //auth logic
  const handleRegister = ({ email, name, password }) => {
    mainApi.register({ email, password, name })
      .then(res => {
        return navigate('/signin', { replace: true });
      })
      .catch(err => {
        if (err === 409) {
          return setErrorText(emailConflictError);
        }
        setErrorText(err.message);
      })
  }
  const handleLogin = ({ email, password }) => {
    mainApi.loginIn({ email, password })
      .then(res => {
        localStorage.setItem('loggedIn', 'true');
        return navigate('/movies', { replace: true });
      })
      .catch((err) => {
        if (err === 401) {
          return setErrorText(logginError);
        }
        return setErrorText(err);
      })
  }
  //auth logic
  useEffect(() => { // check auth
    mainApi.getCurrentUser()
      .then(res => setCurrentUser(res))
      .catch(err => {
        localStorage.setItem('loggedIn', '');
        console.log(err);
        console.log(currentUser);
      });
  }, []);
  useEffect(() => { // resizehandler
    function handleResize(e) { console.log(cards); setResize(window.innerWidth) }
    window.addEventListener("resize", handleResize);
  });
  useEffect(() => {
    if (resize <= 1279) {
      return setCardsByResize(2);

    }
    else if (resize <= 767) {
      return setCardsByResize(1)
    }
  }, [cards]);
  const setCardsByResize = (cardCount) => {
    console.log(cardCount);
    setFilteredMovies([
      cards[0], ...filteredMovies]);
    console.log(cards[0])
  }
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRoute
            component={Movies}
            loading={loading}
            onFormSubmit={handleSearchFilms}
            cards={cards}
            onMoreButtonClick={handleMoreButtonClick} />} />
          <Route path="saved-movies" element={<ProtectedRoute component={SavedMovies} />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/signup" element={<Register onSubmit={handleRegister} />} />
          <Route path="/signin" element={<Login onSubmit={handleLogin} />} />
          <Route path="*" element={<PageNotFound returnBack={handleReturnBackClick} />} />
        </Routes>
      </CurrentUserContext.Provider>
      <ErrorMessage message={errorText} onCloseClick={handleCloseError} />
    </div >
  );
}

export default App;
