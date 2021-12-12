import './Card.css';
import { filmsUrl } from '../utils/constants';
function Card(props) {
    return (
        <div className='card'>
            <a className='card__link' href={props.cardData.trailerLink} target="_blank"><img className='card__image' src={`${filmsUrl}${props.cardData.image.url}`} alt='Постер фильма' /></a>
            <h2 className='card__title'>{props.cardData.nameRU}</h2>
            <button className='card__like' />
            <p className='card__duration'>{`${Math.round(props.cardData.duration / 60)}ч ${props.cardData.duration % 60}м`}</p>
        </div>
    );
}
export default Card;