import Card from '../Card/Card';
import './MoviesCardList.css';
function MoviesCardList(props) {
    return (
        <section className='movies-cardList'>
            <ul className='movies-cardList__list'>
                {props.filteredMovies.map(card => <Card key={card.id} cardData={card} />)}
            </ul>
        </section>
    )
}
export default MoviesCardList;