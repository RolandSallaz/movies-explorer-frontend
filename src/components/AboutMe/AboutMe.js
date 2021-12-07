import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import myImagePath from '../../images/myphoto.jpg';

function AboutMe() {
    return (
        <section id='about-me' className='about-me'>
            <SectionTitle>Студент</SectionTitle>
            <div className='about-me__container'>
                <h2 className='about-me__name'>Роланд</h2>
                <p className='about-me__subtitle'>Фронтенд-разработчик, 21 год</p>
                <p className='about-me__story'>Живу в Лен. Области. Я люблю делаю игры на Unity, Пишу сайты и еще увлекаюсь музыкой.
                </p>
                <img className='about-me__photo' src={myImagePath} alt="тут должна быть моя фотография"></img>
                <nav >
                    <ul className="about-me__links">
                        <li><a href='https://vk.com/id117621940' className='about-me__link link' target="_blank" rel="noreferrer">Vk</a></li>
                        <li><a href="https://github.com/RolandSallaz" className='about-me__link link' target="_blank" rel="noreferrer">Github</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
export default AboutMe;