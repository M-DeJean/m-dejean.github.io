import React, { Component } from 'react';

const GiphyContext = React.createContext({
    data: [],
    setError: () => { },
    clearError: () => { },
    setData: () => { }
})

export default GiphyContext

export class GiphyProvider extends Component {
    state = {
        data: [],
        error: null
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setData = data => {
        this.setState({ data })
    }

    render(){
        const value = {
            data: this.state.data,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setData: this.setData
        }
        return(
            <GiphyContext.Provider value={value}>
                {this.props.children}
            </GiphyContext.Provider>
        )
    }
}