import React, { Component } from 'react';
import GiphyContext from '../../context/GiphyContext';
import './Details.css'
import Giphy from '../Search/Search';

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
        console.log(details[0])
        const gif = this.state.gif
        // const { data } = this.context
        // const id = this.props.match.params.id
        // const gif = data.filter(gif => gif.id === id)
        return (
            <div className="details">
                {this.context.details.length ?
                    <div className='info'>
                        <div className='user'>
                            <img
                                alt='user avatar'
                                src={details[0].user ? details[0].user.avatar_url : ''}
                            />
                            <a href={details[0].user ? details[0].user.profile_url : ''}
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                {details[0].user ? details[0].user.display_name || details[0].user.username : 'No User Data'}
                            </a>
                        </div>
                        <div className='detailed-gif'>
                            <h2>
                                <a href={details[0].url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    {details[0].title || 'GIPHY'}
                                </a>
                            </h2>
                            <img src={details[0].images.original.webp}
                                alt={details[0].title} />
                            <p className='copy' onClick={() => { navigator.clipboard.writeText(details[0].images.original.url) }}>
                                Copy GIF Link
                            </p>
                        </div>
                        <div className='gif-data'>
                            <p>
                                Dimensions: {details[0].images.original.width} x {details[0].images.original.height} px
                            </p>
                            <p>
                                Frames: {details[0].images.original.frames}
                            </p>
                        </div>
                    </div>
                    : <p>NO DETAILS</p>}
            </div>
        )
    }
}