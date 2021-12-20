import { filmsUrl } from "./constants";
class MoviesApi {
    constructor() {
        this._url = filmsUrl;
        this._headers = { "Content-Type": "application/json" }
        this._checkResponse = this._checkResponse.bind(this);
    }
    _checkResponse(response) {
        return response.ok ? response.json() : Promise.reject(response.status);
    }
    getMovies() {
        return fetch(`${this._url}/beatfilm-movies`)
            .then(res => this._checkResponse(res));
    }
}
const moviesApi = new MoviesApi();
export default moviesApi;