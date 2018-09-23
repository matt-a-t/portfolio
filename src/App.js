import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

// import Navigation from './navigation'
import Jumbo from './jumbo'
import Work from './work'
import Quotes from './quotes'
import Contact from './contact'
import Footer from './footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Navigation /> */}
				<Jumbo />
				<Work />
				<Quotes />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default App
