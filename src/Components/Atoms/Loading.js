import React from 'react'
import Loader from '../../Assets/images/loader.gif'

const Loading = ({ isLoading }) => {
	return (
		<div id="loading" className={`${isLoading ? 'show' : ''} row align-center justify-center`}>
			<img src={Loader} style={{ width: '220px' }} />
		</div>
	)
}

export default Loading