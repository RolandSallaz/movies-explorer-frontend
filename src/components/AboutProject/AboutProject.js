import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';
function AboutProject() {
    return (
        <section className='about-project'>
            <SectionTitle title="О проекте" />
            <div className='about-project__container'>
                <article>
                    <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article>
                    <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className='timeline'>
                <div className='timeline__container'>
                    <p className='timeline__period-title timeline__period-title_style_green'>1 неделя</p>
                    <p className='timeline__tech-title'>Back-end</p>
                </div>
                <div className='timeline__container'>
                    <p className='timeline__period-title'>4 недели</p>
                    <p className='timeline__tech-title'>Front-end</p>
                </div>
            </div>
        </section>
    );
}
export default AboutProject;