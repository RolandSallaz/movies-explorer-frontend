export function useFilmSearch() {
    const search = ({ moviesArray, movieData }) => {
        moviesArray.map(movie => {
            if (movie.nameRU.toLowerCase().includes(movieData.filmName.toLowerCase())) {
                if (!movieData.shortFilms && movie.description >= 40) {
                    return true;
                }
                return true;
            }
            return false;
        });
        return moviesArray;
    }
    return { search }
}