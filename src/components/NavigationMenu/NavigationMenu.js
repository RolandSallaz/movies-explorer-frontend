import { NavLink } from 'react-router-dom';
import ProfileLink from '../ProfileLink/ProfileLink';
import './NavigationMenu.css';
function NavigationMenu(props) {
    const handleCloseMenu = () => {
        props.onClose();
    }
    return (
        <div className="navigation-menu" onClick={handleCloseMenu}>
            <button className="navigation-menu__close-button" onClick={handleCloseMenu} />
            <nav>
                <ul className='navigation-menu__list'>
                    <li className='navigation-menu__list-item'><NavLink className='navigation-menu__link' to="/">Главная</NavLink></li>
                    <li className='navigation-menu__list-item'><NavLink className='navigation-menu__link' to="/movies">Фильмы</NavLink></li>
                    <li className='navigation-menu__list-item'><NavLink className='navigation-menu__link' to="/saved-movies">Сохранённые фильмы</NavLink></li>
                    <li className='navigation-menu__list-item navigation-menu__list-item_type_profile'><ProfileLink /></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavigationMenu;