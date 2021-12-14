import Card from '../Card/Card';
import './MoviesCardList.css';
function MoviesCardList(props) {
    return (
        <section className='movies-cardList'>
            <ul className='movies-cardList__list'>
                {props.movies.map(card => <Card key={card.id}
                    cardData={card}
                    onLikeClick={props.onLikeClick} />)}
            </ul>
        </section>
    )
}
export default MoviesCardList;