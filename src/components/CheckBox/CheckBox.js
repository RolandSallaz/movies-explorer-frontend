import './CheckBox.css';
function CheckBox(props) {
    return (
        <label for='short-film' className='checkbox'>
            <p className='checkbox__label'>Короткометражки</p>
            <input type='checkbox' id='short-film' name='short-film' className='checkbox__input' value='short-film' />
            <div class='checkbox__front'>
                <div className='checkbox__status' />
            </div>
        </label>
    )
}
export default CheckBox;