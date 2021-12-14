import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Search from '../Seach/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { filmsUrl } from '../utils/constants';
function SavedMovies(props) {
    const [movies, setMovies] = useState([]);
    const handleLikeClick = (card) => {
        props.onCardDislike({ cardId: card._id })
        props.loadSavedMovies();
    }

    useEffect(() => {
        const cardArray = props.movies;
        props.movies.forEach(movie => {
            movie.liked = true;
            movie.id = movie.movieId;
            movie.image = { url: movie.image.toString().replace(filmsUrl, '') }
        })
        setMovies(cardArray);
    }, [props.movies]);

    useEffect(() => {
        props.loadSavedMovies();
    }, [props]);

    return (
        <>
            <Header />
            <main className="saved-movies">
                <Search onFormSubmit={props.onFormSubmit} />
                <MoviesCardList movies={movies} onLikeClick={handleLikeClick} />
            </main>
            <Footer />
        </>);
}
export default SavedMovies;