import './FilterCheckbox.css';
function FilterCheckbox(props) {
    return (
        <label for='short-film' className='filter-checkbox'>
            <p className='filter-checkbox__label'>Короткометражки</p>
            <input type='checkbox' id='short-film' name='short-film' className='filter-checkbox__input' value='short-film' />
            <div class='filter-checkbox__front'>
                <div className='filter-checkbox__status' />
            </div>
        </label>
    )
}
export default FilterCheckbox;