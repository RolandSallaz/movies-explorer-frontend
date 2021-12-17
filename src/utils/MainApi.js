import { apiUrl, filmsUrl } from './constants';
class MainApi {
    constructor() {
        this._url = apiUrl;
        this._headers = { "Content-Type": "application/json" }
        this._checkResponse = this._checkResponse.bind(this);
    }
    _checkResponse(response) {
        return response.ok ? response.json() : Promise.reject(response.status);
    }
    loginIn({ email, password }) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => this._checkResponse(res));
    }
    register({ email, password, name }) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
            .then(res => this._checkResponse(res));
    }
    getCurrentUser() {
        return fetch(`${this._url}/users/me`, {
            credentials: 'include',
        })
            .then(res => this._checkResponse(res));
    }
    saveCard(cardData) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                country: cardData.country,
                director: cardData.director,
                duration: cardData.duration,
                year: cardData.year,
                description: cardData.description,
                image: `${filmsUrl}${cardData.image.url}`,
                trailer: cardData.trailerLink,
                thumbnail: `${filmsUrl}${cardData.image.formats.thumbnail.url}`,
                nameRU: cardData.nameRU,
                nameEN: cardData.nameEN,
                movieId: cardData.id
            }),
        })
            .then(res => this._checkResponse(res));
    }
    deleteCard(cardId) {
        return fetch(`${this._url}/movies/${cardId}`, {
            method: "DELETE",
            credentials: 'include'
        })
            .then(res => this._checkResponse(res));
    }
    logOut() {
        return fetch(`${this._url}/signout`, {
            method: "POST",
            credentials: 'include',
        })
            .then(res => this._checkResponse(res));
    }
    updateUser({ name, email }) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({ name, email })
        })
            .then(res => this._checkResponse(res));
    }
    getMovies() {
        return fetch(`${this._url}/movies`, {
            credentials: 'include',
            headers: this._headers
        })
            .then(res => this._checkResponse(res));
    }
}
const mainApi = new MainApi();
export default mainApi;