import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import './Register.css';
function Register() {
    return (
        <main className='register'>
            <LogoLink />
            <AuthForm>
                <h2 className='auth-form__title'>Добро пожаловать!</h2>

                <label className='auth-form__label'>
                    <span className='auth-form__label-title'>Имя</span>
                    <input type='text' className='auth-form__input' required></input>
                    <span className='auth-form__error'>Поле и ошибкой</span>
                </label>
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
                <button type='submit' className='auth-form__submit-button'>Зарегистрироваться</button>
                <p className='auth-form__bottom-paragraph'>Уже зарегистрированы?<a className='auth-form__link link' href='/signin'> Войти</a></p>
            </AuthForm>

        </main>
    );
}
export default Register;