import './Login.css';
import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';
import React from 'react';
function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const emailHandler = (e) => {
        setEmail(e.target.value);
        setEmailError(e.target.validationMessage);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        setPasswordError(e.target.validationMessage);
    }
    const submitHandler = () => {
        props.onSubmit({ email, password });
    }
    return (<main className='login'>
        <LogoLink />
        <AuthForm onSubmit={submitHandler}>
            <h2 className='auth-form__title'>Рады видеть!</h2>
            <label className='auth-form__label'>
                <span className='auth-form__label-title'>E-mail</span>
                <input type='email' value={email} onChange={emailHandler} className={`auth-form__input ${emailError && 'auth-form__input_error'}`} required></input>
                <span className='auth-form__error'>{emailError}</span>
            </label>
            <label className='auth-form__label'>
                <span className='auth-form__label-title'>Пароль</span>
                <input type='password' value={password} onChange={passwordHandler} className={`auth-form__input ${passwordError && 'auth-form__input_error'}`} required></input>
                <span className='auth-form__error auth-form__error_show'>{passwordError}</span>
            </label>
            <button type='submit' className='auth-form__submit-button'>Войти</button>
            <p className='auth-form__bottom-paragraph'>Ещё не зарегистрированы?<a className='auth-form__link link' href='/signup'> Регистрация</a></p>
        </AuthForm>
    </main>
    );
}
export default Login;