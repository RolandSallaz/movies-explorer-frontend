import './Login.css';
import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';
import React from 'react';
import validation from '../utils/Validation';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const emailHandler = (e) => {
        setEmail(e.target.value);
        validation.validateMail(e)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = () => {
        props.onSubmit({ email, password });
    }
    const errorHandler = (e) => {
        setErrors(e);
    }
    return (<main className='login'>
        <LogoLink />
        <AuthForm config={{
            title: "Рады видеть!",
            buttonTitle: 'Войти',
            bottomText: 'Ещё не зарегистрированы?',
            bottomLink: { link: '/signup', text: 'Регистрация' }
        }}
            onSubmit={submitHandler}
            onErrors={errorHandler}
        >
            <label className='auth-form__label'>
                <span className='auth-form__label-title'>E-mail</span>
                <input type='email' name='email' value={email} onChange={emailHandler} className={`auth-form__input ${errors.email && 'auth-form__input_error'}`} required></input>
                <span className='auth-form__error'>{errors.email}</span>
            </label>
            <label className='auth-form__label'>
                <span className='auth-form__label-title'>Пароль</span>
                <input type='password' name='password' value={password} onChange={passwordHandler} className={`auth-form__input ${errors.password && 'auth-form__input_error'}`} required></input>
                <span className='auth-form__error auth-form__error_show'>{errors.password}</span>
            </label>
        </AuthForm>
    </main>
    );
}
export default Login;