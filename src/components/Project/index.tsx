import React from 'react'
import { useDrag } from 'react-dnd'
import { Link } from 'react-router-dom'

import { Container, Image, ProjectTitle, ProjectDescription } from './styles'
import Tag from '../Tag'

interface TagProps {
	tag_name: string
	color: { color_name: string }
}

interface ProjectProps {
	id: string
	title: string
	description: string
	status: 'to-do' | 'in-progress' | 'done'
	image?: string
	tags?: TagProps[]
}

const Project = ({ id, title, description, status, image, tags }: ProjectProps) => {
	const [, dragRef] = useDrag({
		type: 'project',
		item: { id, title, description, status, image, tags }
	})

	return (
		<Container ref={dragRef}>
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