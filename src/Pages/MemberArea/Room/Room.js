import React, { Component } from "react"
import VirtualWorld from "./VirtualWorld"
import { Fade } from "react-reveal"
import '../../../Services/Firebase'
import * as firebase from 'firebase'

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      room: {
        id: props.match.params.id,
        description: 'Welcome to the Virtual Room'
      },
      data: {

      }
    }
  }

  componentDidMount() {
    var usr = firebase.auth()
    var uid = usr.currentUser.uid
    var username = usr.currentUser.displayName
    var email = usr.currentUser.email
    var database = firebase.database()
    var dbrooms = database.ref("rooms")
    var roomid = this.props.match.params.id

    var data

    database.ref("users")
      .child(uid)
      .set({
        userid: uid,
        email: email,
        username: username,
        room: this.props.match.params.id,
      })

    setInterval(function () {
      dbrooms.orderByChild('room').startAt(roomid).endAt(roomid)
        .once('value').then(function (snapshot) {
          // console.log(snapshot.val());
          data = snapshot.val()

          snapshot.forEach(element => {
            // console.log(element.val())
          })
        })
    }, 10000)


    dbrooms.child(uid).onDisconnect().remove()
  }

  componentWillMount() {

  }


  render() {
    const { room } = this.state
    return (
      <div>
        <Fade>
          <div className="center-screen">
            <hr />
            <h3>Loading the Virtual World ...</h3>
            <hr />
          </div>
          <VirtualWorld room={room} />
        </Fade>
      </div>
    )
  }
}

export default Room
