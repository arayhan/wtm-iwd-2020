import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Fade } from "react-reveal"
import Avatar from 'react-avatar'
import MaterialIcon from "material-icons-react"
import { db } from './../../../Services/Firebase'
import EventDetail from "./EventDetail"
import firebase from 'firebase'
import { getDateToday, scrollToTop } from "../../../Utils/utils"
import { Drawer, Popover } from "antd"
import Chat from "../Room/Chat"
import Breakpoint, { BreakpointProvider } from "react-socks"
import Background from "../../../Assets/images/pictures/dashboard-banner.png"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listEvents: [],
      isVisible: false,
      isRegistered: false,
      confirmLoading: false,
      isLoading: true,
      chosenEvent: {},
      eventId: 0,
      isDetailFetched: false,
      today: ',',
      isChatVisible: false,
      isOnClick: false,
    }
  }

  componentDidMount = async () => {
    try {

      //Filter Peserta

      // await db.ref('events').child('-M5M_gsmfAhB7V-m_q3N').child('participants')
      //   .once('value', async snapshot => {
      //     let selectedEvent = [];
      //     let selectedEventData = [];
      //     snapshot.forEach((snap) => {
      //       if(!selectedEvent.includes(snap.val().email)){
      //         selectedEvent.push(snap.val().email);
      //         selectedEventData.push(snap.val());
      //       }
      //     });
      //     console.log(selectedEvent);
      //     await db.ref('events').child('-M5M_gsmfAhB7V-m_q3N').child('participants').set(selectedEventData);
      //   });

      await scrollToTop()
      await db.ref('events').on('value', snapshot => {
        let listEvents = []
        snapshot.forEach((snap) => {
          listEvents.push(snap.val())
        })
        listEvents.sort(function (a, b) {
          return a.timestamp - b.timestamp
        })
        this.setState({
          isLoading: false,
          listEvents: listEvents,
          dateToday: getDateToday(),
        })
      })
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false })
    }
  };

  getMotto = () => {
    if (this.props.user) {
      const { superPower, superPowerReason } = this.props.user
      return (
        <div>
          <p>I wanna have "{superPower}" Power because "{superPowerReason}"</p>
        </div>
      )
    }
    return `"-"`
  };

  showEventDetail = (isRegistered) => {
    this.setState({
      isVisible: true,
      isRegistered: isRegistered
    })
  };

  setEventDetail = (eventId) => {
    this.setState({
      eventId: eventId,
      isOnClick: true,
    })
  };

  handleOnModalClose = () => {
    this.setState({
      isVisible: false,
      isRegistered: false,
      isOnClick: false,
    })
  };

  isRegisteredEvent = (eventId) => {
    const { user } = this.props
    const isRegistered = user.registeredEvents !== undefined ? user.registeredEvents : []
    return (isRegistered.includes(eventId))
  };

  isEventHappening = (startDate) => {
    const { dateToday } = this.state
    return (dateToday === startDate)
  };

  setOnClickModal = (value) => {
    this.setState({
      isOnClick: value
    })
  };

  renderEventCard = (event, key) => {
    const isEventHappening = this.isEventHappening(event.startDate)
    const isRegistered = this.isRegisteredEvent(event.id)

    return (
      <div className="card row col p-20 w-min-220 w-max-220 mr-15 mb-15" key={key}>
        <div className="mb-15">
          <div className="font-size-large font-bold font-center">{event.name}</div>
          <div className="font-size-normal font-center">
            {event.startDate} - {event.startTime}
          </div>
          <img
            src={event.imageUrl}
            className="mt-15"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              this.setEventDetail(event.id)
              this.showEventDetail(isRegistered)
            }}
          />
        </div>
        <div className="row w-full">
          {isRegistered === true && (
            <div className="row col w-full">
              <a href={event.youtubeURL} target="_blank" className="w-full mb-5">
                <button
                  className="button button-small font-center button-primary w-full"
                  // disabled={!isEventHappening}
                  onClick={async () => { await scrollToTop() }}>
                  Join Live Streaming!
                    </button>
              </a>

              {!isEventHappening &&
                <div className="row">
                  <a
                    href={event.calendarURL}
                    target="_blank"
                    className="button button-small font-center button-secondary w-full mr-5">
                    Add to Calendar
                  </a>

                  <button
                    className="button button-small button-icon font-center row align-center"
                    onClick={() => {
                      this.setEventDetail(event.id)
                      this.showEventDetail(isRegistered)
                    }}>
                    <MaterialIcon icon="remove_red_eye" size={17} />
                  </button>
                </div>
              }

              {isEventHappening &&
                <div className="row">
                  <button
                    className="button button-small justify-center font-center row align-center w-full"
                    onClick={() => {
                      this.setEventDetail(event.id)
                      this.showEventDetail(isRegistered)
                    }}>
                    Detail
                  </button>
                </div>
              }
            </div>
          )}

          {isRegistered === false && (
            <div className="row col w-full">
              <button
                className="button button-small font-center button-primary w-full mb-5"
                onClick={() => {
                  this.setEventDetail(event.id)
                  this.showEventDetail(isRegistered)
                }}>
                Register Event
              </button>

              {!isEventHappening &&
                <a
                  href={event.calendarURL}
                  target="_blank"
                  className="button button-small font-center button-secondary w-full mr-5">
                  Add to Calendar
                </a>
              }
            </div>
          )}
        </div>
      </div >
    )
  };

  showDrawer = () => {
    this.setState({
      isChatVisible: true,
    })
  };

  onClose = () => {
    this.setState({
      isChatVisible: false,
    })
  };

  renderChatButton = () => {
    return (
      <img src="/chat-room-button.png" />
    )
  };

  render() {
    const { listEvents, isVisible, eventId, isRegistered, isChatVisible, isOnClick } = this.state
    const { user } = this.props

    return (
      <div className="App">
        <Fade>
          <React.Fragment>

            <header className="py-50" style={{
              background: `url('${Background}') center center no-repeat`,
              backgroundSize: 'cover',
              zIndex: '-1'
            }}>
              <div className="container">
                <div className="row col align-center justify-center">
                  <Popover className="row col align-center justify-center mb-10" content={this.getMotto()} placement="bottom">
                    <Avatar size="150"
                      src={user.photoURL}
                      round={true}
                      className="mb-15"
                    />
                    <div className="font-size-title-normal font-center color-text-primary">{user.displayName}</div>
                  </Popover>
                  <span role="img" aria-label="tada"></span>
                  <button className="button button-primary" onClick={async () => await firebase.auth().signOut()}>Sign Out</button>
                </div>
              </div>
            </header>

            <div className="">
              <div className="container">

                <EventDetail eventId={eventId} isVisible={isVisible} user={user}
                  isRegistered={isRegistered}
                  handleOnModalClose={this.handleOnModalClose} isOnClick={isOnClick}
                  setOnClickModal={this.setOnClickModal} />


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
                        <Chat chatContext="dashboard" />
                      </Drawer>
                    </Breakpoint>
                    <Breakpoint large up>
                      <Drawer
                        title="IWD 2020 Chat Room"
                        placement="right"
                        closable={true}
                        onClose={this.onClose}
                        visible={isChatVisible}
                        width={'30%'}
                      >
                        <Chat chatContext="dashboard" />
                      </Drawer>
                    </Breakpoint>
                  </div>
                </BreakpointProvider>

                <Fade bottom>
                  <div className="pt-30 pb-50 row-wrap justify-center">

                    {listEvents.map((event, i) => {
                      return (
                        this.renderEventCard(event, i)
                      )
                    })}

                  </div>
                </Fade>

              </div>
            </div>
          </React.Fragment>
        </Fade>
        <Fade bottom>
          <div onClick={() => { this.showDrawer() }}>
            <div className="floating-chat-button">
              {this.renderChatButton()}
            </div>
          </div>

        </Fade>
      </div>
    )
  }
}

export default Dashboard
