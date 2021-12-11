import { apiUrl } from './constants';
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
}
const mainApi = new MainApi();
export default mainApi;