import './Footer.css';
function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <nav className='footer__links'>
                <ul className="footer__link-list">
                    <li><a className='footer__link link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a></li>
                    <li><a className='footer__link link' href="https://github.com/RolandSallaz">Github</a></li>
                    <li><a className='footer__link link' href='facebook.com/'>Facebook</a></li>
                </ul>
            </nav>
            <p className="footer__copyright ">&copy;2021</p>
        </footer>
    )
}
export default Footer;