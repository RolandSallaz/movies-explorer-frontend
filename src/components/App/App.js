import './App.css';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SaveMovies from '../SavedMovies/SavedMovies';
import Profile from '../Propfile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const navigate = useNavigate();
  const handleReturnBackClick = () => {
    navigate(-1);
  }
  const handleEditProfileClick = () => {
    setEditProfile(true);
  }
  const handleMoreButtonClick = () => {
    setLoading(true);
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/movies" element={<Movies onMoreButtonClick={handleMoreButtonClick} loading={loading} />} />
        <Route exact path="/saved-movies" element={<SaveMovies />} />
        <Route path="/profile" element={<Profile editProfile={handleEditProfileClick} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound returnBack={handleReturnBackClick} />} />
      </Routes>
    </div >
  );
}

export default App;
