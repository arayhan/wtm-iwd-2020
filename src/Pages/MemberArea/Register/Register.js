import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Card, Col, Row } from "react-bootstrap"
import { Fade } from "react-reveal"
import { db } from "../../../Services/Firebase"
import SelectGender from "./SelectGender"
import { scrollToTop } from "../../../Utils/utils"

import { Form, Input, Button, Tooltip } from 'antd'
import QuestionCircleOutlined from "@ant-design/icons/es/icons/QuestionCircleOutlined"
import { BreakpointProvider } from "react-socks"
import Breakpoint from "react-socks"
import SelectGenderMobile from "./SelectGenderMobile"


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      role: '',
      gender: '',
      step: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = async (values) => {
    const { role, gender } = this.state
    const { uid, photoURL } = this.props.user
    const { email, displayName, phoneNumber, institutionName, institutionRole, superPower, superPowerReason } = values

    const userProfile = {
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
      phoneNumber: phoneNumber,
      gender: gender,
      institutionName: institutionName,
      institutionRole: institutionRole,
      superPower: superPower,
      superPowerReason: superPowerReason,
      points: 0,
      deductedPoints: 0,
      isCompleteProfile: true,
      role: role,
      registeredEvents: [],
    }

    await db.ref("users")
      .child(userProfile.uid)
      .set(userProfile)

    await window.location.reload()
    await this.props.setUserProfile(userProfile)
    await scrollToTop()
  };

  handleOnSelectGender = (gender) => {
    const { step } = this.state
    this.setState({
      role: 'Participant',
      gender: gender,
      step: step + 1,
    })
  };

  onFinishFailed = errorInfo => {
    alert("Please check your connection")
  };

  onFinish = async values => {
    await this.handleSubmit(values)
  };

  render() {

    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    }

    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    }

    const { step } = this.state
    const { user } = this.props
    return (
      <div className="container--register">
        <Fade down>

          <div className="container">
            <div className="row justify-center mt-30">

              {step === 1 &&
                <SelectGender handleOnSelectGender={this.handleOnSelectGender} />
              }

              {step === 2 && (
                <div>
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                      "displayName": user.displayName,
                      "email": user.email,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                  >
                    <Fade>
                      <Card className="p-30 mb-10 bg-white rounded">
                        <Card.Body>
                          <div className="font-center">
                            <hr />
                            <div className="font-size-title-small">Welcome to IWD 2020!</div>
                            <div className="font-size-title-small">to continue please fill this form first</div>
                            <hr />
                            <br />
                          </div>

                          <div className="form-container--register">

                            <Form.Item
                              name="displayName"
                              label={
                                <span>Full Name&nbsp;
                                  <Tooltip title="What do you want others to call you?">
                                    <QuestionCircleOutlined />
                                  </Tooltip>
                                </span>
                              }
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Full Name',
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input disabled />
                            </Form.Item>

                            <Form.Item
                              name="email"
                              label={
                                <span>Email
                                  </span>
                              }
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Email',
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input disabled />
                            </Form.Item>

                            <Form.Item
                              name="phoneNumber"
                              label={
                                <span>Phone Number
                                  </span>
                              }
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Phone Number',
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item
                              name="institutionName"
                              label={
                                <span>Institution Name&nbsp;
                                  <Tooltip title="Tell us what is your Company or Campus name ?">
                                    <QuestionCircleOutlined />
                                  </Tooltip>
                                </span>
                              }
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Institution Name',
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item
                              name="institutionRole"
                              label={
                                <span>Institution Role&nbsp;
                                  <Tooltip title="Tell us what is your position in the institution ?">
                                    <QuestionCircleOutlined />
                                  </Tooltip>
                                </span>
                              }
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Position',
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item
                              name="superPower"
                              label={
                                <span>Super Power&nbsp;
                                  <Tooltip title="Apa super power (skills) yang mau kamu dapatkan dari acara ini?">
                                    <QuestionCircleOutlined />
                                  </Tooltip>
                                </span>
                              }
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Super Power expectation',
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input.TextArea rows={4} />
                            </Form.Item>

                            <Form.Item
                              name="superPowerReason"
                              label={
                                <span>Why ?&nbsp;
                                  <Tooltip title="Apa motivasi kamu untuk menguasai super power (skills) tersebut? :D">
                                    <QuestionCircleOutlined />
                                  </Tooltip>
                                </span>
                              }
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your reason',
                                  whitespace: true,
                                },
                              ]}
                            >
                              <Input.TextArea rows={4} />
                            </Form.Item>

                          </div>

                        </Card.Body>

                      </Card>
                    </Fade>
                    <Button {...tailLayout} className="button--register" type="primary" htmlType="submit">
                      Continue
                    </Button>
                  </Form>
                </div>
              )
              }
            </div>
          </div>
        </Fade>
        <br />
      </div>
    )
  }
}

export default Register
