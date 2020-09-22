import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import 'antd/dist/antd.css'
import {Button, Drawer, Menu, Switch} from 'antd'
import {CalendarOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom"
import {BreakpointProvider} from "react-socks";
import Breakpoint from "react-socks";
import Chat from "./Pages/MemberArea/Room/Chat";

class NavbarTop extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 'dashboard',
      theme: 'light',
    }
  }

  componentDidMount() {
    try {
      const selectedTheme = (localStorage.getItem("selectedTheme") === null ? 'light' : localStorage.getItem("selectedTheme"))
      this.setState({theme: selectedTheme})
    } catch (error) {
      this.setState({readError: error.message, loadingChats: false})
    }
  }

  handleClick = e => {
    const page = e.key
    this.setState({
      page: page,
    })
  };

  changeTheme = value => {
    const theme = value ? 'light' : 'dark'
    localStorage.setItem("selectedTheme", theme)
    this.setState({
      theme: theme
    })
  };

  render() {
    const {theme} = this.state
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.page]} mode="horizontal"
              style={{textAlign: "left"}} theme={theme}>
          <Menu.Item key="dashboard">
            <HomeOutlined/>
            Dashboard
            <Link to="/"/>
          </Menu.Item>
          <Menu.Item key="calender">
            <CalendarOutlined/>
            Calendar
            <Link to="/calender"/>
          </Menu.Item>

          <Menu.Item style={{width: "50%"}}/>

          <Menu.Item disabled>
            <BreakpointProvider>
              <Breakpoint large up>
                <Switch
                  checked={theme === 'light'}
                  onChange={this.changeTheme}
                  checkedChildren="Female Ver"
                  unCheckedChildren="Male Ver"
                />
              </Breakpoint>
            </BreakpointProvider>
          </Menu.Item>

          <Menu.Item disabled>
            <img src={"/wtm-logo.png"}/>
            <span style={theme === 'light' ? {color: "black"} : {color: "white"}}>International Women's Day 2020</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavbarTop
