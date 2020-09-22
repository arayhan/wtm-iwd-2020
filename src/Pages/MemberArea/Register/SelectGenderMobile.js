import React, { Component } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"

class SelectGenderMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listGenders: [
        {
          name: "Male",
          imageUrl: "./male.png",
        },
        {
          name: "Female",
          imageUrl: "./female.png",
        },
      ],
    }
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  renderGenderType = (genderName, genderImage, key) => {
    return (
      <Col xs lg="6" key={key}>
        <Card style={{ width: '18rem' }} className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{genderName}</Card.Title>
            <Card.Img variant="top" src={genderImage} style={{ paddingBottom: '25px' }} />
            <Button
              onClick={() => {
                this.props.handleOnSelectGender(genderName)
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
    const { listGenders } = this.state
    return (
      <div>
        <Col xs lg="24">
          <Card style={{ width: '100%' }} className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ paddingBottom: '25px' }}>
                <h3>Select your gender</h3>
              </Card.Title>
              <div align="center">
                <Row className="justify-content-md-center">
                  {listGenders.map((gender, i) => {
                    return (
                      this.renderGenderType(gender.name, gender.imageUrl, i)
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

export default SelectGenderMobile
