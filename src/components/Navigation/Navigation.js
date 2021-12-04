import AuthLinks from '../AuthLinks/AuthLinks';
import LogoLink from '../LogoLink/LogoLink';
import NavigationLinks from '../NavigationLinks/navigation-links';
import './Navigation.css';
function Navigation(props) {
    return (
        <nav className='navigation'>
            <LogoLink />
            {props.loggedIn ? <NavigationLinks /> : <AuthLinks />}
        </nav>
    )
}
export default Navigation;