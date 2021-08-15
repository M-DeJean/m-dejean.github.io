import React, { Component } from 'react';

export default class Search extends Component{
    render() {
        return(
            <div className='search'>
                <form>
                    <h1>Search</h1>
                    <p>Search for a GIF</p>
                    <input
                        type='text'
                    />
                </form>
            </div>
        )
    }
}