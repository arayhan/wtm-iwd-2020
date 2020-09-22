import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import '../../Services/Firebase'
import NotFound from "./NotFound/NotFound"
import Dashboard from "./Dashboard/Dashboard"
import Register from "./Register/Register"
import NavbarTop from "../../NavbarTop"
import Event from "./Event/Event"
import Calender from "./Calender/Calender"
import VRRoom from "./VRRoom/VRRoom"

class MemberArea extends Component {
  render() {
    const { isCompleteProfile, user, setUserProfile } = this.props

    return (
      <div className="App">
        {isCompleteProfile &&
          <div id="dashboard-section">
            <NavbarTop user={user} />
            <Switch>
              <Route exact path="/"
                render={props => (
                  <Dashboard {...props} user={user} />
                )} />
              <Route exact path="/event/:id"
                render={props => (
                  <Event {...props} user={user} />
                )} />
              <Route exact path="/event/:id/vr-room"
                render={props => (
                  <VRRoom {...props} user={user} />
                )} />
              <Route exact path="/calender/"
                render={props => (
                  <Calender {...props} user={user} />
                )} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        }

        {!isCompleteProfile &&
          <div>
            <Switch>
              <Route exact path="/"
                render={props => (
                  <Register {...props} user={user} setUserProfile={setUserProfile} />
                )} />
            </Switch>
          </div>
        }
      </div>
    )
  }
}

export default MemberArea
