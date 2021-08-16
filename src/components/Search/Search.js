import React, { Component } from 'react';
import ApiService from '../../api/api-service';

export default class Search extends Component {

    state = {
        search: '',
        data: {}
    }

    handleChange = ev => {
        this.setState({ search: ev.target.value })
    }

    handleSearch = ev => {
        ev.preventDefault()
        // const { search } = ev.target
        // this.setState({ search: search.value })
        ApiService.searchGif(this.state.search)
            .then(res => {
                this.setState({ data: res })
            })
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
            </div>
        )
    }
}