import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Search from '../Seach/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { filmsUrl } from '../utils/constants';
import mainApi from '../utils/MainApi';
import { useFilmSearch } from '../utils/useFilmSearch';
function SavedMovies(props) {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const filmSearch = useFilmSearch();

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
        setFilteredMovies(movies);
    }, [movies]);
    useEffect(() => {
        return mainApi.getMovies()
            .then((res) => {
                res.forEach(movie => {
                    movie.liked = true;
                    movie.id = movie.movieId;
                    movie.image = { url: movie.image.toString().replace(filmsUrl, '') }
                })
                setMovies(res);
            })
            .catch(err => props.onError(err));
    }, []);

    return (
        <>
            <Header />
            <main className="saved-movies">
                <Search onFormSubmit={handleSearchFilms} checkboxState={props.checkboxState} />
                <MoviesCardList movies={filteredMovies} onLikeClick={handleLikeClick} />
            </main>
            <Footer />
        </>);
}
export default SavedMovies;