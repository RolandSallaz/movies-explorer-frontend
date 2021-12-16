import { useState, useEffect } from 'react';
import { useFormWithValidation } from '../utils/useFormWithValidation';
import validation from '../utils/Validation';

import './ProfileForm.css';
function ProfileForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [disableSubmit, setDisableSubmit] = useState(true);
    const formValidation = useFormWithValidation();

    const emailHandler = (e) => {
        setEmail(e.target.value)
        validation.validateMail(e);

    }
    const nameHandler = (e) => {
        setName(e.target.value);
        validation.validateName(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ name, email })
    }
    const handleChange = (e) => {
        formValidation.handleChange(e);
    }
    const handleLogOutClick = (e) => {
        e.preventDefault();
        props.onLogOut();
    }
    useEffect(() => {
        setName(props.user.name);
        setEmail(props.user.email);
    }, [props.user]);

    useEffect(() => {
        formValidation.isValid
            ? setDisableSubmit(false)
            : setDisableSubmit(true);
        name !== props.user.name || email !== props.user.email
            ? setDisableSubmit(false)
            : setDisableSubmit(true);
    }, [email, formValidation.isValid, name, props.user.email, props.user.name]);

    return (
        <form className='profile-form' onSubmit={handleSubmit} onChange={handleChange}>
            <div className='profile-form__container'>
                <label className='profile-form__label profile-form__label_border_bottom'>
                    <span className='profile-form__input-title'>Имя</span>
                    <input className={`profile-form__input ${formValidation.errors.name && 'profile-form__input_error'}`} type='text' name='name' placeholder='имя' value={name || ''} onChange={nameHandler} minLength={2} required />
                </label>
                <label className='profile-form__label'>
                    <span className='profile-form__input-title'>E-mail</span>
                    <input className={`profile-form__input ${formValidation.errors.email && 'profile-form__input_error'}`} type='email' name='email' placeholder='pochta@yandex.ru' value={email || ''} onChange={emailHandler} required />
                </label>
            </div>
            <button className='profile-form__button' type='submit' disabled={disableSubmit}>Редактировать</button>
            <button className='profile-form__button profile-form__button_type_logout' onClick={handleLogOutClick}>Выйти из аккаунта</button>
        </form>
    );
}
export default ProfileForm;
