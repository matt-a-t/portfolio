import React, {Component} from 'react'
import { Parallax } from 'react-parallax'

class Jumbo extends Component {
	render() {
		return (
			<Parallax 
				blur={0}
				bgImage={require('./img/light-bulb.jpg')}
				bgImageAlt='A light bulb with black background.'
				strength={500}
			>
				<div style={{
					margin: '100px 20px',
					textAlign: 'center',
					backgroundColor: 'rgba(255,255,105,0.3)',
					fontSize: '42px',
					borderRadius: '25px',
					//color: 'yellow'
					padding: '25px'
				}}>
					<h1>Matt Armstrong</h1>
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