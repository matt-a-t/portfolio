import React, { Component } from 'react'
import { Parallax } from 'react-parallax'

import { yellow, black } from './colors'

const workCard = {
	background: yellow,
	borderRadius: '25px',
	margin: '10%',
	textAlign: 'center',
	padding: '20px'
}

const rightCard = {
	...workCard,
	marginRight: 0,
	borderRadius: '25px 0 0 25px'
}

const leftCard = {
	...workCard,
	marginLeft: 0,
	borderRadius: '0 25px 25px 0'
}

const linkStyle = {
	color: black,
	fontSize: 30,
	border: `2px solid ${black}`,
	padding: 10,
	borderRadius: 5
}

const works = [
	{
		title: 'Pathfinder Grapple App',
		tagline: 'Simplifying Tabletop Gaming',
		desc: `This app attempts to solve a familiar complaint from the Pathfinder 
			gaming community. The rules surrounding grappling are confusing and
			many avoid it entirely. Designed primarily for mobile use, this app
			allows for users to track the rules as they play the game.`,
		url: 'https://pathfinder-grapple.netlify.com'
	}, {
		title: 'Bloomington Civic Code Challenge',
		tagline: 'Prize-winning Collaboration',
		desc: `Working with two other very talented developers, we entered a project into 
			the Bloomington Civic Code Challenge at The Combine 2018. Our project won 1st prize
			and will likely be used by the Bloomington government in the city's website. I was responsible
			for creating a GraphQL server to clean up API endpoints that were given to us. I also assisted
			the other two with a React front-end that allowed for citizens to enter work requests for the city
			government. The link below is to the React code, my GraphQL server can be found on my Github page.`,
		url: 'https://github.com/CivicCode/uReport-client'
	}, {
		title: 'Hoosier Action',
		tagline: 'Political Action in Indiana',
		desc: `Hoosier Action is a group committed to fighting racism in central Indiana. 
			They're a fantasic group and I would recommend following the link to find out
			more about the organization. I worked to update their site with a rebrand 
			drawing attention to the people and relationships of the group. The site is built
			in Squarespace.`,
		url: 'https://www.hoosieraction.org/'
	}, {
		title: 'PetfinderQL',
		tagline: 'GraphQL for the Petfinder API',
		desc: `This project was something I worked on to teach myself how to setup GraphQL with Node.js.
			Petfinder has a service to query their database of adoptable pets via a REST API. I exposed this
			API via GraphQL, allowing for the data to be returned in a much cleaner format that allows for
			the consumer to specifically request the data that they would like to use. I had this running on
			AWS, but it was costing me money so I have since taken it down. The link below will show the source
			code of the project.`,
		url: 'https://github.com/matt-a-t/petfinderQL'
	}, {
		title: 'Cornerstone Information Systems',
		tagline: 'My Day Job',
		desc: `In addition to the work I have displayed here, there is much that I have developed that I
			am unable to show because it is the IP of my day job. At Cornerstone, I have used React, ColdFusion,
			ASP .NET Core, PHP, and Python to solve a myriad of problems. I have developed solutions for 
			the web, as well as Sharepoint, Salesforce, and Azure.`,
		url: 'https://www.ciswired.com'
	}
]

class  Work extends Component {
	render() {
		return (
			<div>
				<div>

					<h2 style={{color: yellow, textAlign: 'center'}}>My Work</h2>
						
					{works.map((work, index) => {
						if ((index % 2) === 0) {
							return (
								<div style={rightCard}>
									<h2>{work.title}</h2>
									<h3>{work.tagline}</h3>
									<p>{work.desc}</p>
									<a style={linkStyle} href={work.url} target='new'>Visit</a>
								</div>
							)
						}
						
						return (
							<div style={leftCard}>
								<h2>{work.title}</h2>
								<h3>{work.tagline}</h3>
								<p>{work.desc}</p>
								<a style={linkStyle} href={work.url} target='new'>Visit</a>
							</div>
						)
					})}

				</div>
				<Parallax 
					blur={0}
					bgImage={require('./img/light-bulb-1920-darker.jpg')}
					bgImageAlt='A lightbulb robot plugging itself into an outlet.'
					strength={500}
				>
					<div style={{height: '1080px'}} />
				</Parallax>
			</div>
		)
	}
}

export default Work