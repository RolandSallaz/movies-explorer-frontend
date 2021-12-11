import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
function SearchForm(props) {
    const [filmName, setFilmName] = useState('');
    const [filmsError, setFilmsError] = useState('');
    const [shortFilms, setShortFilms] = useState(false);
    const handleShortFilmsChange = () => {
        setShortFilms(!shortFilms);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.onFormSubmit({ filmName, shortFilms })
        setFilmsError(e.target.validationMessage);
    }
    const filmNameHanlder = (e) => {// доделать валидацию формы
        setFilmName(e.target.value);
    }
    return (<form className='search-form' onSubmit={submitHandler}>
        <div className='search-form__search-container'>
            <input placeholder='Фильм' onChange={filmNameHanlder} type='text' name='filmSearch' className='search-form__input' required></input>
            <button type='submit' className='search-form__submit-button' />
        </div>
        <div className='search-form__checkbox-container'>
            <FilterCheckbox onFilterChange={handleShortFilmsChange} />
        </div>
        <span className='search-form__error'>{filmsError}</span>
    </form>)
}
export default SearchForm;