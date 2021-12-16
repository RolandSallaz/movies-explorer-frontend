import './Card.css';
import { filmsUrl } from '../utils/constants';
import { useState, useEffect } from 'react';
function Card(props) {
    const [like, setLike] = useState(false);
    const handleLikeClick = () => {
        setLike(!like)
        props.onLikeClick(props.cardData)
    }
    useEffect(() => {
        props.cardData.liked = like;
    }, [like, props.cardData]);
    useEffect(() => {
        setLike(props.liked);
    }, []);
    return (
        <div className='card'>
            <a className='card__link' href={props.cardData.trailerLink} target="_blank" rel="noreferrer"><img className='card__image' src={`${filmsUrl}${props.cardData.image.url}`} alt='Постер фильма' /></a>
            <h2 className='card__title'>{props.cardData.nameRU}</h2>
            <button className={`card__like ${like && 'card__like_liked'}`} onClick={handleLikeClick} />
            <p className='card__duration'>{`${Math.round(props.cardData.duration / 60)}ч ${props.cardData.duration % 60}м`}</p>
        </div>
    );
}
export default Card;