import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import Button from '@material-ui/core/Button'
import SubmitUtil from '../../Utils'
import { getPageRoute } from '../../../helpers/pagehelper'
import 'isomorphic-fetch'

export class CreateARoom extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = async event => {
        event.preventDefault()
        const { context, history } = this.props
        if(!context.submittedFormSuccessfully) {
            let rawResponse = await SubmitUtil(context, "room/create")

            if(rawResponse.status === 200) {
                context.onFormSubmission(rawResponse.pin)
                history.push(getPageRoute(5))
            }
            else {
                history.push(getPageRoute(2))
            }
        }
        else {
            history.push(getPageRoute(3))
        }
    }

    render() {
        const { context, history } = this.props
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className="App">
                        <header className="App-header">
                        <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
                        <h1>Welcome {context.firstName.value}</h1>
                        <Button onClick={this.onSubmit} variant="contained">Click to fully create meeting</Button>
                        </header>
                    </div>
                </form>
            </Fragment>
        );
    }
}

CreateARoom.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(CreateARoom)