import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='logo__image' />
            <nav className='header__auth-menu'>
                <a className='header__auth-link link' href='/signup'>Регистрация</a>
                <a className='header__auth-link header__auth-link_style_green link' href="/signin">Войти</a>
            </nav>
        </header>
    )
}
export default Header;