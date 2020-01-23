import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import Button from '@material-ui/core/Button';

export const RoomCreated = ({ context: { firstName, pin }, history}) => {

return (
    <Fragment>
        <div className="App">
            <header className="App-header">
            <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
            <h1>Welcome {firstName.value}</h1>
            <h2>Your pin is: {pin}</h2>
            </header>
        </div>
    </Fragment>
);
}

RoomCreated.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(RoomCreated)