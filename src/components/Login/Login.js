import './Login.css';
import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';
function Login() {
    return (<main className='login'>
        <LogoLink />
        <AuthForm>
            <h2 className='auth-form__title'>Рады видеть!</h2>
            <label className='auth-form__label'>
                <span className='auth-form__label-title'>E-mail</span>
                <input type='email' className='auth-form__input' required></input>
                <span className='auth-form__error'>Поле и ошибкой</span>
            </label>
            <label className='auth-form__label'>
                <span className='auth-form__label-title'>Пароль</span>
                <input type='password' className='auth-form__input auth-form__input_error' required></input>
                <span className='auth-form__error auth-form__error_show'>Поле и ошибкой</span>
            </label>
            <button type='submit' className='auth-form__submit-button'>Войти</button>
            <p className='auth-form__bottom-paragraph'>Ещё не зарегистрированы?<a className='auth-form__link link' href='/signup'> Регистрация</a></p>
        </AuthForm>
    </main>
    );
}
export default Login;