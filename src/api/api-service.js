import api from './api'

const ApiService = {
    getTrending() {
        return fetch(`${api.API_ENDPOINT}trending?api_key=rh9A0IPelrZe4QsSjqs3HADbh0MTylva&limit=25&rating=g`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    }
}

export default ApiService