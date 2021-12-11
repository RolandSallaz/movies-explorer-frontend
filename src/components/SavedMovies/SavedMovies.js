import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Search from '../Seach/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function SavedMovies() {
    return (
        <>
            <Header />
            <main className="saved-movies">
                <Search />
                <MoviesCardList />
            </main>
            <Footer />
        </>);
}
export default SavedMovies;