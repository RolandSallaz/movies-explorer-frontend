import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
function SearchForm(props) {
    const [filmName, setFilmName] = useState('');
    const [shortFilms, setShortFilms] = useState(false);

    const handleFilterChange = () => {
        localStorage.setItem('lastCheckboxState', !shortFilms);
        setShortFilms(!shortFilms);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onFormSubmit(filmName)
    }

    const filmNameHanlder = (e) => {
        setFilmName(e.target.value);
    }

    useEffect(() => {
        props.onCheckboxChange(shortFilms);
    }, [shortFilms]);

    useEffect(() => {
        if (localStorage.getItem('lastCheckboxState')) {
            setShortFilms(JSON.parse(localStorage.getItem('lastCheckboxState')));
        }
    }, []);

    return (<form className='search-form' onSubmit={submitHandler}>
        <div className='search-form__search-container'>
            <input placeholder='Фильм' onChange={filmNameHanlder} type='text' name='filmSearch' className='search-form__input'></input>
            <button type='submit' className='search-form__submit-button' />
        </div>
        <div className='search-form__checkbox-container'>
            <FilterCheckbox onFilterChange={handleFilterChange} shortFilms={shortFilms} />
        </div>
    </form>)
}
export default SearchForm;