import Card from '../Card/Card';
import './MoviesCardList.css';
function MoviesCardList() {
    return (
        <section className='movies-cardList'>
            <ul className='movies-cardList__list'>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
                <li> <Card /></li>
            </ul>
        </section>
    )
}
export default MoviesCardList;