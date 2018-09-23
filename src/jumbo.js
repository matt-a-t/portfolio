import React, {Component} from 'react'

import { Parallax } from 'react-parallax'

import Typing from 'react-typing-animation'

class Jumbo extends Component {
	render() {
		return (
			<Parallax 
				blur={0}
				bgImage={require('./img/hardwood.jpg')}
				bgImageAlt='A hardwood floor background.'
				strength={500}
			>
    
				<div style={{
					margin: '100px 20px',
					textAlign: 'center',
					backgroundColor: 'rgba(255,255,255,0.3)'
				}}>
					<h1>Matt Armstrong-Totten</h1>
					<p>I am a full-stack developer at Cornerstone Information Systems who loves building great experiences
							on the web. Cornerstone is a global technology and services provider that designs, builds, and
							delivers SaaS for travel companies and corporate providers. I love working with JavaScript and have
							shipped React, Node.js, .NET Core, Coldfusion, Python, and PHP to production.</p>
				</div>
			</Parallax>
		)
	}
}

export default Jumbo