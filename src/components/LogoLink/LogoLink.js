import { Link } from 'react-router-dom';
import './LogoLink.css';
function LogoLink() {
    return (
        <Link className='logo-link' to="/"><div className='logo-link__image' /></Link>
    );
}
export default LogoLink;