import React from 'react';
import AuthLinks from '../AuthLinks/AuthLinks';
import LogoLink from '../LogoLink/LogoLink';
import NavigationLinks from '../NavigationLinks/navigation-links';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import './Navigation.css';

function Navigation(props) {
    const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
    const loggedIn = localStorage.getItem('loggedIn');
    const handleOpenNavMenu = () => {
        setIsNavMenuOpen(true);
    }
    const handleCloseNavMenu = (e) => {
        setIsNavMenuOpen(false);
    }
    return (
        <nav className='navigation'>
            <LogoLink />
            {loggedIn ? (<>
                <NavigationLinks />
                {
                    isNavMenuOpen ?
                        <NavigationMenu onMenuClose={handleCloseNavMenu} />
                        :
                        <button className="navigation__button" onClick={handleOpenNavMenu} />
                }
            </>)
                :
                <AuthLinks />}
        </nav>
    )
}
export default Navigation;