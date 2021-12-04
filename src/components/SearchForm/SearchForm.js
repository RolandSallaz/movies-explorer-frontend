import CheckBox from '../CheckBox/CheckBox';
import './SearchForm.css';
function SearchForm(props) {
    return (<form className='search-form'>
        <div className='search-form__search-container'>
            <input placeholder='Фильм' type='text' name='filmSearch' className='seatch-form__input'></input>
            <button type='submit' className='search-form__submit-button' />
        </div>
        <div className='search-form__checkbox-container'>
            <CheckBox />
        </div>

    </form>)
}
export default SearchForm;