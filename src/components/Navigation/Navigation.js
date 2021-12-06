import { useState } from 'react/cjs/react.development';
import AuthLinks from '../AuthLinks/AuthLinks';
import LogoLink from '../LogoLink/LogoLink';
import NavigationLinks from '../NavigationLinks/navigation-links';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import './Navigation.css';
function Navigation(props) {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const handleNavMenuOpen = () => {
        setIsNavMenuOpen(true);
    }
    const closeNavMenu = (e) => {
        setIsNavMenuOpen(false);
    }
    return (
        <nav className='navigation'>
            <LogoLink />
            {props.loggedIn ? (<>
                <NavigationLinks />
                <button className="navigation__button" onClick={handleNavMenuOpen} />
                {isNavMenuOpen && <NavigationMenu onClose={closeNavMenu} />}
            </>)
                :
                <AuthLinks />}
        </nav>
    )
}
export default Navigation;