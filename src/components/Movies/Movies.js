import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Search from '../Seach/Search';
import './Movies.css';
function Movies(props) {
    return (
        <>
            <Header loggedIn={true} />
            <main className='movies'>
                <Search />
                {props.loading ? <Preloader /> : <MoviesCardList />}
                <button className='movies__button-more'>Ещё</button>
            </main>
            <Footer />
        </>);
}
export default Movies;