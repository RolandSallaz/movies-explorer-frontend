import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
function Techs() {
    return (
        <section className='techs'>
            <div className='techs__content'>
                <SectionTitle>Технологии</SectionTitle>
                <h2 className='techs__title'>7 технологий</h2>
                <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs-list'>
                    <li className='techs-list__item'>HTML</li>
                    <li className='techs-list__item'>CSS</li>
                    <li className='techs-list__item'>JS</li>
                    <li className='techs-list__item'>React</li>
                    <li className='techs-list__item'>Git</li>
                    <li className='techs-list__item'>Express.js</li>
                    <li className='techs-list__item'>mongoDB</li>
                </ul>
            </div>

        </section>
    );
}
export default Techs;