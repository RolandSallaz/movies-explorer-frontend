import SearchForm from '../SearchForm/SearchForm';
import './Search.css';
function Search(props) {
    return (
        <div className='search'>
            <SearchForm onFormSubmit={props.onFormSubmit} />
        </div>
    );
}
export default Search;