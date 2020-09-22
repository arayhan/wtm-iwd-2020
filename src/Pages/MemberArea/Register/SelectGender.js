import React, { Component } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import Ripples from "react-ripples"

class SelectGender extends Component {
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

  renderGenderType = (genderName, genderImage, key) => {
    return (
      <div className="card p-20 m-20" key={key}>
        <div className="row col">
          <div className="font-size-large font-center mb-20">{genderName}</div>
          <div className="row justify-center">
            <img src={genderImage} style={{ width: '200px', maxWidth: '100%', paddingBottom: '25px' }} />
          </div>
          <Ripples>
            <a
              onClick={() => { this.props.handleOnSelectGender(genderName) }}
              className="button button-primary w-full font-center"
            >
              Select
            </a>
          </Ripples>
        </div>
      </div>
    )
  };

  render() {
    const { listGenders } = this.state
    return (
      <div className="mt-50">
        <div className="card py-50 px-40">
          <div>
            <div className="font-size-title-normal font-center mb-20">Select your gender</div>
          </div>
          <div className="row col-md">
            {listGenders.map((gender, i) => {
              return (
                this.renderGenderType(gender.name, gender.imageUrl, i)
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default SelectGender
