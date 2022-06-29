import React from 'react'
import { useDrop } from 'react-dnd'

import { ProjectCard, Status } from '..'
import { ProjectProps } from '../ProjectCard'

import { Container } from './styles'

interface ProjectsGroupProps {
  status: 'to-do' | 'in-progress' | 'done'
  data: ProjectProps[] | undefined
	updateData: (data: ProjectProps, boardStatus: 'to-do' | 'in-progress' | 'done') => void
}

const ProjectsGroup = ({ status, data, updateData }: ProjectsGroupProps) => {
	const [, dropRef] = useDrop<ProjectProps>({
		accept: 'project',
		drop: item => {
			updateData(item, status)
		}
	})

	return (
		<Container ref={dropRef}>
			<Status status={status} />
			{
				data?.map(project => (
					<ProjectCard key={project.id} { ...project } />
				))
			}
		</Container>
	)
}

export default ProjectsGroup