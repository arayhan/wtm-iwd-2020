import React, { Component } from "react"
import MaterialIcon from "material-icons-react"
import Ripples from "react-ripples"
import { Link } from "react-router-dom"

export class NavBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isMenuActive: false
		}
	}

	render() {
		let { isMenuActive } = this.state

		return (
			<nav>
				<div className="container">
					<div className="row justify-between align-center">
						<Link to="/" className="logo row align-center">
							<img src={"/wtm-logo.png"} className="mr-10" style={{ width: '26px', height: 'auto' }} />
							International Women's Day 2020
						</Link>
						<div
							className={isMenuActive ? "backdrop active" : "backdrop"}
							onClick={() => this.setState({ isMenuActive: !isMenuActive })}
						></div>
						<div className={isMenuActive ? "menu active" : "menu row"}>
							<Link onClick={() => this.setState({ isMenuActive: false })} to="/auth">Register</Link>
						</div>
						<button
							className="burger"
							onClick={() => this.setState({ isMenuActive: !isMenuActive })}>
							<MaterialIcon icon="dehaze" />
						</button>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar
