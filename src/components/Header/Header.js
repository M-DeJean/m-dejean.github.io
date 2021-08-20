import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import ApiService from '../../api/api-service'
import GiphyContext from '../../context/GiphyContext'
import "./Header.css"
import Search from '../Search/Search'

class Header extends Component {

    static contextType = GiphyContext

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
        let _data
        // if(this.state.search.length === 0) {
        //     this.setState({ err: true })
        // }
        ApiService.searchGif(this.state.search)
            .then(res => {
                _data = res.data
                this.setState({ results: _data, search: '' })
                this.context.setData(_data)
            })
            .then(res => {
                this.props.history.push('/search', {
                    props: this.state.results
                })
            })
    }

    // renderGifs() {
    //     const gifs = this.state.results
    //     return gifs.map(gif =>
    //         <Route exact path={'/search'}>
    //             <Giphy 
    //             data={gif}
    //             key={gif.id}
    //             id={gif.id}
    //             url={gif.images.fixed_width.webp}
    //         />
    //         </Route>

    //         )
    // }


    render() {
        return (
            <div className='header'>
                <div className='inner-header'>
                <Link to='/'>
                    <h1 className='title'>
                        GIPHY
                    </h1>
                </Link>
                <form onSubmit={this.handleSearch}>
                    <input className='search-bar'
                        placeholder='Search all the GIFs'
                        type='text'
                        value={this.state.search}
                        onChange={this.handleChange}
                        required
                    />
                    <button type='submit'>
                        Search
                    </button>
                </form>
                <Link to='/trending'>Trending</Link>
                {/* <>
                {this.state.results.length > 0 ? this.renderGifs() : 'Random Gifs Here'}
                </> */}
                </div>
            </div>
        )
    }
}

export default withRouter(Header)