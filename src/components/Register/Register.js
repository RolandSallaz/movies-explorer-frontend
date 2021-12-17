import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import LogoLink from '../LogoLink/LogoLink';
import validation from '../../utils/Validation';
import './Register.css';

function Register(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const nameHandler = (e) => {
        setName(e.target.value);
        validation.validateName(e);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        validation.validateMail(e);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = () => {
        props.onSubmit({ name, email, password });
    }
    const errorHandler = (e) => {
        setErrors(e);
    }
    return (
        <main className='register'>
            <LogoLink />
            <AuthForm config={{
                title: "Добро Пожаловать!",
                buttonTitle: 'Зарегистрироваться',
                bottomText: 'Уже зарегистрированы?',
                bottomLink: { link: '/signin', text: 'Войти' }
            }}
                onSubmit={submitHandler}
                onErrors={errorHandler}
            >
                <label className='auth-form__label'>
                    <span className='auth-form__label-title'>Имя</span>
                    <input type='text' name='name' value={name} onChange={nameHandler} className={`auth-form__input ${errors.name && 'auth-form__input_error'}`} required></input>
                    <span className='auth-form__error'>{errors.name}</span>
                </label>
                <label className='auth-form__label'>
                    <span className='auth-form__label-title'>E-mail</span>
                    <input type='email' name='email' value={email} onChange={emailHandler} className={`auth-form__input ${errors.email && 'auth-form__input_error'}`} required></input>
                    <span className='auth-form__error'>{errors.email}</span>
                </label>
                <label className='auth-form__label'>
                    <span className='auth-form__label-title'>Пароль</span>
                    <input type='password' name='password' value={password} onChange={passwordHandler} className={`auth-form__input ${errors.password && 'auth-form__input_error'}`} required></input>
                    <span className='auth-form__error'>{errors.password}</span>
                </label>
            </AuthForm>

        </main>
    );
}
export default Register;