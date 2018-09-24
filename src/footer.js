import React, { Component } from 'react'
import { Parallax } from 'react-parallax'

import { Icon } from 'react-icons-kit'
import { github, twitter, linkedin } from 'react-icons-kit/icomoon'

const iconStyle = {
	margin: '64px',
	color: 'rgba(255,255,105, 0.3'
}

class Footer extends Component {
	render() {
		return (
			<Parallax
				blur={0}
				bgImage={require('./img/light-bulb-1920-darker.jpg')}
				bgImageAlt='A lightbulb robot plugging itself into an outlet.'
				strength={500}
			>
				<div
					style={{
						textAlign: 'center',
						margin: '100px'
					}}
				>
					<h2>Contact Me</h2>
					<p>If you'd like to get a hold of me, feel free to email me at matt.armstro@gmail.com.
             I can also be found on Twitter, Github, and LinkedIn at the icons below.</p>

					<Icon icon={twitter} size={64} style={iconStyle} />
					<Icon icon={github} size={64} style={iconStyle} />
					<Icon icon={linkedin} size={64} style={iconStyle} />
				</div>
			</Parallax>
		)
	}
}

export default Footer