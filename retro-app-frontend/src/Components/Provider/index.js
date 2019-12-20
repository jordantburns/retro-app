import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'

class Provider extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: {
                value: '',
                isValid: false
            },
            onChange: this.onChange
        }
    }

    onChange = (event, isValid) => {
        this.setState({
            [event.target.name]: {
                value: event.target.value,
                isValid
            }
        })
    }

    render() {
        const { children } = this.props
        return <Context.Provider value={this.state}>{children}</Context.Provider>
    }
}

Provider.propTypes = {
    history: PropTypes.object,
    context: PropTypes.object,
    children: PropTypes.object,
    mockState: PropTypes.object
}

export default Provider