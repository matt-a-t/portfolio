import React, { Component } from 'react'
import { Parallax } from 'react-parallax'

const workCard = {
	background: 'rgba(255,255,105, 0.3)',
	borderRadius: '25px',
	margin: '10%',
	textAlign: 'center',
	padding: '20px'
}

const works = [
	{
		title: 'Pathfinder Grapple App',
		tagline: 'Simplifying Tabletop Gaming',
		desc: `This app attempts to solve a familiar complaint from the Pathfinder 
			gaming community. The rules surrounding grappling are confusing and
			many avoid it entirely. Designed primarily for mobile use, this app
			allows for users to track the rules as they play the game.`
	}, {
		title: 'Hoosier Action',
		tagline: 'Political Action in Indiana',
		desc: `Hoosier Action is a group committed to fighting racism in central Indiana. 
			They're a fantasic group and I would recommend following the link to find out
			more about the organization. I worked to update their site with a rebrand 
			drawing attention to the people and relationships of the group.`
	}, {
		title: 'Cornerstone Information Systems',
		tagline: 'My Day Job',
		desc: `In addition to the work I have displayed here, there is much that I have
			developed that I am unable to show. At Cornerstone, I have used React, ColdFusion,
			ASP .NET Core, PHP, and Python to solve a myriad of problems. I have developed
			solutions for the web, as well as Sharepoint, Salesforce, and Azure.`
	}
]

class  Work extends Component {
	render() {
		return (
			<div>
				<Parallax 
					blur={0}
					bgImage={require('./img/light-bulb-1920-darker.jpg')}
					bgImageAlt='A lightbulb robot plugging itself into an outlet.'
					strength={500}
				>
					<div style={{height: '1080px'}}>
						
						{works.map(work => (
							<div style={workCard}>
								<h2>{work.title}</h2>
								<h3>{work.tagline}</h3>
								<p>{work.desc}</p>
							</div>
						))}
						
					</div>
				</Parallax>
			</div>
		)
	}
}

export default Work