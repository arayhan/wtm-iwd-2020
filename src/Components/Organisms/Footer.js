import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className="bg-grey-lighten-2 p-20 bg-primary">
			<div className="copyright font-center">
				&copy; 2020 WTM | All Rights Reserved
			</div>
			{/* <div className="row justify-center pt-20">
				<a href="https://www.instagram.com/gdgjakarta/" title="GDG Jakarta" target="_blank" className="mx-10 p-10 color-font-text-primary">
					<i className="font-size-large fab fa-instagram"></i>
				</a>
				<a href="https://www.instagram.com/gdgdepok/" title="GDG Depok" target="_blank" className="mx-10 p-10 color-font-text-primary">
					<i className="font-size-large fab fa-instagram"></i>
				</a>
			</div> */}
		</footer>
	)
}

export default Footer
