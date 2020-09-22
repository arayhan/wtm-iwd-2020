import React, {Component} from "react";
import {Avatar, Descriptions, List} from "antd";
import {db} from "../Services/Firebase";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
    }
  }

  async componentDidMount() {

  }

  componentWillMount() {

  }




  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Description;
