import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ApiService from '../../api/api-service';
import Giphy from '../Search/Search';

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
                this.setState({ results: res.data, search: '' })
            })
    }

    renderGifs() {
        const gifs = this.state.results
        return gifs.map(gif =>
            <Route exact path={'/search'}>
                <Giphy 
                data={gif}
                key={gif.id}
                id={gif.id}
                url={gif.images.fixed_width.webp}
            />
            </Route>
            
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
                    />
                    <button type='submit' onClick={this.handleSearch}>
                        Search
                    </button>
                </form>
                <Link to='/trending'>Trending</Link>
                <>
                {this.state.results.length > 0 ? this.renderGifs() : 'Random Gifs Here'}
                </>
            </div>
        )
    }
}