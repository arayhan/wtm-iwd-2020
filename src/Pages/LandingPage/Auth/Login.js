import React from 'react'
import * as firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Container from 'react-bootstrap/Container'
import { Fade } from "react-reveal"
import { uiConfig } from "../../../Services/Firebase"

function Login() {
  return (
    <Fade>
      <div className="bg-section-grey">
        <div className="container pt-140 pb-170 row justify-center">
          <div className="card row col align-center justify-center p-30">
            <Fade>
              <div className="mb-30">
                <img src="/login-title.png" className="w-320" />
              </div>

              <div className="font-size-large font-center mb-30">Login to continue</div>
              <div>
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Login
