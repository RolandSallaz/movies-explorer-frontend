import './AuthLinks.css';
function AuthLinks() {
    return (
        <ul className='auth-links__list'>
            <li>
                <a className='auth-links__link link' href="/signup">Регистрация</a>
            </li>
            <li>
                <a className='auth-links__link auth-links__link_type_login link' href="/signin">Войти</a>
            </li>
        </ul>
    );
}
export default AuthLinks;