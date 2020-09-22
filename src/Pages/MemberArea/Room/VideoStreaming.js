import React, {Component} from "react";
import YouTube from "@u-wave/react-youtube";

class VideoStreaming extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  componentWillMount() {

  }


  render() {
    return (
      <div>
        <h1>Video Streaming</h1>
        <YouTube
          video="zUHqsZx2pN8"
          autoplay
        />
        <iframe width="300" height="150" src="https://www.youtube.com/embed/zUHqsZx2pN8" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>

        <video width="320" height="240" controls>
          <source src="https://www.youtube.com/embed/zUHqsZx2pN8" type="video/mp4"/>
            {/*<source src="movie.ogg" type="video/ogg"/>*/}
        </video>
        {/*<YoutubeLive*/}
          {/*iframeWidth={400}*/}
          {/*iframeHeight={300}*/}
          {/*maxResults={50}*/}
          {/*youtubeChannelId='UC10_pxbLel4Sdi8H06uhLew'*/}
          {/*googleApiKey='AIzaSyChsWXUFQy5n1sprpZrXHDrNIzPChnPEzk'/>*/}

      </div>
    )
  }
}

export default VideoStreaming;
