import './AuthForm.css';
function AuthForm(props) {
    return (<form className='auth-form'>
        {props.children}
    </form>);
}
export default AuthForm;