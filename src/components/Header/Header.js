import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
    return (
        <header className='header'>
            <Navigation loggedIn={props.loggedIn} />
        </header >
    )
}
export default Header;