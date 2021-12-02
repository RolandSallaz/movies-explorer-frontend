import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';
import myImagePath from '../../images/vitalyi.png';
function AboutMe() {
    return (
        <section className='about-me'>
            <SectionTitle>Студент</SectionTitle>
            <div className='about-me__container'>
                <h2 className='about-me__name'>Роланд</h2>
                <p className='about-me__subtitle'>Фронтенд-разработчик, 21 год</p>
                <p className='about-me__story'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <img className='about-me__photo' src={myImagePath} alt="тут должна быть моя фотография"></img>
                <nav >
                    <ul className="about-me__links">
                        <li><a href='https://vk.com/id117621940' className='about-me__link link' target="_blank">Vk</a></li>
                        <li><a href="https://github.com/RolandSallaz" className='about-me__link link' target="_blank">Github</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
export default AboutMe;