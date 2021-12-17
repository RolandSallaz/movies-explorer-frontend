import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Search from '../Seach/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState, useContext } from 'react';
import { filmsUrl, shortFilmDuration } from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import { useFilmSearch } from '../../utils/useFilmSearch';
import CurrentUserContext from '../../contexts/currentUserContext';

function SavedMovies(props) {
    const currentUser = useContext(CurrentUserContext);
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [shortFilms, setShortFilms] = useState(false);
    const filmSearch = useFilmSearch();

    const handleCheckboxClick = (state) => {
        setShortFilms(state);
    }

    const handleLikeClick = (card) => {
        return mainApi.deleteCard(card._id)
            .then(() => {
                const localMovies = JSON.parse(localStorage.getItem('movies'));
                localMovies.forEach((movie) => {
                    movie.test = false;
                    if (movie._id === card._id) {
                        movie.liked = false;
                    }
                })
                localStorage.setItem('movies', JSON.stringify(localMovies));
                setMovies(movies.filter((movie) => {
                    return card._id !== movie._id;
                }));
            })
            .catch(err => props.onError(err));
    }

    const handleSearchFilms = (movieData) => {
        if (movieData.filmName.length === 0) {
            return setFilteredMovies(movies);
        }
        setFilteredMovies(filmSearch.search({ moviesArray: movies, movieData }));
    }

    useEffect(() => {
        let filteredArray = [];
        !shortFilms
            ? filteredArray = movies.filter(movie => movie.duration >= shortFilmDuration)
            : filteredArray = movies;
        setFilteredMovies(filteredArray)
    }, [movies, shortFilms]);

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

    useEffect(() => {
        return mainApi.getMovies()
            .then((res) => {
                const filteredArray = res.filter(movie => movie.owner === currentUser.id);
                filteredArray.forEach(movie => {
                    movie.liked = true;
                    movie.id = movie.movieId;
                    movie.image = { url: movie.image.toString().replace(filmsUrl, '') }
                })
                setMovies(filteredArray);
            })
            .catch(err => props.onError(err));
    }, []);

    return (
        <>
            <Header />
            <main className="saved-movies">
                <Search onFormSubmit={handleSearchFilms} onCheckboxChange={handleCheckboxClick} />
                <MoviesCardList movies={filteredMovies} onLikeClick={handleLikeClick} />
            </main>
            <Footer />
        </>);
}
export default SavedMovies;