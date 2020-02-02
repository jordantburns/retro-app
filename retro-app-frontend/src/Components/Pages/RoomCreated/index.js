import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import Button from '@material-ui/core/Button';
import { Input } from 'semantic-ui-react'
import Board from 'react-trello'

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'What went well',
            cards: [
            ]
        },
        {
            id: 'lane2',
            title: 'What didn\'t go so well',
            cards: []
        },
        {
            id: 'lane3',
            title: 'New things to try',
            cards: []
        }
    ]
}

let eventBus = undefined

let thistext = ''

const setEventBus = (handle) => {
    eventBus = handle
}

const onSubmit = event => {
    event.preventDefault()
    eventBus.publish({type: 'ADD_CARD', laneId: 'lane1', card: {id: "M1", title: "Buy Milk", label: "15 mins", description: "Also set reminder"}})
}

export const RoomCreated = ({ context: { firstName, pin, onChange }, history}) => {

return (
    <Fragment>
        <p>Your pin is: {pin}</p>

        {/* <div className="App">
            <header className="App-header">
            <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
            <h1>Welcome {firstName.value}</h1>
            <h2>Your pin is: {pin}</h2>
            </header>
        </div> */}
        <Input
            label="Enter some text for the card"
            name="firstName"
            onChange={onChange}
            thistext={thistext.value}
        />
        <Button variant="contained" type="submit" onClick={() => onSubmit}>Submit</Button>
        <Board data={data} eventBusHandle={setEventBus} />
    </Fragment>
);
}

RoomCreated.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(RoomCreated)