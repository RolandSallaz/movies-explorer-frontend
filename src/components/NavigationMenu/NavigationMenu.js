import { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileLink from '../ProfileLink/ProfileLink';
import './NavigationMenu.css';
function NavigationMenu(props) {
    const navMenuRef = createRef();
    const handleBackgroundClick = (e) => {
        if (e.target === navMenuRef.current) {
            props.onClose();
        }
    }
    const handleCloseMenu = (e) => {
        props.onClose();
    }
    return (
        <div className="navigation-menu" ref={navMenuRef} onClick={handleBackgroundClick}>
            <div className='navigation-menu__container'>
                <button className="navigation-menu__close-button" onClick={handleCloseMenu} />
                <nav>
                    <ul className='navigation-menu__list'>
                        <li className='navigation-menu__list-item'><NavLink className='navigation-menu__link link' to="/">Главная</NavLink></li>
                        <li className='navigation-menu__list-item'><NavLink className='navigation-menu__link link' to="/movies">Фильмы</NavLink></li>
                        <li className='navigation-menu__list-item'><NavLink className='navigation-menu__link link' to="/saved-movies">Сохранённые фильмы</NavLink></li>
                        <li className='navigation-menu__list-item navigation-menu__list-item_type_profile'><ProfileLink /></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default NavigationMenu;