export function useFilmSearch() {
    const search = ({ moviesArray, movieData }) => {
        const filteredArray = moviesArray.filter(movie => {
            if (movie.nameRU.toLowerCase().includes(movieData.filmName.toLowerCase())) {
                if (!movieData.shortFilms && movie.description >= 40) {
                    return true;
                }
                return true;
            }
            return false;
        });
        return filteredArray;
    }
    return { search }
}