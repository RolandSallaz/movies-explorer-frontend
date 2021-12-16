import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Search from '../Seach/Search';
import FilmsNotFound from '../FilmsNotFound/FilmsNotFound';
import './Movies.css';
import { useState, useEffect, useCallback } from 'react';
import { useResolution } from '../utils/useRosolution';
import moviesApi from '../utils/MoviesApi';
import { loadginCardsError } from '../utils/constants';
import { useFilmSearch } from '../utils/useFilmSearch';
import mainApi from '../utils/MainApi';
function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [moviesCount, setMoviesCount] = useState(0);
    const [lastFilmsSearch, setLastFilmsSerach] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filmsNotFound, setFilmsNotFound] = useState(false);

    const resolution = useResolution();
    const filmSearch = useFilmSearch();

    const handleMoreButtonClick = () => {
        return setMoviesCount(moviesCount + resolution.additionalCards);
    }
    const handleSearchFilms = (movieData) => {
        setLoading(true);
        return moviesApi.getMovies()
            .then(res => {
                if (res.length === 0) {
                    setFilmsNotFound(true);
                }
                movieData.filmName.length === 0
                    ? setMovies(res)
                    : setMovies(filmSearch.search({ moviesArray: res, movieData }));
                localStorage.setItem('lastFind', JSON.stringify(movieData));
            })
            .catch(() => props.onError(loadginCardsError)
            )
            .finally(() => {
                return setLoading(false)
            });
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
        setMoviesCount(resolution.startCardsCount);
        if (movies) {
            setFilteredMovies(movies.slice(0, moviesCount));
        }
    }, [movies, moviesCount, resolution.startCardsCount, resolution.width]);

    useEffect(() => {
        if (movies.length >= 1) {
            setFilmsNotFound(false);
            localStorage.setItem('movies', JSON.stringify(movies))
        }
    }, [movies]);

    useEffect(() => {
        if (localStorage.getItem('movies')) {
            setMovies(JSON.parse(localStorage.getItem('movies')));
        }
        setLastFilmsSerach(JSON.parse(localStorage.getItem('lastFind')));
    }, []);

    return (
        <>
            <Header />
            <main className='movies'>
                <Search onFormSubmit={handleSearchFilms} checkboxState={lastFilmsSearch} />
                <MoviesCardList movies={filteredMovies} onLikeClick={handleCardLikeClick} />
                {loading ? <Preloader /> : (
                    <>
                        {movies.length !== filteredMovies.length &&
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