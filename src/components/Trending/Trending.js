import React, { Component } from "react";
import ApiService from "../../api/api-service";
import Gifs from './Gifs'

export default class Trending extends Component {

    state = {
        results: []
    }
    componentDidMount() {
        ApiService.getTrending()
            .then(res => {
                this.setState({ results: res.data })
            })
    }

    renderTrending() {
        const gifs = this.state.results
        return gifs.map(gif =>
            <Gifs
                key={gif.id}
                img={gif.images.fixed_width.webp}
            />
        )

    }

    renderLoading() {
        return <div> LOADING </div>
    }

    render() {
        return (

            <div className='trending'>
                {this.state.results.length > 0 ? this.renderTrending() : this.renderLoading()}
            </div>
        )
    }
}