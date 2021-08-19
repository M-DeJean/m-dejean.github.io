import React, { Component } from "react";
import ApiService from "../../api/api-service";
import GiphyContext from "../../context/GiphyContext";
import Gifs from './Gifs'

export default class Trending extends Component {

    static contextType = GiphyContext

    state = {
        results: []
    }
    componentDidMount() {
        let _data
        ApiService.getTrending()
            .then(res => {
                _data = res.data
                this.context.setData(_data)
                // this.setState({ results: res.data })
            })
    }

    renderTrending() {
        const data = this.context.data
        return data.map(gif =>
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
                {this.context.data.length ? this.renderTrending() : this.renderLoading()}
            </div>
        )
    }
}