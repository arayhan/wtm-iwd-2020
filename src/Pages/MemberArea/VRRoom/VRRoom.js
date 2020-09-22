import React, {Component} from "react";
import {Fade} from "react-reveal";

class VRRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  componentWillMount() {

  }


  render() {
    return (
      <div className="loading-screen">
        <Fade>
          <iframe width="100%" height="1000px"
                  src="https://xstreamvr-room-1.glitch.me/"
                  allowusermedia allow="camera *;microphone *"
                  frameBorder="0"/>
        </Fade>
      </div>
    )
  }
}

export default VRRoom;
