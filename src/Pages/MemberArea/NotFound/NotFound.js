import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Col, Row } from "react-bootstrap"


class NotFound extends Component {
  state = { isSignedIn: false }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Jumbotron fluid>
          </Jumbotron>

          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="4">
                404 Not Found
                </Col>
            </Row>
          </Container>
        </React.Fragment>
      </div>
    )
  }
}

export default NotFound
