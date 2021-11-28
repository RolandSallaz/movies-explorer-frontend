import './NavTab.css';
function NavTab() {
    return (
        <nav className='navTab'>
            <ul className='navTab__linkList'>
                <li><a className='navTab__link link' href="#AboutProject">О проекте</a></li>
                <li><a className='navTab__link link' href="#Techs">Технологии</a></li>
                <li><a className='navTab__link link' href="#AboutMe">Студент</a></li>
            </ul>
        </nav>
    )
}
export default NavTab;