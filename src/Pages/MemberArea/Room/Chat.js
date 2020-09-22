import React, { Component } from "react"
import { auth, db } from "../../../Services/Firebase"
import { Button } from "react-bootstrap"
import './Chat.css'
import Avatar from "react-avatar"

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false,
      chatContext: this.props.chatContext,
      eventId: this.props.eventId,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onKeyPressed = this.onKeyPressed.bind(this)
    this.myRef = React.createRef()
  }

  async componentDidMount() {
    const { chatContext, eventId } = this.state
    this.setState({ readError: null, loadingChats: true })
    const chatArea = this.myRef.current
    try {
      if (chatContext === 'dashboard') {
        await db.ref("chats").child(chatContext).on("value", snapshot => {
          let chats = []
          snapshot.forEach((snap) => {
            chats.push(snap.val())
          })
          chats.sort(function (a, b) {
            return a.timestamp - b.timestamp
          })
          this.setState({ chats })
          chatArea.scrollBy(0, chatArea.scrollHeight)
          this.setState({ loadingChats: false })
        })
      }

      if (chatContext === 'event') {
        await db.ref("chats").child(chatContext).child(eventId).on("value", snapshot => {
          let chats = []
          snapshot.forEach((snap) => {
            chats.push(snap.val())
          })
          chats.sort(function (a, b) {
            return a.timestamp - b.timestamp
          })
          this.setState({ chats })
          chatArea.scrollBy(0, chatArea.scrollHeight)
          this.setState({ loadingChats: false })
        })
      }

    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false })
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  async handleSubmit(event) {
    const { chatContext, eventId } = this.state
    event.preventDefault()
    this.setState({ writeError: null })
    const chatArea = this.myRef.page
    try {
      if (this.state.content !== '') {
        if (chatContext === 'dashboard') {
          await db.ref("chats").child(chatContext).push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid,
            displayName: this.state.user.displayName,
            photoURL: this.state.user.photoURL,
          })
        }

        if (chatContext === 'event') {
          await db.ref("chats").child(chatContext).child(eventId).push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid,
            displayName: this.state.user.displayName,
            photoURL: this.state.user.photoURL,
          })
        }
      }

      this.setState({ content: '' })
      chatArea.scrollBy(0, chatArea.scrollHeight)
    } catch (error) {
      this.setState({ writeError: error.message })
    }
  }

  onKeyPressed = async (event) => {
    let code = event.keyCode || event.which
    if (code === 13) {
      await this.handleSubmit(event)
    }
  };

  formatTime(timestamp) {
    const d = new Date(timestamp)
    const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
    return time
  }

  render() {
    return (
      <div className="chat-area--container">
        <div className="chat-area" ref={this.myRef}>
          {/* loading indicator */}
          {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div> : ""}
          {/* chat area */}
          {this.state.chats.map(chat => {
            return (
              <div style={{ display: "inline" }}>
                <p key={chat.timestamp}
                  className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
                  <span style={{ display: "inline" }}>
                    {/*<Avatar size="40"*/}
                    {/*src={chat.photoURL}*/}
                    {/*round={true}/>*/}
                    <b>
                      <p>{chat.displayName}</p>
                    </b>
                  </span>
                  <hr />
                  {chat.content}
                  <br /><br />
                  <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
                </p>
              </div>
            )
          })}
        </div>

        <form onSubmit={this.handleSubmit} className="mx-3">
          <div className="chat-area--container text-nowrap">
            <span>
              <textarea className="form-control chat-area-input" name="content"
                onChange={this.handleChange}
                onKeyPress={this.onKeyPressed}
                value={this.state.content} />
              {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
              <button type="submit" className="button button-primary">Send</button>
            </span>
          </div>
        </form>
        {/*<div className="py-5 mx-3">*/}
        {/*Login in as: <strong className="text-info">{this.state.user.email}</strong>*/}
        {/*</div>*/}
      </div>
    )
  }
}
