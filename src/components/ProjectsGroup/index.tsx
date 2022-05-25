import React from 'react'
import { useDrop } from 'react-dnd'

import { Project, Status } from '..'
import { ProjectData } from '../../hooks/useFetchProjects'
import { Container } from './styles'

interface ProjectsGroupProps {
  status: 'to-do' | 'in-progress' | 'done'
  data: ProjectData[] | undefined
	updateData: (data: ProjectData, boardStatus: 'to-do' | 'in-progress' | 'done') => void
}

const ProjectsGroup = ({ status, data, updateData }: ProjectsGroupProps) => {
	const [, dropRef] = useDrop<ProjectData>({
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
					<Project key={project.id} { ...project } />
				))
			}
		</Container>
	)
}

export default ProjectsGroup