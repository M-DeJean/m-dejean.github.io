import React, { Component } from 'react';

const GiphyContext = React.createContext({
    data: [],
    details: {},
    setError: () => { },
    clearError: () => { },
    setData: () => { },
    setDetails: () => { }
})

export default GiphyContext

export class GiphyProvider extends Component {
    state = {
        data: [],
        details: [],
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

    setDetails = details => {
        this.setState({ details })
    }

    render(){
        const value = {
            data: this.state.data,
            details: this.state.details,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setData: this.setData,
            setDetails: this.setDetails
        }
        return(
            <GiphyContext.Provider value={value}>
                {this.props.children}
            </GiphyContext.Provider>
        )
    }
}