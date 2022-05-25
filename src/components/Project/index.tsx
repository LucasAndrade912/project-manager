import React from 'react'
import { useDrag } from 'react-dnd'
import { useNavigate } from 'react-router-dom'

import { Container, Image, ProjectTitle, ProjectDescription } from './styles'
import Tag from '../Tag'

interface TagProps {
	tag_name: string
	color: { color_name: string }
}

interface TaskProps {
	id: number
	task_name: string
	finished: boolean
}

interface ProjectProps {
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

	return (
		<Container ref={dragRef}>
			{ image && (
				<Image src={image} alt="Project image" loading="lazy" />
			) }

			<ProjectTitle
				onClick={() => {
					navigate(`/app/project/${id}`, { state: { id, title, description, status, image, tags, tasks } })
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
						name={tag.tag_name}
						color={tag.color.color_name}
					/>
				))
			) }
		</Container>
	)
}

export default Project