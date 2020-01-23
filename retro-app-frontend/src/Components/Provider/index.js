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
            pin: '',
            onChange: this.onChange,
            submittedFormSuccessfully: false,
            onFormSubmission: this.onFormSubmission
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

    onFormSubmission = (pin) => {
        const copyOfState = Object.assign({}, this.state)
        copyOfState.submittedFormSuccessfully = true
        copyOfState.pin = pin

        this.setState(copyOfState)
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