import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Search/Gifs.css'

export default class Gifs extends Component{
    render() {
        const url = this.props.img
        const id = this.props.id
        return(
            // <div>
            //    <img
            //    src={url}
            //     alt=''
            //    /> 
            // </div>
            <div>
                 <Link
                onClick={ (e) => console.log(e.target.getAttribute('data-id'))}
                to={`search/${id}`}
                // onClick={this.handleClick}
            >
                {/* <a href={`/${this.props.id}`}> */}
                <img
                    data-id={id}
                    // onClick={this.handleClick}
                    src={url}
                    alt=''
                />
                {/* </a> */}
                </Link>
            </div>
        )
    }
}