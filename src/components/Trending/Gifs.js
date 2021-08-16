import React, { Component } from 'react';

export default class Gifs extends Component{
    render() {
        const url = this.props.img
        console.log(this.props)
        return(
            <div>
               <img
               src={url}
                alt=''
               /> 
            </div>
        )
    }
}