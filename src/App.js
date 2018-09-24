import React, { Component } from 'react'
import './App.css'

import Jumbo from './jumbo'
import Work from './work'
import Footer from './footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Jumbo />
				<Work />
				<Footer />
			</div>
		)
	}
}

export default App
