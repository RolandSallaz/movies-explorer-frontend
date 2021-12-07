import { NavLink } from 'react-router-dom';
import ProfileLink from '../ProfileLink/ProfileLink';
import './navigation-links.css';
function NavigationLinks() {
    return (
        <ul className='navigation-links'>
            <li><NavLink className='navigation-links__link link' to="/movies">Фильмы</NavLink></li>
            <li><NavLink className='navigation-links__link link' to='/saved-movies' >Сохранённые фильмы</NavLink></li>
            <li className='navigation-links__list-item_position_right'><ProfileLink /></li>
        </ul>
    )
}
export default NavigationLinks;