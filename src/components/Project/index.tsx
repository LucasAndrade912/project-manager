import React from 'react'

import { Link } from 'react-router-dom'

import { ExampleImage } from '../../assets'
import { Container, Image, ProjectTitle, ProjectDescription } from './styles'
import Tag from '../Tag'

const Project = () => {
	return (
		<Container>
			<Image src={ExampleImage} alt="Example Image" />

			<Link to="/app/project">
				<ProjectTitle>
					Project Test
				</ProjectTitle>
			</Link>
      
			<ProjectDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est maiores cupiditate!
			</ProjectDescription>

			<Tag name="UI Design" color="#FF6262" />
			<Tag name="UX Design" color="#58ADFC" />
		</Container>
	)
}

export default Project