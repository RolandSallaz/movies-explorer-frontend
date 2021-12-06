import SectionTitle from '../SectionTitle/SectionTitle';
import TimeLine from '../TimeLine/TimeLine';
import './AboutProject.css';
function AboutProject() {
    return (
        <section id='about-project' className='about-project'>
            <SectionTitle>О проекте</SectionTitle>
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
            <TimeLine />
        </section>
    );
}
export default AboutProject;