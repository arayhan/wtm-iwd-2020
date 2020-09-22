import React, { Component } from 'react'
import firebase from 'firebase'
import { Fade } from "react-reveal"
import { withRouter } from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage'
import Loading from './Components/Atoms/Loading'
import MemberArea from './Pages/MemberArea/MemberArea'
import { db } from "./Services/Firebase"
import './Services/Firebase'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSignedIn: false,
			isLoading: true,
			isCompleteProfile: false,
			user: {},
		}
	}

	componentDidMount = async () => {
		await firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				try {
					await db.ref('users').orderByChild('uid').equalTo(user.uid)
						.on('value', snapshot => {
							let userData = []
							let isCompleteProfile
							if (snapshot.exists()) {
								isCompleteProfile = true
								snapshot.forEach((snap) => {
									userData.push(snap.val())
								})
							}
							else {
								isCompleteProfile = false
								userData = [{
									uid: user.uid,
									displayName: user.displayName,
									email: user.email,
									photoURL: user.photoURL,
								}]
							}
							this.props.history.push('/')
							this.setState({
								user: userData[0],
								isCompleteProfile: isCompleteProfile,
								isSignedIn: user,
								isLoading: false,
							})
						})
				} catch (error) {
					this.setState({
						readError: error.message, loadingChats: false,
						isSignedIn: user,
						isLoading: false,
					})
				}
			} else {
				this.setState({
					isSignedIn: user,
					isLoading: false,
				})
			}
		})
	};

	setUserProfile = (user) => {
		this.setState({
			user: user,
			isCompleteProfile: true
		})
	};

	render() {
		const { isSignedIn, isLoading, isCompleteProfile, user } = this.state
		return (
			<div>
				<Loading isLoading={isLoading} />

				{!isSignedIn &&
					<Fade when={!isLoading}>
						<LandingPage />
					</Fade>
				}

				{isSignedIn &&
					<Fade when={!isLoading}>
						<MemberArea
							isCompleteProfile={isCompleteProfile}
							user={user}
							setUserProfile={() => this.setUserProfile()}
						/>
					</Fade>
				}
			</div>
		)
	}
}

export default withRouter(App)
