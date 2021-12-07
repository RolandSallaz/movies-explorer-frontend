import './Card.css';
import cardImagePath from '../../images/card__image.png';
function Card() {
    return (
        <div className='card'>
            <img className='card__image' src={cardImagePath} alt='Постер фильма' />
            <h2 className='card__title'>33 слова о дизайнеdddddddddddddddddddddddddddddddddddd</h2>
            <button className='card__like card__like_liked' />
            <p className='card__duration'>1ч 47м</p>
        </div>
    );
}
export default Card;