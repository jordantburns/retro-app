import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import Button from '@material-ui/core/Button';

export const CreateARoom = ({ context: { firstName }}) => {

return (
    <Fragment>
        <div className="App">
            <header className="App-header">
            <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
            <h1>Welcome {firstName.value}</h1>
            <Button variant="contained">Click to fully create meeting</Button>
            </header>
        </div>
    </Fragment>
);
}

CreateARoom.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(CreateARoom)