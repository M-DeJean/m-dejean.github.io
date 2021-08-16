import api from './api'

const ApiService = {
    searchGif( search ) {
        return fetch(`${api.API_ENDPOINT}search?api_key=rh9A0IPelrZe4QsSjqs3HADbh0MTylva&q=${search}&limit=25&offset=0&rating=g&lang=en`)
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },

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