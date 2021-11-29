import NavTab from '../NavTab/NavTab';
import './Promo.css';
function Promo() {
    return (
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <NavTab>
                <li><a className='nav-tab__link link' href="#AboutProject">О проекте</a></li>
                <li><a className='nav-tab__link link' href="#Techs">Технологии</a></li>
                <li><a className='nav-tab__link link' href="#AboutMe">Студент</a></li>
            </NavTab>
        </section>
    )
}
export default Promo;