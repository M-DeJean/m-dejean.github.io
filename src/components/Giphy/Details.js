import React, { Component } from 'react';
import GiphyContext from '../../context/GiphyContext';
import Giphy from './Giphy';

export default class Details extends Component{

    static contextType = GiphyContext

    render(){
        const { data } = this.context
        const id = this.props.match.params.id
        const gif = data.filter(gif => gif.id === id)
        return(
            <div>
                <img
                    alt=''
                    src={gif[0].images.original.webp}
                />
                hello
                {console.log(this.props.data)}
            </div>
        )
    }
}