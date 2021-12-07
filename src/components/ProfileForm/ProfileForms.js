import { useState } from 'react';
import './ProfileForm.css';
function ProfileForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emairError, setEmailError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const emailHandler = (e) => {
        setEmail(e.target.value)
        setEmailError(e.target.validationMessage);
    }
    const nameHandler = (e) => {
        setName(e.target.value);
        setNameError(e.target.validationMessage);
    }
    const handleEditProfileClick = (e) => {
        e.preventDefault();
        setEditProfile(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleLogOutClick = (e) => {
        e.preventDefault();
    }

    return (
        <form className='profile-form' onSubmit={handleSubmit}>
            <div className='profile-form__container'>
                <label className='profile-form__label profile-form__label_border_bottom'>
                    <span className='profile-form__input-title'>Имя</span>
                    {editProfile ? (
                        <input className={`profile-form__input ${nameError && 'profile-form__input_error'}`} type='text' name='name' placeholder='Виталий' value={name} onChange={nameHandler} minLength={2} required />)
                        :
                        (<p className='profile-form__input-value'>Виталий</p>)}
                </label>
                <label className='profile-form__label'>
                    <span className='profile-form__input-title'>E-mail</span>
                    {editProfile ? (
                        <input className={`profile-form__input ${emairError && 'profile-form__input_error'}`} type='email' name='name' placeholder='pochta@yandex.ru' value={email} onChange={emailHandler} required />)
                        :
                        (<p className='profile-form__input-value'>pochta@yandex.ru</p>)}
                </label>
            </div>
            {editProfile ? (<button className='profile-form__button' type='submit'>Сохранить</button>) : (<button className='profile-form__button' onClick={handleEditProfileClick}>Редактировать</button>)}
            <button className='profile-form__button profile-form__button_type_logout' onClick={handleLogOutClick}>Выйти из аккаунта</button>
        </form>
    );
}
export default ProfileForm;
