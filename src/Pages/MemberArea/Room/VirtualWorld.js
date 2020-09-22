import 'aframe'
import 'aframe-particle-system-component'
import 'babel-polyfill'
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import recognition from '../../../Services/Recognition'

class VirtualWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      isRecord: false,
      listening: false,
    }
    this.handleListen = this.handleListen.bind(this)
  }

  handleListen() {
    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) finalTranscript += transcript + ' '
        else interimTranscript += transcript
      }


      console.log('interm', interimTranscript)
      console.log('final', finalTranscript)

      //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          // document.getElementById('final').innerHTML = finalText
          console.log('final', finalText)
        }
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    })
  }

  getVideo = (id) => {
    //Soon it should streaming from Youtube Live
    return './../../Assets/Video/video-' + id + '.mp4'
  };

  componentDidMount() {
    // this.handleKeyPress();
    let keyCode
    document.addEventListener('keydown', (e) => {
      keyCode = e.keyCode
      // alert(keyCode)
      if (keyCode == 32) {
        this.setState({
          listening: !this.state.listening
        },
          this.handleListen)
      }
    })
  }

  render() {
    const { room } = this.props

    return (
      <div className="vr">
        <Scene embedded style={{ height: '300', width: '600' }}>
          <a-assets>
            <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
            <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
          </a-assets>

          <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100" />
          <Entity primitive="a-light" type="ambient" color="#445451" />
          <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
          <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048" />
          {/*<Entity particle-system={{preset: 'snow', particleCount: 2000}}/>*/}
          <Entity text={{ value: room.description + ' - ' + room.id, align: 'center', width: 7 }} position={{ x: 0, y: 8, z: -8 }} />

          {/*<Entity id="box"*/}
          {/*geometry={{primitive: 'box'}}*/}
          {/*material={{color: this.state.color, opacity: 0.6}}*/}
          {/*animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}*/}
          {/*animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}*/}
          {/*position={{x: 0, y: 1, z: -3}}*/}
          {/*events={{click: this.changeColor.bind(this)}}>*/}
          {/*<Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}*/}
          {/*geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}*/}
          {/*material={{color: '#24CAFF'}}/>*/}
          {/*</Entity>*/}


          {/*{room.id == 1 && (*/}
          {/*<Entity*/}
          {/*primitive="a-video"*/}
          {/*src={video1}*/}
          {/*rotation="0 0 0"*/}
          {/*position={{x: 0, y: 4, z: -9}}*/}
          {/*height="10" width="15"/>*/}
          {/*)}*/}

          {/*{room.id == 2 && (*/}
          {/*<Entity*/}
          {/*primitive="a-video"*/}
          {/*src={video2}*/}
          {/*rotation="0 0 0"*/}
          {/*position={{x: 0, y: 4, z: -9}}*/}
          {/*height="10" width="15"/>*/}
          {/*)}*/}

          {/*<a-video id="video-screen" src="#video-src" position="-8.5 3 10" width="16" height="9" rotation="0 -212 0" geometry="height:30;width:50"></a-video>*/}

          <Entity primitive="a-camera">
            <Entity primitive="a-cursor" animation__click={{
              property: 'scale',
              startEvents: 'click',
              from: '0.1 0.1 0.1',
              to: '1 1 1',
              dur: 150
            }} />
          </Entity>
        </Scene>
      </div>
    )
  }
}

export default VirtualWorld
