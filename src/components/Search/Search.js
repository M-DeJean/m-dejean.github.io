import React, { Component } from 'react';
import ApiService from '../../api/api-service';
import Giphy from '../Giphy/Giphy';

export default class Search extends Component {

    state = {
        search: '',
        results: [],
        err: false
    }

    handleChange = ev => {
        this.setState({ search: ev.target.value })
    }

    handleSearch = ev => {
        ev.preventDefault()
        if(this.state.search.length === 0) {
            this.setState({ err: true })
        }
        ApiService.searchGif(this.state.search)
            .then(res => {
                this.setState({ results: res.data, search: '' }, () => {
                    console.log(`IDENTIFICATION: ${this.state.results[0]}`)
                })
            })
    }

    renderGifs() {
        const gifs = this.state.results
        return gifs.map(gif =>
            <Giphy 
                key={gif.id}
                url={gif.images.fixed_height.webp}
            />
            )
    }


    render() {
        return(
            <div className='search'>
                <form>
                    <h1>Search</h1>
                    <p>Search for a GIF</p>
                    <input className='search-bar'
                        type='text'
                        value={this.state.search}
                        onChange={this.handleChange}
                        // name='search'
                    />
                    <button type='submit' onClick={this.handleSearch}>
                        Search
                    </button>
                </form>
                <>
                {this.state.results.length > 0 ? this.renderGifs() : 'Hello'}
                </>
            </div>
        )
    }
}