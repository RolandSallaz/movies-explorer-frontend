import './navigation-links.css';
function NavigationLinks() {
    return (
        <ul className='navigation-links'>
            <li>
                <a className='navigation-links__link link' href="/movies">Фильмы</a>
            </li>
            <li>
                <a className='navigation-links__link link' href='/saved-movies'>Сохранённые фильмы</a>
            </li>
            <li className='navigation-links__list-item_position_right'>
                <a className='navigation-links__link navigation-links__link_type_profile link' href="/profile"><div className='navigation-links__profile-img' />Аккаунт</a>
            </li>
        </ul>
    )
}
export default NavigationLinks;