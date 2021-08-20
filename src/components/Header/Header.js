import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import ApiService from '../../api/api-service'
import GiphyContext from '../../context/GiphyContext'
import "./Header.css"

class Header extends Component {

    state = {
        search: ''
    }

    handleChange = ev => {
        this.setState({ search: ev.target.value })
    }

    handleSearch = ev => {
        ev.preventDefault()
        let _data
        ApiService.searchGif(this.state.search)
            .then(res => {
                _data = res.data
                this.setState({ search: '' })
                this.context.setData(_data)
                this.props.history.push('/search')
            })
    }


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
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
Header.contextType = GiphyContext