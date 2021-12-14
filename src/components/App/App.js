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
import { useFilmSearch } from '../utils/useFilmSearch';
function App() {
  const filmSearch = useFilmSearch();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [cards, setCards] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
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

  const handleUpdateUser = ({ name, email }) => {
    return mainApi.updateUser({ name, email })
      .then(res => setCurrentUser(res))
      .catch(err => setErrorText(err));
  }
  const handleCardLikeClick = (card) => {
    if (card.liked) {
      return;
    }
    return mainApi.saveCard(card)
      .then(res => {
        const cardsArray = cards.map(movie => {
          if (movie.id === res.movieId) {
            movie.liked = !movie.like
          }
          return movie
        })
        setFilteredMovies(cardsArray);
      })
      .catch(err => setErrorText(err));
  }

  const handleCardDislike = ({ cardId }) => {
    return mainApi.deleteCard(cardId)
      .then(res => handleLoadSavedMovies())
      .catch(err => setErrorText(err));
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
      .then(res => {
        setCards(res);
        localStorage.setItem('lastFind', JSON.stringify(movieData));
        setFilteredMovies(filmSearch.search({ moviesArray: res, movieData }));
      }
      )
      .catch(() => setErrorText(loadginCardsError)
      )
      .finally(() => {
        return setLoading(false)
      });
  }
  const handleLoadSavedMovies = () => {
    return mainApi.getMovies()
      .then(res => setSavedMovies(res))
      .catch(err => setErrorText(err));
  }
  //movies logic
  //auth logic
  const handleRegister = ({ email, name, password }) => {
    return mainApi.register({ email, password, name })
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
  const handleLogOut = () => {
    return mainApi.logOut()
      .then(res => {
        localStorage.setItem('movies', '');
        return navigate('/signin', { replace: true });
      })
      .catch(err => setErrorText(err));
  }
  const handleLogin = ({ email, password }) => {
    return mainApi.loginIn({ email, password })
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
    return mainApi.getCurrentUser()
      .then(res => setCurrentUser(res))
      .catch(err => {
        localStorage.setItem('loggedIn', '');
        console.log(err);
      });
  }, [navigate]);

  //auth logic
  useEffect(() => {
    return setLastFilmsSerach(JSON.parse(localStorage.getItem('lastFind')));
  }, []);



  useEffect(() => { // resizehandler
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth)
      }, 1000)
    });
  }, []);
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
    return setFilteredMovies(cards.slice(0, cardsCount));
  }, [cards, cardsCount]);

  useEffect(() => {//check found cards
    if (cards) {
      setFilmsNotFound(false);
      localStorage.setItem('movies', JSON.stringify(filteredMovies));
    }
  }, [cards, filteredMovies]);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      setCards(JSON.parse(localStorage.getItem('movies')));
    }

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
            movies={filteredMovies}
            cards={cards}
            onMoreButtonClick={handleMoreButtonClick}
            filmsNotFound={filmsNotFound}
            checkboxState={lastFilmsSearch}
            onCardLike={handleCardLikeClick}
          />} />
          <Route path="saved-movies" element={<ProtectedRoute
            component={SavedMovies}
            loadSavedMovies={handleLoadSavedMovies}
            movies={savedMovies}
            onCardDislike={handleCardDislike}
          />} />
          <Route path="/profile" element={<ProtectedRoute
            component={Profile}
            onLogOut={handleLogOut}
            onSubmit={handleUpdateUser} />}
          />
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
