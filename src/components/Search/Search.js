import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import GiphyContext from '../../context/GiphyContext'
import './Search.css'
import Gifs from './Gifs'
export default class Search extends Component {

    static contextType = GiphyContext

    state = {
        data: [],
        details: false
    }

    // componentDidMount() {
    //     const data = this.props.location.state.props
    //     this.setState({ data })
    // }

    setData = (e) => {
        const id = e.target.getAttribute('data-id')
        let _details
        // this.setState({ loading: true })
        const { data } = this.context
        // const id = this.props.match.params.id
        const gif = data.filter(gif => gif.id === id)
        const details = gif[0]
        this.context.setDetails(_details)
        // this.setState({ gif: details })
        // this.setState({ loading: false })

    }

    renderGiphs() {
        const { data } = this.context
        console.log('DATA:    ', data)
        return data.map(data =>
            <Gifs 
                key={data.id}
                img={data.images.fixed_width.webp}
                id={data.id}
            />
            // <li className='giphy' key={data.id}>
            //     <Link
            //     onClick={ (e) => console.log(e.target.getAttribute('data-id'))}
            //     to={`search/${data.id}`}
            //     // onClick={this.handleClick}
            // >
            //     {/* <a href={`/${this.props.id}`}> */}
            //     <img
            //         data-id={data.id}
            //         // onClick={this.handleClick}
            //         src={data.images.fixed_width.webp}
            //         alt=''
            //     />
            //     {/* </a> */}
            //     </Link>
            // </li>
        )

    }

    // renderDetails() {
    //     const data = this.state.data
    //     return <Route
    //         exact
    //         path={'/:url/:id'}
    //         render={(props) => 
    //             <Details 
    //                 data='hello'
    //                 {...props}
    //             />
    //         }

    //     />


    // }

    handleClick = e => {
        e.preventDefault()
        // const id = e.currentTarget.getAttribute('data-id')
        // this.props.history.push({ pathname: `search/${id}` })
        this.renderDetails()
    }
    render() {
        // const url = this.props.location.state.props.url
        // const url = this.props.location.state.props.images.fixed_width.webp
        // const id = this.props.location.state.props.id
        return (
            this.renderGiphs()
            // <div className='giphy'>
            //     {/* <Link
            //         to={`/${id}`}
            //         onClick={this.handleClick}
            //     > */}
            //     {/* <a href={`/${this.props.id}`}> */}
            //     <img
            //         onClick={this.handleClick}
            //         src={url}
            //         alt=''
            //     />
            //     {/* </a> */}
            //     {/* </Link> */}
            // </div>
        )
    }
}