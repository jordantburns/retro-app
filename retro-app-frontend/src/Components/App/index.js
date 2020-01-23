import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import Index from '../Pages/Index'
import CreateOrJoinARoom from '../Pages/CreateOrJoinARoom'
import JoinARoom from '../Pages/JoinARoom'
import CreateARoom from '../Pages/CreateARoom'
import RoomCreated from '../Pages/RoomCreated'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ Index }/>
                <Route exact path={getPageRoute(2)} component={ CreateOrJoinARoom }/>
                <Route exact path={getPageRoute(3)} component={ JoinARoom }/>
                <Route exact path={getPageRoute(4)} component={ CreateARoom }/>
                <Route exact path={getPageRoute(5)} component={ RoomCreated }/>
            </Switch>
        )
    }
}

export default App