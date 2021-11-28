import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='logo__image' />
            <nav className='header__authMenu'>
                <a className='header__authLink header__authLink_type_register link' href='/signup'>Регистрация</a>
                <a className='header__authLink header__authLink_type_login link' href="/signin">Войти</a>
            </nav>
        </div>
    )
}
export default Header;