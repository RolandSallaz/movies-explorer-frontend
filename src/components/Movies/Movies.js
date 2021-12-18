import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Search from '../Seach/Search';
import FilmsNotFound from '../FilmsNotFound/FilmsNotFound';
import './Movies.css';
import { useState, useEffect } from 'react';
import { useResolution } from '../../utils/useRosolution';
import { useFilmSearch } from '../../utils/useFilmSearch';
import mainApi from '../../utils/MainApi';
import { shortFilmDuration } from '../../utils/constants';
function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [moviesCount, setMoviesCount] = useState(0);
    const [shortFilms, setShortFilms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [filmsNotFound, setFilmsNotFound] = useState(false);

    const resolution = useResolution();
    const filmSearch = useFilmSearch();

    const handleMoreButtonClick = () => {//
        setMoviesCount(moviesCount + resolution.additionalCards);
    }
    const handleCheckboxClick = (state) => {
        setShortFilms(state);
    }


    const handleSearchFilms = (movieName) => {
        setLoading(true);
        let filteredArray = [];
        movieName.length === 0
            ? filteredArray = props.initialMovies
            : filteredArray = filmSearch.search({ moviesArray: props.initialMovies, movieName });
        if (filteredArray.length === 0) {
            setFilmsNotFound(true);
        }
        setMovies(filteredArray);
        return setLoading(false)
    }
    const handleCardLikeClick = (card) => {
        const cardsArray = filteredMovies;
        if (!card.liked) {
            mainApi.saveCard(card)
                .then(res => {
                    cardsArray.forEach(movie => {
                        if (movie.id === res.movieId) {
                            card._id = res._id;
                            movie._id = res._id;
                            movie.liked = card.liked;
                        }
                    })
                })
                .catch(err => props.onError(err));
        }
        else {
            mainApi.deleteCard(card._id)
                .then(res => {
                    cardsArray.forEach(movie => {
                        if (movie.id === res.movieId) {
                            movie.liked = card.liked;
                            card._id = null;
                        }
                    })
                })
                .catch(err => props.onError(err));
        }
        setMovies(cardsArray);
    }

    useEffect(() => {
        let filteredArray = [];
        !shortFilms
            ? filteredArray = movies.filter(movie => movie.duration >= shortFilmDuration)
            : filteredArray = movies;
        if (movies) {
            setFilteredMovies(filteredArray.slice(0, moviesCount));
        }
    }, [movies, moviesCount, resolution.width, shortFilms]);

    useEffect(() => {
        if (movies.length >= 1) {
            setFilmsNotFound(false);
            localStorage.setItem('movies', JSON.stringify(movies))
        }
    }, [movies]);

    useEffect(() => {
        setMoviesCount(resolution.startCardsCount);
        if (localStorage.getItem('movies')) {
            setMovies(JSON.parse(localStorage.getItem('movies')));
        }
    }, []);

    return (
        <>
            <Header />
            <main className='movies'>
                <Search onFormSubmit={handleSearchFilms} onCheckboxChange={handleCheckboxClick} />
                <MoviesCardList movies={filteredMovies} onLikeClick={handleCardLikeClick} />
                {loading ? <Preloader /> : (
                    <>
                        {moviesCount <= filteredMovies.length && filteredMovies.length>=1&&
                            <button className='movies__button-more' onClick={handleMoreButtonClick}>Ещё</button>
                        }
                        {filmsNotFound && <FilmsNotFound />}
                    </>
                )}
            </main>
            <Footer />
        </>);
}
export default Movies