import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import Button from '@material-ui/core/Button'
import SubmitUtil from '../../Utils'
import { getPageRoute } from '../../../helpers/pagehelper'
import { Input } from 'semantic-ui-react'
import 'isomorphic-fetch'

export class JoinARoom extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = async event => {
        event.preventDefault()
        const { context, history } = this.props
        if(!context.submittedFormSuccessfully) {
            let rawResponse = await SubmitUtil(context, "room/join")

            if(rawResponse.status === 200) {
                history.push(getPageRoute(6))
            }
            else {
                history.push(getPageRoute(7))
            }
        }
        else {
            history.push(getPageRoute(3))
        }
    }

    render() {
        const { context, history } = this.props
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className="App">
                        <header className="App-header">
                        <img alt='hi' src='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/logo-stockport-full%402x.png'></img>
                        <h1>Welcome {context.firstName.value}</h1>
                        <Input
                            label="Enter the pin"
                            name="pinToJoin"
                            onChange={context.onChange}
                            value={context.pinToJoin.value}
                        />
                        <Button onClick={this.onSubmit} variant="contained">Join meeting</Button>
                        </header>
                    </div>
                </form>
            </Fragment>
        );
    }
}

JoinARoom.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(JoinARoom)