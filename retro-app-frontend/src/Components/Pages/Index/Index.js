import React from 'react';
import Button from '@material-ui/core/Button';

export default function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
        <h1>
          Retrospective Application
        </h1>
        <div className='home-button-container'>
          <Button variant="contained">Create meeting</Button>
          <Button variant="contained">Join meeting</Button>
        </div>
      </header>
    </div>
  );
}