import React, { Component } from 'react'
import { Parallax } from 'react-parallax'

const workCard = {
	background: 'rgba(255,255,105, 0.3)',
	borderRadius: '25px',
	margin: '10%',
	textAlign: 'center',
	padding: '20px'
}

class  Work extends Component {
	render() {
		return (
			<div>
				<Parallax 
					blur={0}
					bgImage={require('./img/lamps.jpg')}
					bgImageAlt='A lightbulb robot plugging itself into an outlet.'
					strength={500}
				>
					<div style={{height: '1080px'}}>
						<div style={workCard}>
							<h2>Pathfinder Grapple App</h2>
							<h3>Simplifying Tabletop Gaming</h3>
							<p>
              This app attempts to solve a familiar complaint from the Pathfinder 
              gaming community. The rules surrounding grappling are confusing and
              many avoid it entirely. Designed primarily for mobile use, this app
              allows for users to track the rules as they play the game.
							</p>
						</div>

						<div style={workCard}>
							<h2>Hoosier Action</h2>
							<h3>Political Action in Indiana</h3>
							<p>
              Hoosier Action is a group committed to fighting racism in central Indiana. 
              They're a fantasic group and I would recommend following the link to find out
              more about the organization. I worked to update their site with a rebrand 
              drawing attention to the people and relationships of the group.
							</p>
						</div>

						<div style={workCard}>
							<h2>Cornerstone Information Systems</h2>
							<h3>My Day Job</h3>
							<p>
              In addition to the work I have displayed here, there is much that I have
              developed that I am unable to show. At Cornerstone, I have used React, ColdFusion,
              ASP .NET Core, PHP, and Python to solve a myriad of problems. I have developed
              solutions for the web, as well as Sharepoint, Salesforce, and Azure.
							</p>
						</div>
					</div>
				</Parallax>
			</div>
		)
	}
}

export default Work