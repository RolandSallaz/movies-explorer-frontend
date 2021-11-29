import './NavTab.css';
function NavTab(props) {
    return (
        <nav className='nav-tab'>
            <ul className='nav-tab__link-list'>
                {props.children}
            </ul>
        </nav>
    )
}
export default NavTab;