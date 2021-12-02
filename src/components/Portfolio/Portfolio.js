import './Portfolio.css';
function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio-list'>
                <li className='portfolio-list__item'>
                    <a className='portfolio-list__link link' href="https://rolandsallaz.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт <div className='portfolio-list__link-arrow' /></a>
                </li>
                <li className='portfolio-list__item'>
                    <a className='portfolio-list__link link' href="https://rolandsallaz.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт<div className='portfolio-list__link-arrow' /></a>
                </li>
                <li className='portfolio-list__item'>
                    <a className='portfolio-list__link link' href="https://rolandsallaz.mesto.nomoredomains.work/sign-in" target="_blank" rel="noreferrer">Одностраничное приложение<div className='portfolio-list__link-arrow' /></a>
                </li>
            </ul>
        </div>
    );
}
export default Portfolio;