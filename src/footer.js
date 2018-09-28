import React, { Component } from 'react'
import { Parallax } from 'react-parallax'

import { Icon } from 'react-icons-kit'
import { github, twitter, linkedin } from 'react-icons-kit/icomoon'
import { yellow, black } from './colors'

const iconStyle = {
	margin: '64px',
	color: yellow
}

const emailStyle = {
	color: black,
	backgroundColor: yellow
}

class Footer extends Component {
	render() {
		return (
			// <Parallax
			// 	blur={0}
			// 	bgImage={require('./img/lamps.jpg')}
			// 	bgImageAlt='A series of hanging light bulbs on a black background.'
			// 	strength={500}
			// >
			<div
				style={{
					textAlign: 'center',
					color: yellow
				}}
			>
				<h2>Contact Me</h2>
				<p>
					If you'd like to get in touch, feel free to email me 
					at <a href="mailto:matt.armstro@gmail.com" style={emailStyle}>matt.armstro@gmail.com</a>.
      		I can also be found on Twitter, Github, and LinkedIn at the icons below.
				</p>

				<Icon icon={twitter} size={64} style={iconStyle} />
				<Icon icon={github} size={64} style={iconStyle} />
				<Icon icon={linkedin} size={64} style={iconStyle} />
			</div>
			// </Parallax>
		)
	}
}

export default Footer	