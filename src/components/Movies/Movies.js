import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Search from '../Seach/Search';
import './Movies.css';
function Movies(props) {
    const handleMoreButtonClick = () => {
        props.onMoreButtonClick();
    }
    return (
        <>
            <Header loggedIn={true} />
            <main className='movies'>
                <Search />
                <MoviesCardList />
                {props.loading ? <Preloader /> : (
                    <>
                        <button className='movies__button-more' onClick={handleMoreButtonClick}>Ещё</button>
                    </>)}

            </main>
            <Footer />
        </>);
}
export default Movies;