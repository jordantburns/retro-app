import React from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import Button from '@material-ui/core/Button';
import { Input } from 'semantic-ui-react'

export const JoinARoom = ({ context: { onChange, firstName }, history}) => {

  const onSubmit = event => {
    event.preventDefault()

    history.push(getPageRoute(2))
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="App">
        <header className="App-header">
          <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
          <h1>Welcome {firstName.value}</h1>

          <Input
            label="Enter your name"
            name="firstName"
            onChange={onChange}
            firstName={firstName.value}
          />

          <Button variant="contained" type="submit">Submit</Button>
        </header>
      </div>
    </form>
  );
}

JoinARoom.propTypes = {
  context: PropTypes.object,
  history: PropTypes.object
}

export default withContext(JoinARoom)