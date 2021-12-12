import './FilterCheckbox.css';
function FilterCheckbox(props) {
    return (
        <label className='filter-checkbox'>
            <p className='filter-checkbox__label'>Короткометражки</p>
            <input type='checkbox' id='short-film' value={props.shortFilms} onChange={props.onFilterChange} name='short-film' className='filter-checkbox__input' checked={props.shortFilm} />
            <div className={`filter-checkbox__front ${props.shortFilms && 'filter-checkbox__front_checked'}`}>
                <div className={`filter-checkbox__status ${props.shortFilms && 'filter-checkbox__status_checked'}`} />
            </div>
        </label>
    )
}
export default FilterCheckbox;