import { NavLink } from 'react-router-dom';
import './ProfileLink.css';

function ProfileLink() {
    return (
        <NavLink className='navigation-links__link navigation-links__link_type_profile link' to='/profile'><div className='profile-link__image' />Аккаунт</NavLink>
    );
}
export default ProfileLink;