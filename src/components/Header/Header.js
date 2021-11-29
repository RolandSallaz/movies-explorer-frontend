import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='logo__image' />
            <nav className='header__auth-menu'>
                <a className='header__auth-link header__auth-link_type_register link' href='/signup'>Регистрация</a>
                <a className='header__auth-link header__auth-link_type_login link' href="/signin">Войти</a>
            </nav>
        </header>
    )
}
export default Header;