import React, { Component } from 'react'
import Post from '@components/Post'
import styles from './main.sss'

class Home extends Component {
	render() {
		return (
			<div className={styles.main}>
				<Post />
			</div>
		)
	}
}

export default Home
