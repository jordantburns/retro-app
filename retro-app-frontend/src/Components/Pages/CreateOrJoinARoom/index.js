import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import Button from '@material-ui/core/Button';

export const CreateOrJoinARoom = ({ context: { firstName }, history}) => {

    const redirectToCreate = () => {
        history.push(getPageRoute(4))
    }

    const redirectToJoin = () => {
        history.push(getPageRoute(3))
    }

return (
    <Fragment>
        <div className="App">
            <header className="App-header">
            <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
            <h1>Welcome {firstName.value}</h1>
            <Button onClick={redirectToCreate} variant="contained">Create meeting</Button>
            <Button onClick={redirectToJoin} variant="contained">Join meeting</Button>
            </header>
        </div>
    </Fragment>
);
}

CreateOrJoinARoom.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(CreateOrJoinARoom)