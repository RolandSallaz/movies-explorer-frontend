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
import mainApi from '../../utils/MainApi';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { emailConflictError, filmsUrl, logginError } from '../../utils/constants';
import CurrentUserContext from '../../contexts/currentUserContext';
import moviesApi from '../../utils/MoviesApi';
function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('');
  const [errorText, setErrorText] = useState('');
  const [films, setFilms] = useState([]);
  const handleReturnBackClick = () => {
    navigate(-1);
  }

  const handleCloseError = () => {
    setErrorText('');
  }
  const errorHandler = (err) => {
    setErrorText(err.toString());
  }
  const handleUpdateUser = ({ name, email }) => {
    return mainApi.updateUser({ name, email })
      .then(res => setCurrentUser(res))
      .catch(err => errorHandler(
        err.message
          ? err.message
          : err
      ));
  }

  const handleRegister = ({ email, name, password }) => {
    return mainApi.register({ email, password, name })
      .then(res => {
        return navigate('/signin', { replace: true });
      })
      .catch(err => {
        if (err === 409) {
          return errorHandler(emailConflictError);
        }
        errorHandler(err.message);
      })
  }

  const handleLogOut = () => {
    return mainApi.logOut()
      .then(res => {
        localStorage.setItem('movies', '');
        return navigate('/', { replace: true });
      })
      .catch(err => errorHandler(err));
  }

  const handleLogin = ({ email, password }) => {
    return mainApi.loginIn({ email, password })
      .then(res => {
        localStorage.setItem('loggedIn', 'true');
        return navigate('/movies', { replace: true });
      })
      .catch((err) => {
        if (err === 401) {
          return errorHandler(logginError);
        }
        return errorHandler(err);
      })
  }
  useEffect(() => {
    return moviesApi.getMovies()
      .then(res => {
        const filteredArray = res;
        filteredArray.forEach(movie => {
          movie.duration <= 40
            ? movie.shortFilm = true
            : movie.shortFilm = false
        })
        setFilms(filteredArray);
      })
  }, []);
  useEffect(() => { // check auth
    return mainApi.getCurrentUser()
      .then(res => setCurrentUser(res))
      .catch(err => {
        if (err instanceof TypeError) {
          return errorHandler('Слишком много запросов');
        }
        if (err === 401) {
          return console.log("Необходима авторизация");
        }
        localStorage.setItem('loggedIn', '');
        return errorHandler(err);
      });
  }, [navigate]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRoute
            component={Movies}
            initialMovies={films}
            onError={errorHandler}
          />} />
          <Route path="saved-movies" element={<ProtectedRoute
            component={SavedMovies}
            onError={errorHandler}
          />} />
          <Route path="/profile" element={<ProtectedRoute
            component={Profile}
            onLogOut={handleLogOut}
            onSubmit={handleUpdateUser} />}
          />
          {!currentUser &&
            < Route path="/signup" element={<Register onSubmit={handleRegister} />} />
          }
          {!currentUser &&
            < Route path="/signin" element={<Login onSubmit={handleLogin} />} />
          }
          <Route path="*" element={<PageNotFound returnBack={handleReturnBackClick} />} />
        </Routes>
      </CurrentUserContext.Provider>
      <ErrorMessage message={errorText} onCloseClick={handleCloseError} />
    </div >
  );
}

export default App;
