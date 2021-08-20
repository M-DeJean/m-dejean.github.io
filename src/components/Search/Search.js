import React, { Component } from 'react'
import GiphyContext from '../../context/GiphyContext'
import './Search.css'
import Gifs from './Gifs'
export default class Search extends Component {

    static contextType = GiphyContext

    renderGifs() {
        const { data } = this.context
        return data.map(data =>
            <Gifs
                key={data.id}
                img={data.images.fixed_width.webp}
                id={data.id}
            />
        )
    }

    render() {
        return (
            <div className='gif-list'>
                {this.renderGifs()}
            </div>
        )
    }
}