import { useState } from 'react/cjs/react.development';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import './Register.css';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const nameHandler = (e) => {
        setName(e.target.value);
        setNameError(e.target.validationMessage);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        setEmailError(e.target.validationMessage);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        setPasswordError(e.target.validationMessage);
    }
    const handleSubmit = () => {

    }
    return (
        <main className='register'>
            <LogoLink />
            <AuthForm onSubmit={handleSubmit}>
                <h2 className='auth-form__title'>Добро пожаловать!</h2>
                <label className='auth-form__label'>
                    <span className='auth-form__label-title'>Имя</span>
                    <input type='text' value={name} onChange={nameHandler} className={`auth-form__input ${nameError && 'auth-form__input_error'}`} minLength={2} required></input>
                    <span className='auth-form__error'>{nameError}</span>
                </label>
                <label className='auth-form__label'>
                    <span className='auth-form__label-title'>E-mail</span>
                    <input type='email' value={email} onChange={emailHandler} className={`auth-form__input ${emailError && 'auth-form__input_error'}`} required></input>
                    <span className='auth-form__error'>{emailError}</span>
                </label>
                <label className='auth-form__label'>
                    <span className='auth-form__label-title'>Пароль</span>
                    <input type='password' value={password} onChange={passwordHandler} className={`auth-form__input ${passwordError && 'auth-form__input_error'}`} minLength={8} required></input>
                    <span className='auth-form__error'>{passwordError}</span>
                </label>
                <button type='submit' className='auth-form__submit-button'>Зарегистрироваться</button>
                <p className='auth-form__bottom-paragraph'>Уже зарегистрированы?<a className='auth-form__link link' href='/signin'> Войти</a></p>
            </AuthForm>

        </main>
    );
}
export default Register;