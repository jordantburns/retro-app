import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import Button from '@material-ui/core/Button';
import { Input } from 'semantic-ui-react'
import * as SignalR from '@microsoft/signalr'

export const Index = ({ context: { onChange, firstName }, history}) => {

  useEffect(() => {
    let connection = new SignalR.HubConnectionBuilder()
    .withUrl("/signalr")
    .build();

    connection.on("ReceiveMessage", data => {
        console.log(data);
    });

    connection.start()
        .then(() => connection.invoke("SendMessage", "Hello"));
  })

  const onSubmit = event => {
    event.preventDefault()

    history.push(getPageRoute(2))
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="App">
        <header className="App-header">
          <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
          <h1>
            Retrospective Application
          </h1>

          <Input
            label="Enter your name"
            name="firstName"
            onChange={onChange}
            value={firstName.value}
          />

          <Button variant="contained" type="submit">Submit</Button>
          {/* <div className='home-button-container'>
            <Button variant="contained">Create meeting</Button>
            <Button variant="contained">Join meeting</Button>
          </div> */}
        </header>
      </div>
    </form>
  );
}

Index.propTypes = {
  context: PropTypes.object,
  history: PropTypes.object
}

export default withContext(Index)