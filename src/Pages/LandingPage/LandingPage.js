import React, { Component } from "react"
import NavBar from "./../../Components/Organisms/NavBar"
import Footer from "./../../Components/Organisms/Footer"
import Router from "./Router"
import "../../Styles/app.scss"

class LandingPage extends Component {

	render() {
		return (
			<div>
				<NavBar />
				<Router />
				<Footer />
			</div>
		)
	}
}

export default LandingPage
