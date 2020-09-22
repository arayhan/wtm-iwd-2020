import React, { Component } from "react"
import { Fade } from "react-reveal"
import '../../../Services/Firebase'
import Chat from "../Room/Chat"
import { db } from "../../../Services/Firebase"
import { Button, Drawer } from 'antd'
import { Link } from "react-router-dom"
import Breakpoint, { BreakpointProvider } from "react-socks"

class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: {
        id: props.match.params.id,
        description: 'Welcome'
      },
      data: {},
      isChatVisible: false,
    }
  }

  async componentDidMount() {
    const eventId = this.props.match.params.id
    const uid = this.props.user.uid

    await db.ref("ongoing")
      .child(eventId)
      .child(uid)
      .set({
        uid: uid,
      })

    db.ref("ongoing").child(eventId).child(uid).onDisconnect().remove()
  }

  componentWillMount() {

  }

  renderChatButton = () => {
    return (
      <img src="/chat-room-button.png" width="70px" height="70px" />
    )
  };

  onClose = () => {
    this.setState({
      isChatVisible: false,
    })
  };

  showDrawer = () => {
    this.setState({
      isChatVisible: true,
    })
  };

  render() {
    const { event, isChatVisible } = this.state
    return (
      <div>
        <Fade>
          <div>
            <iframe width="100%" height="700"
              src="https://www.youtube.com/embed/live_stream?channel=UCkAGrHCLFmlK3H2kd6isipg&autoplay=1"
              frameBorder="0"
              allowFullScreen />

            <BreakpointProvider>
              <div>
                <Breakpoint medium down>
                  <Drawer
                    title="IWD 2020 Chat Room"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={isChatVisible}
                    width={'100%'}
                  >
                    <Chat chatContext="event" eventId={event.id} />
                  </Drawer>
                </Breakpoint>
                <Breakpoint large up>
                  <Link to={`/event/${event.id}/vr-room`}>
                    <Button onClick={() => {
                      window.scrollTo(0, 0)
                    }}>VR Room</Button>
                  </Link>
                  <Drawer
                    title="IWD 2020 Chat Room"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={isChatVisible}
                    width={'30%'}
                  >
                    <Chat chatContext="event" eventId={event.id} />
                  </Drawer>
                </Breakpoint>
              </div>
            </BreakpointProvider>

            <BreakpointProvider>
              <div onClick={() => {
                this.showDrawer()
              }}>
                <Breakpoint medium down>
                  <div className="chat--button--mobile">
                    {this.renderChatButton()}
                  </div>
                </Breakpoint>
                <Breakpoint large up>
                  <div className="chat--button">
                    {this.renderChatButton()}
                  </div>
                </Breakpoint>
              </div>
            </BreakpointProvider>
            {/*<Chat chatContext="event" eventId={event.id}/>*/}
          </div>
        </Fade>
      </div>
    )
  }
}

export default Event
