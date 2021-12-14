import './AuthForm.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../utils/useFormWithValidation';
function AuthForm(props) {
    const formValidation = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    }
    const handleChange = (e) => {
        formValidation.handleChange(e);
    }

    useEffect(() => {
        props.onErrors(formValidation.errors);
    }, [formValidation.errors, props]);
    return (<form className='auth-form' onSubmit={handleSubmit} onChange={handleChange}>
        <h2 className='auth-form__title'>{props.config.title}</h2>
        {props.children}
        <button type='submit' className='auth-form__submit-button' disabled={!formValidation.isValid}>{props.config.buttonTitle}</button>
        <p className='auth-form__bottom-paragraph'>{props.config.bottomText}<Link className='auth-form__link link' to={props.config.bottomLink.link}> {props.config.bottomLink.text}</Link></p>
    </form>);
}
export default AuthForm;