import './AuthForm.css';
function AuthForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    }
    return (<form className='auth-form' onSubmit={handleSubmit}>
        {props.children}
    </form>);
}
export default AuthForm;