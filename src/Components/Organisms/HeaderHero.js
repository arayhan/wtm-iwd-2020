import React from "react"
import { Link } from "react-router-dom"
import Ripples from "react-ripples"
import MaterialIcon from "material-icons-react"
import { Icon } from "react-icons-kit"
import { androidPin } from "react-icons-kit/ionicons/androidPin"
import WTMLogo from "../../Assets/images/logo/wtm-logo.png"

const HeaderHero = () => {
  return (
    <header>
      <div className="container">
        <div className="row col-md-reverse align-center py-60">
          <div className="flex-2 pr-md-0 pr-50 ">
            <div className="mb-0 font-bold font-size-title-small color-font-text-primary">
              International Women's Day 2020
            </div>
            <div className="font-bold font-size-title-normal color-font-secondary mb-20">Together We Rise</div>
            <p className="mb-30 font-size-normal color-font-text-primary">
              International Women's Day is celebrated by WomenTechmaker all over the world to celebrate women in
              technology. WTM creates visibility, community and resources for women by hosting events which includes
              technical as well as motivational and managerial sessions. These events are organized with a spirit to
              support each and every woman in your surrounding and lift them up as you climb your success ladder.
            </p>
            <div className="mb-30">
              <div className="row mb-5 color-font-text-primary">
                <span className="mr-10">
                  <MaterialIcon icon="date_range" size={24} />
                </span>
                <span className="font-size-normal">May 9-10, 16-17, 2020</span>
              </div>
              <div className="row mb-5 color-font-text-primary">
                <span className="mr-10">
                  <MaterialIcon icon="access_time" size={24} />
                </span>
                <span className="font-size-normal">2 PM to 4 PM</span>
              </div>
              <div className="row color-font-text-primary">
                <span className="mr-10">
                  <Icon icon={androidPin} size={24} />
                </span>
                <span className="font-size-normal">YouTube Live</span>
              </div>
            </div>
            <Ripples>
              <Link to="/auth" className="button button-primary">Register</Link>
            </Ripples>
          </div>
          <div className="row justify-center align-center mb-md-40">
            <img src={WTMLogo} alt="WTM Logo" className="w-200 w-md-150" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderHero
