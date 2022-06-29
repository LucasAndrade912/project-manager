import React, { useContext } from 'react'
import { useDrag } from 'react-dnd'
import { useNavigate } from 'react-router-dom'

import Tag, { TagProps } from '../Tag'
import { OutletContext } from '../App'

import { Container, Image, ProjectTitle, ProjectDescription } from './styles'

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

const ProjectCard = ({ id, title, description, status, image, tags, tasks }: ProjectProps) => {
	const { setIdProjectSelected } = useContext(OutletContext)
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
					navigate(`/projects/${slug}`)
					setIdProjectSelected(id)
				}}
			>
				{ title }
			</ProjectTitle>
      
			<ProjectDescription>
				{ description }
			</ProjectDescription>

			{ tags && (
				tags.length < 3 ? (
					tags.map(tag => (
						<Tag
							key={tag.tag_name}
							tag_name={tag.tag_name}
							color={tag.color}
						/>
					))
				) : (
					<>
						<Tag tag_name={tags[0].tag_name} color={tags[0].color} />
						<Tag tag_name={tags[1].tag_name} color={tags[1].color} />
						<Tag tag_name={`+${tags.length - 2}`} color={{ color_name: '#0F62FE' }} />
					</>
				)
			) }
		</Container>
	)
}

export default ProjectCard