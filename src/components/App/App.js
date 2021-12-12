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
// тестирую загрузку карточек из локального хранилища
function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [cards, setCards] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filmsNotFound, setFilmsNotFound] = useState(false);
  const [cardsCount, setCardsCount] = useState(0);
  const [additionalCards, setAdditionalCards] = useState(0);
  const [lastFilmsSearch, setLastFilmsSerach] = useState(null);

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
  const handleMoreButtonClick = () => {
    return setCardsCount(cardsCount + additionalCards);
  }

  //click logic
  //movies logic
  const handleSearchFilms = (movieData) => {
    setLoading(true);
    setFilmsNotFound(true);
    return moviesApi.getMovies()
      .then(res => setCards(res.filter((movie) => {
        localStorage.setItem('lastFind', JSON.stringify(movieData));
        if (
          movie.description.toLowerCase().includes(movieData.filmName.toLowerCase())
          ||
          movie.nameRU.toLowerCase().includes(movieData.filmName.toLowerCase())) {
          if (!movieData.shortFilms && movie.description >= 40) {
            return movie;
          }
          return movie;
        }
      })))
      .catch(() => setErrorText(loadginCardsError)
      )
      .finally(() => {
        return setLoading(false)
      });
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

  useEffect(() => { // check auth
    mainApi.getCurrentUser()
      .then(res => setCurrentUser(res))
      .catch(err => {
        localStorage.setItem('loggedIn', '');
        console.log(err);
      });
  }, []);

  //auth logic
  useEffect(() => {
    setLastFilmsSerach(JSON.parse(localStorage.getItem('lastFind')));
  }, []);
  useEffect(() => {
    if (lastFilmsSearch !== null) {
      handleSearchFilms(lastFilmsSearch);
    }
  }, []);


  useEffect(() => { // resizehandler
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth)
      }, 1000)
    });
  });
  useEffect(() => {
    if (windowWidth <= 767) {
      return setCardsCount(5) + setAdditionalCards(2);
    }
    else if (windowWidth <= 1279) {
      return setCardsCount(8) + setAdditionalCards(2);
    }
    return setCardsCount(12) + setAdditionalCards(3);
  }, [windowWidth]);


  useEffect(() => { // load more cards
    setFilteredMovies(cards.slice(0, cardsCount));
  }, [cards, cardsCount]);

  useEffect(() => {//check found cards
    if (cards.length !== 0) {
      setFilmsNotFound(false);
      localStorage.setItem('movies', JSON.stringify(filteredMovies));
    }
  }, [filteredMovies]);
  useEffect(() => {
    setFilteredMovies(JSON.parse(localStorage.getItem('movies')))
  }, []);
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRoute
            component={Movies}
            loading={loading}
            onFormSubmit={handleSearchFilms}
            filteredMovies={filteredMovies}
            cards={cards}
            onMoreButtonClick={handleMoreButtonClick}
            filmsNotFound={filmsNotFound}
            checkboxState={lastFilmsSearch}
          />} />
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
