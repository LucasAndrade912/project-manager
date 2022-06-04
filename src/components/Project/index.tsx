import React from 'react'
import { useDrag } from 'react-dnd'
import { useNavigate } from 'react-router-dom'

import { Container, Image, ProjectTitle, ProjectDescription } from './styles'
import Tag, { TagProps } from '../Tag'

interface TaskProps {
	id: number
	task_name: string
	finished: boolean
}

export interface ProjectProps {
	id: string
	title: string
	description: string
	status: 'to-do' | 'in-progress' | 'done'
	image?: string
	tags?: TagProps[]
	tasks?: TaskProps[]
}

const Project = ({ id, title, description, status, image, tags, tasks }: ProjectProps) => {
	const navigate = useNavigate()
	const [, dragRef] = useDrag({
		type: 'project',
		item: { id, title, description, status, image, tags, tasks }
	})

	const slug = title.toLowerCase().replaceAll(' ', '-')

	return (
		<Container ref={dragRef}>
			{ image && (
				<Image src={image} alt="Project image" loading="lazy" />
			) }

			<ProjectTitle
				onClick={() => {
					navigate(`/projects/${slug}`, { state: { id, title, description, status, image, tags, tasks } })
				}}
			>
				{ title }
			</ProjectTitle>
      
			<ProjectDescription>
				{ description }
			</ProjectDescription>

			{ tags && (
				tags.map(tag => (
					<Tag
						key={tag.tag_name}
						tag_name={tag.tag_name}
						color={tag.color}
					/>
				))
			) }
		</Container>
	)
}

export default Project