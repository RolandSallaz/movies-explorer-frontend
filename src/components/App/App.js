import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header loggedIn={true} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
