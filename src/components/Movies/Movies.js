import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Search from '../Seach/Search';
import './Movies.css';
function Movies(props) {
    return (
        <>
            <Header />
            <main className='movies'>
                <Search onFormSubmit={props.onFormSubmit} />
                <MoviesCardList cards={props.cards} shortFilmFilter={props.shortFilms} />
                {props.loading ? <Preloader /> : (
                    <>
                        {props.movies && <button className='movies__button-more' onClick={props.onMoreButtonClick}>Ещё</button>}
                    </>)}
            </main>
            <Footer />
        </>);
}
export default Movies