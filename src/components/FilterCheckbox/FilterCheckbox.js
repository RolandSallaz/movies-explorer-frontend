import { useState, useEffect } from 'react';
import './FilterCheckbox.css';
function FilterCheckbox(props) {
    const [shortFilm, setShortFilm] = useState(false);
    const handleFilterChange = () => {
        setShortFilm(!shortFilm);
        props.onFilterChange(shortFilm);
    }
    return (
        <label className='filter-checkbox'>
            <p className='filter-checkbox__label'>Короткометражки</p>
            <input type='checkbox' id='short-film' value={shortFilm} onChange={handleFilterChange} name='short-film' className='filter-checkbox__input' />
            <div className='filter-checkbox__front'>
                <div className='filter-checkbox__status' />
            </div>
        </label>
    )
}
export default FilterCheckbox;