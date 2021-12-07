import './PageNotFound.css';

function PageNotFound(props) {
    const handleReturnButtonClick = () => {
        props.returnBack();
    }
    return (
        <main className='page-404'>
            <div className='page-404__container'>
                <h2 className='page-404__title'>404</h2>
                <p className='page-404__subtitle'>Страница не найдена</p>
                <button onClick={handleReturnButtonClick} className='page-404__back-button'>Назад</button>
            </div>
        </main>
    );
}
export default PageNotFound;