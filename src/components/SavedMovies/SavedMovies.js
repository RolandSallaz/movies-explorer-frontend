import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Search from '../Seach/Search';
import FilmsNotFound from '../FilmsNotFound/FilmsNotFound';
import Preloader from '../Preloader/Preloader';
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
    const [filmsNotFound, setFilmsNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    const [shortFilms, setShortFilms] = useState(false);
    const filmSearch = useFilmSearch();

    const handleCheckboxClick = (state) => {
        setShortFilms(state);
    }

    const handleDislikeClick = (card) => {
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

    const handleSearchFilms = (movieName) => {
        if (movies.length === 0) {
            return;
        }
        if (!movieName.length === 0) {
            return setFilteredMovies(movies);
        }
        setFilteredMovies(filmSearch.search({ moviesArray: movies, movieName }));
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
        movies.length !== 0 && setFilmsNotFound(false)
        
    }, [movies]);

useEffect(()=>{
    filteredMovies.length===0 && setFilmsNotFound(true);
},[filteredMovies]);

    useEffect(() => {
        setLoading(true)
        return mainApi.getMovies()
            .then((res) => {
                    let filteredArray = res;
                    filteredArray.filter(movie => movie.owner === currentUser.id);
                    filteredArray.forEach(movie => {
                        movie.savedMovie=true;
                        movie.liked = true;
                        movie.id = movie.movieId;
                        movie.image = { url: movie.image.toString().replace(filmsUrl, '') };
                        movie.trailerLink = movie.trailer;
                    })
                    if(filteredArray.length===0)
                    {
                        setFilmsNotFound(true);
                    }
                    return setMovies(filteredArray);
            })
            .catch(err => props.onError(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Header />
            <main className="saved-movies">
                <Search onFormSubmit={handleSearchFilms} onCheckboxChange={handleCheckboxClick} />
                {loading ? <Preloader /> : <MoviesCardList movies={filteredMovies}  onLikeClick={handleDislikeClick}/>}
                {filmsNotFound && <FilmsNotFound />}
            </main>
            <Footer />
        </>);
}
export default SavedMovies;