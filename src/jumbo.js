import React, {Component} from 'react'
import { Parallax } from 'react-parallax'

import { yellow } from './colors'

class Jumbo extends Component {
	render() {
		return (
			<div>
				<Parallax
					blur={0}
					bgImage={require('./img/light-bulb.jpg')}
					bgImageAlt='A light bulb with black background.'
					strength={500}
				>
					<div style={{
						textAlign: 'center',
						color: yellow,
						height: 1080,
						padding: '25px'
					}}>
						<h1>I'm Matt Armstrong</h1>
					</div>
					<div style={{
						color: yellow,
						padding: '50px',
						bottom: 0,
						textAlign: 'center'
					}}>
						<p>I am a full-stack developer at Cornerstone Information Systems who loves building great experiences
						on the web. Cornerstone is a global technology and services provider that designs, builds, and
						delivers SaaS for travel companies and corporate providers. I love working with JavaScript and have
						shipped React, Node.js, .NET Core, Coldfusion, Python, and PHP to production in Azure, in AWS, and on 
						prem.</p>
					</div>
				</Parallax>
			</div>
		)
	}
}

export default Jumbo