import React, { Component } from "react"
import Background from "../../Assets/images/pictures/dashboard-banner.png"

class HeaderPage extends Component {
	render() {
		const { title, subtitle } = this.props

		return (
			<header style={{
				background: `url('${Background}') center center no-repeat`,
				backgroundSize: 'cover',
				zIndex: '-1'
			}}>
				<div div className="container" >
					<div className="py-120">
						<div className="font-bold font-size-title-small color-font-text-primary">{title}</div>
						<div className="font-size-large color-font-text-primary pt-15">{subtitle}</div>
					</div>
				</div >
			</header >
		)
	}
}

export default HeaderPage
