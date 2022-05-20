import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Image, ProjectTitle, ProjectDescription } from './styles'
import Tag from '../Tag'

interface ProjectProps {
	title: string
	description: string
	image?: string
}

const Project = ({ title, description, image }: ProjectProps) => {
	return (
		<Container>
			{ image && (
				<Image src={image} alt="Project image" />
			) }

			<Link to="/app/project">
				<ProjectTitle>
					{ title }
				</ProjectTitle>
			</Link>
      
			<ProjectDescription>
				{ description }
			</ProjectDescription>

			<Tag name="UI Design" color="#FF6262" />
			<Tag name="UX Design" color="#58ADFC" />
		</Container>
	)
}

export default Project