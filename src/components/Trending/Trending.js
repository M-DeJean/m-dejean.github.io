import React, { Component } from "react";
import ApiService from "../../api/api-service";

export default class Trending extends Component {
    componentDidMount(){
        ApiService.getTrending()
            .then(res => {
                console.log(res.data)
                console.log("META", res.meta)
            })
    }

    render() {
        return(
            <div className='trending'>
                TRENDING
            </div>
        )
    }
}