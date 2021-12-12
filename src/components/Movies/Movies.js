import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Search from '../Seach/Search';
import FilmsNotFound from '../FilmsNotFound/FilmsNotFound';
import './Movies.css';
function Movies(props) {
    return (
        <>
            <Header />
            <main className='movies'>
                <Search onFormSubmit={props.onFormSubmit} checkboxState={props.checkboxState} />
                <MoviesCardList filteredMovies={props.filteredMovies} />
                {props.loading ? <Preloader /> : (

                    <>
                        {props.filteredMovies.length !== props.cards.length &&
                            <button className='movies__button-more' onClick={props.onMoreButtonClick}>Ещё</button>
                        }
                        {props.filmsNotFound && <FilmsNotFound />}
                    </>
                )}
            </main>
            <Footer />
        </>);
}
export default Movies