import React, { Component } from 'react';
import GiphyContext from '../../context/GiphyContext';
import './Details.css'

export default class Details extends Component {

    static contextType = GiphyContext

    componentDidMount() {
        const { data } = this.context
        const id = this.props.match.params.id
        const gif = data.filter(gif => gif.id === id)
        const details = gif
        this.context.setDetails(details)
    }

    static contextType = GiphyContext

    render() {
        const { details } = this.context
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
                    : <p></p>}
            </div>
        )
    }
}