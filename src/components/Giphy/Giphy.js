import React, { Component } from 'react'

export default class Giphy extends Component {
    render() {
        const url = this.props.url
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