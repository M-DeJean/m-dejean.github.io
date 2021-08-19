import React, { Component } from 'react';
import GiphyContext from '../../context/GiphyContext';
import Giphy from './Giphy';

export default class Details extends Component {

    static contextType = GiphyContext

    state = {
        gif: {},
        loading: true
    }

    componentDidMount() {
        this.setState({ loading: true })
        const { data } = this.context
        const id = this.props.match.params.id
        const gif = data.filter(gif => gif.id === id)
        const details = gif
        this.context.setDetails(details)
        this.setState({ gif: details })
        this.setState({ loading: false })
    }

    renderDetailedView() {
        return <div>
            {this.context.details.images ? <img
                alt=''
                src={this.context.details[0].gif.images.original.webp}
            /> : <p>LOADING</p>}
        </div>

    }

    static contextType = GiphyContext

    render() {
        const { details } = this.context
        const gif = this.state.gif
        console.log(gif)
        // const { data } = this.context
        // const id = this.props.match.params.id
        // const gif = data.filter(gif => gif.id === id)
        return (
            <div className="details">
             {this.context.details.length ? <img src={details[0].images.original.webp}
             alt=''/>: <p>no details</p>}
            okay
            </div>
        )
    }
}