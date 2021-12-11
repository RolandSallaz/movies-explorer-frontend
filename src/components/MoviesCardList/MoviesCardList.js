import Card from '../Card/Card';
import './MoviesCardList.css';
function MoviesCardList(props) {
    return (
        <section className='movies-cardList'>
            <ul className='movies-cardList__list'>
                {() => { props.cards.map(card => <Card key={card.id} cardData={card} />); console.log(props.cards) }}
            </ul>
        </section>
    )
}
export default MoviesCardList;