import React, { Component } from "react"
import 'antd/dist/antd.css'
import { Carousel } from "antd"

class ImageSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  renderBanner = (image, key) => {
    return (
      <div key={key}>
        <img src={image.url} alt={image.alt} width="100%" />
      </div>
    )
  };

  render() {
    const { images } = this.props;
    return (
      <div>
        <Carousel autoplay>

          {images !== undefined && images.map((image, i) => {
            return (
              this.renderBanner(image, i)
            )
          })}

        </Carousel>
      </div>
    )
  }
}

export default ImageSlider
