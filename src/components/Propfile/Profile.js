import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForms';
import { useContext } from "react";
import CurrentUserContext from "../../contexts/currentUserContext";
import './Profile.css';
function Profile(props) {
    const currentUser = useContext(CurrentUserContext);
    return (
        <>
            <Header />
            <main className='profile'>
                <h2 className='profile__name'>{`Привет, ${currentUser && currentUser.name}!`}</h2>
                <ProfileForm user={currentUser} disableProfile={props.disableProfile} onSubmit={props.onSubmit} onLogOut={props.onLogOut} />
            </main>
        </>);
}
export default Profile;