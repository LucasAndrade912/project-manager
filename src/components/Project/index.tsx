import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Image, ProjectTitle, ProjectDescription } from './styles'
import Tag from '../Tag'

interface TagProps {
	tag_name: string
	color: { color_name: string }
}

interface ProjectProps {
	title: string
	description: string
	image?: string
	tags?: TagProps[]
}

const Project = ({ title, description, image, tags }: ProjectProps) => {
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

			{ tags && (
				tags.map(tag => (
					<Tag
						key={tag.tag_name}
						name={tag.tag_name}
						color={tag.color.color_name}
					/>
				))
			) }
		</Container>
	)
}

export default Project