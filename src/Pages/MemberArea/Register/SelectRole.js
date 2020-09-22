import React, { Component } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"

class SelectRole extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listGender: [
        {
          name: "Participant",
          description: "Watch ongoing livestreaming",
          imageUrl: "https://i.imgur.com/jZRRb3I.png",
        },
        {
          name: "Streamer",
          description: "Create livestreaming events",
          imageUrl: "https://i.imgur.com/Kfh3Nqi.png",
        },
      ],
    }
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  renderCardRole = (roleName, roleDescription, roleImage, key) => {
    return (
      <Col xs lg="6" key={key}>
        <Card style={{ width: '18rem' }} className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{roleName}</Card.Title>
            <Card.Text>
              {roleDescription}
            </Card.Text>
            <Card.Img variant="top" src={roleImage} style={{ paddingBottom: '25px' }} />
            <Button
              onClick={() => {
                this.props.handleOnSelectGender(roleName)
              }}
              variant="primary"
              className="mt-auto">
              Select
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  };

  render() {
    const { listGender } = this.state
    return (
      <div>
        <Col xs lg="24">
          <Card style={{ width: '50rem' }} className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ paddingBottom: '25px' }}>
                <h3>Select a role</h3>
              </Card.Title>
              <div align="center">
                <Row className="justify-content-md-center">
                  {listGender.map((role, i) => {
                    return (
                      this.renderCardRole(role.name, role.description, role.imageUrl, i)
                    )
                  })}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    )
  }
}

export default SelectRole
