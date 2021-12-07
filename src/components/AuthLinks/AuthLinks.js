import { Link } from 'react-router-dom';
import './AuthLinks.css';
function AuthLinks() {
    return (
        <ul className='auth-links__list'>
            <li>
                <Link className='auth-links__link link' to="/signup">Регистрация</Link>
            </li>
            <li>
                <Link className='auth-links__link auth-links__link_type_login link' to="/signin">Войти</Link>
            </li>
        </ul>
    );
}
export default AuthLinks;