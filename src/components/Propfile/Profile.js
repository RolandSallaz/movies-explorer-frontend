import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForms';
import './Profile.css';
function Profile(props) {
    return (
        <>
            <Header loggedIn={true} />
            <main className='profile'>
                <h2 className='profile__name'>Привет, Виталий!</h2>
                <ProfileForm editProfile={props.editProfile} />
            </main>
        </>);
}
export default Profile;