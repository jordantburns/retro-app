import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import Button from '@material-ui/core/Button';

export const CreateARoom = ({ context: { firstName }}) => {

    onSubmit = async event => {
        event.preventDefault()
        const { context, history } = this.propTypes
        if(!context.submittedFormSuccessfully) {
            let rawResponse = await submitUtil(context)

            if(rawResponse.status === 200) {
                history.push(getPageRoute(1))
            }
            else {
                history.push(getPageRoute(2))
            }
        }
        else {
            history.push(getPageRoute(3))
        }
    }

return (
    <Fragment>
        <form onSubmit={this.onSubmit}>
            <div className="App">
                <header className="App-header">
                <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
                <h1>Welcome {firstName.value}</h1>
                <Button variant="contained">Click to fully create meeting</Button>
                </header>
            </div>
        </form>
    </Fragment>
);
}

CreateARoom.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(CreateARoom)