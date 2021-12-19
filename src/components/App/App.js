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
import { Navigate } from "react-router-dom";
import {
  emailConflictError,
  logginError,
  succesUpdateUserMessage,
  loadingCardsError,
  tooManyRequestsError,
  authError
} from '../../utils/constants';
import CurrentUserContext from '../../contexts/currentUserContext';
import moviesApi from '../../utils/MoviesApi';
import InfoTool from '../InfoTool/InfoTool';
function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('');
  const [InfoMessage, setInfoMessage] = useState({});
  const [films, setFilms] = useState([]);
  const [disableProfileSubmit,setDisableProfileSubmit] = useState(false);

  const handleReturnBackClick = () => {
    navigate(-1);
  }

  const handleCloseMessage = () => {
    setInfoMessage({});
  }

  const errorHandler = (err) => {
    if (err === 'failed to fetch') {
      return err(loadingCardsError);
    }
    if (err === 401) {
      return console.log(authError);
    }
    return setInfoMessage({ text: err.toString(), error: true });
  }

  const messageHandler = (message) => {
    setInfoMessage({ text: message });
  }

  const handleUpdateUser = ({ name, email }) => {
    setDisableProfileSubmit(true);
    return mainApi.updateUser({ name, email })
      .then(res => {
        setCurrentUser(res);
        messageHandler(succesUpdateUserMessage);
      })
      .catch(err => errorHandler(
        err.message
          ? err.message
          : err
      ))
      .finally(()=>{
        setDisableProfileSubmit(false);
      });
  }

  const handleRegister = ({ email, name, password }) => {
    return mainApi.register({ email, password, name })
      .then(() => handleLogin({ email, password }))
      .catch(err => {
        if (err === 409) {
          return errorHandler(emailConflictError);
        }
        errorHandler(err.message);
      })
  }

  const handleLogOut = () => {
    return mainApi.logOut()
      .then(() => {
        navigate('/', { replace: true });
        localStorage.setItem('lastUserId','');
        localStorage.setItem('loggedIn', false);
        localStorage.setItem('movies', '');
        return setCurrentUser(null);

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
    moviesApi.getMovies()
      .then(res => setFilms(res))
      .catch(err => { errorHandler(err) });
  }, []);



  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('lastUserId',currentUser.id);
      localStorage.setItem('loggedIn', true);
    }
  }, [currentUser]);

  useEffect(() => { // check auth
    return mainApi.getCurrentUser()
      .then(res => setCurrentUser(res))
      .catch(err => {
        if (err instanceof TypeError) {
          return errorHandler(tooManyRequestsError);
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
            onError={errorHandler}
            onSubmit={handleUpdateUser}
            disableProfile={disableProfileSubmit} 
            />}
          />
          < Route path="/signup" element={
            currentUser
              ? <Navigate to="/" />
              : <Register onSubmit={handleRegister} />
          } />
          < Route path="/signin" element={
            currentUser
              ? <Navigate to="/" />
              : <Login onSubmit={handleLogin} />
          } />
          <Route path="*" element={<PageNotFound returnBack={handleReturnBackClick} />} />
        </Routes>
      </CurrentUserContext.Provider>
      <InfoTool message={InfoMessage} onCloseClick={handleCloseMessage} />
    </div >
  );
}

export default App;
