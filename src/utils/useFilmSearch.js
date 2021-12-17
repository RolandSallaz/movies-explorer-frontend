export function useFilmSearch() {
    const search = ({ moviesArray, movieName }) => {
        const filteredArray = moviesArray.filter(movie => {
            return movie.nameRU.toLowerCase().includes(movieName.toLowerCase());
        });
        return filteredArray;
    }
    return { search }
}