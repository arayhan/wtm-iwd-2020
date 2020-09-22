import React, { Component } from "react"
import { Avatar, Button, Descriptions, List, Modal } from "antd"
import { Link } from "react-router-dom"
import ImageSlider from "../../../Components/ImageSlider"
import { db } from "../../../Services/Firebase"
import { openNotification } from '../../../Utils/utils'

class EventDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      participants: [],
      description: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      listSpeakers: [],
      listPrizes: [],
      confirmLoading: false,
      isFetched: false,
    }
  }

  async componentDidUpdate() {
    if (!this.state.isFetched && this.props.isOnClick) {
      await this.fetchEventInformation()
    }
  }

  componentWillMount() {

  }

  fetchEventInformation = async () => {
    const { eventId } = this.props
    try {
      await db.ref('events').orderByChild('id').equalTo(eventId)
        .on('value', async snapshot => {
          let selectedEvent = []
          snapshot.forEach((snap) => {
            selectedEvent = snap.val()
          })

          await this.setState({
            id: selectedEvent.id,
            name: selectedEvent.name,
            description: selectedEvent.description,
            startDate: selectedEvent.startDate,
            endDate: selectedEvent.endDate,
            startTime: selectedEvent.startTime,
            endTime: selectedEvent.endTime,
            listSpeakers: selectedEvent.speakers,
            listPrizes: selectedEvent.prizes,
            participants: selectedEvent.participants !== undefined ? selectedEvent.participants : [],
            listBannersURL: selectedEvent.listBannersURL !== undefined ? selectedEvent.listBannersURL : [],
            isFetched: true,
          })
        })
    }
    catch (error) {
      this.setState({ readError: error.message, loadingChats: false })
    }
  };

  renderList = (listData, identifier) => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={item => {
          const photoURL = item.photoURL
          const name = item.name
          const description = item.description
          const content = (identifier === 'Speakers' ? item.role : item.quantity)
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={photoURL} />}
                title={<Link to="/">{name}</Link>}
                description={description}
              />
              <div>
                <b>{content}</b>
              </div>
            </List.Item>
          )
        }}
      />
    )
  };

  handleOnRegister = async () => {
    const { id, name, participants } = this.state
    const { handleOnModalClose, setOnClickModal, user } = this.props
    setOnClickModal(false)
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      gender: user.gender,
      superPower: user.superPower,
      superPowerReason: user.superPowerReason,
    }
    participants.push(userData)
    const userRegisteredEvents = user.registeredEvents !== undefined ? user.registeredEvents : []
    userRegisteredEvents.push(id)
    await this.setState({
      ModalText: 'Loading',
      confirmLoading: true,
    })
    await db.ref('events').child(id).child('participants').set(participants)
    await db.ref('users').child(user.uid).child('registeredEvents').set(userRegisteredEvents)
    setTimeout(() => {
      this.setState({
        confirmLoading: false,
        isFetched: false
      })
      openNotification('Registered Successfully!', `You have been registered to ${name} successfully`)
      handleOnModalClose()
    }, 2000)
  };

  handleOnClose = () => {
    const { handleOnModalClose } = this.props
    this.setState({
      isFetched: false
    })
    handleOnModalClose()
  };

  render() {
    const { isFetched, name, description, startDate, endDate, startTime, endTime, listSpeakers, participants, listPrizes, confirmLoading, listBannersURL } = this.state
    const { isVisible, isRegistered } = this.props

    return (
      <div>

        <Modal
          title={name}
          width={700}
          visible={isVisible}
          onOk={this.handleOnRegister}
          confirmLoading={confirmLoading}
          onCancel={this.handleOnClose}
          style={{ top: 20 }}
          footer={[
            <Button key="back" onClick={this.handleOnClose}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={confirmLoading} disabled={isRegistered} onClick={async () => {
              await this.handleOnRegister()
            }}>
              Register
            </Button>,
          ]}>

          <ImageSlider images={listBannersURL} />

          <Descriptions layout="vertical" bordered>
            <Descriptions.Item label="Description" span={3}>{description}</Descriptions.Item>
            <Descriptions.Item label="Start Date" span={1}>{startDate} - {startTime}</Descriptions.Item>
            <Descriptions.Item label="End Date" span={1}>{endDate} - {endTime}</Descriptions.Item>
            <Descriptions.Item label="Registered Participants"
              span={1}>{participants === undefined ? 0 : participants.length}</Descriptions.Item>
            <Descriptions.Item label="Speakers" span={3}>
              {this.renderList(listSpeakers, 'Speakers')}
            </Descriptions.Item>
            <Descriptions.Item label="Prizes" span={3}>
              {this.renderList(listPrizes, 'Prizes')}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
    )
  }
}

export default EventDetail
