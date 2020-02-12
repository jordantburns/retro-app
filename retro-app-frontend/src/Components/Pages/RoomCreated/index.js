import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import Button from '@material-ui/core/Button';
import { Input } from 'semantic-ui-react'
import Board from 'react-trello'

let eventBus = undefined
let cardNumbers = 1

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'What went well',
            cards: [
            ],
            cardStyle: { backgroundColor: '#ffffa5' }
        },
        {
            id: 'lane2',
            title: 'What didn\'t go well',
            cards: [],
            cardStyle: { backgroundColor: '#ffffa5' }
        },
        {
            id: 'lane3',
            title: 'New things to try',
            cards: [],
            cardStyle: { backgroundColor: '#ffffa5' }
        }
    ]
}

const setEventBus = (handle) => {
    eventBus = handle
}

export const RoomCreated = ({ context: { firstName, pin, onChange, cardDescription }, history}) => {

    const onSubmit = event => {
        event.preventDefault()
        // eventBus.publish({type: 'ADD_CARD', laneId: 'lane1', card: {id: "card-" +cardNumbers, title: "hello", label: "15 mins", description: cardDescription.value}})
        eventBus.publish({type: 'ADD_CARD', laneId: 'lane1', card: {id: "card-" +cardNumbers, title: '', description: cardDescription.value}})
        cardNumbers++
        onChange({target: {name: 'cardDescription', value: ''}}, {name: 'cardDescription', cardDescription: ''})
    }

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
            label="Type your message for the board"
            name="cardDescription"
            onChange={(event, data) => onChange(event, data)}
            value={cardDescription.value}
        />
        <Button variant="contained" type="submit" onClick={onSubmit}>Post it!</Button>
        <Board canAddLanes={true} editLaneTitle={true} data={data} eventBusHandle={setEventBus} />
    </Fragment>
);
}

RoomCreated.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(RoomCreated)