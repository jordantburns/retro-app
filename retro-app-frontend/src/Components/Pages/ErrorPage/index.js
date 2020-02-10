import React from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'

export const ErrorPage = ({ context: { onChange, firstName }, history}) => {

    return (
        <h1>Error</h1>
    );
}

ErrorPage.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(ErrorPage)