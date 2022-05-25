import React from 'react'
import { useLocation } from 'react-router-dom'

import { Status, Tag, Task } from '../../components'
import { Main } from '../Projects/styles'

import {
	ProjectTitle,
	Image,
	ProjectDescription,
	Subtitle,
	AddTaskButton,
	Tasks
} from './styles'
import { ProjectData } from '../../hooks/useFetchProjects'

const Project = () => {
	const project = useLocation().state as ProjectData

	const { image, title, status, description, tags, tasks } = project

	return (
		<>
			<Main>
				{ image && <Image src={image} alt="Project Image" /> }

				<ProjectTitle>
					{ title }

					<Status status={status} />
				</ProjectTitle>

				<ProjectDescription>
					{ description }
				</ProjectDescription>

				{
					tags?.map(tag => (
						<Tag
							key={tag.tag_name}
							name={tag.tag_name}
							color={tag.color.color_name}
						/>
					))
				}

				<Subtitle>
          Tasks

					<AddTaskButton>
            + Add Task
					</AddTaskButton>
				</Subtitle>

				<Tasks>
					{
						tasks?.map(task => (
							<Task key={task.id} task={task.task_name} finished={task.finished} />
						))
					}
				</Tasks>
			</Main>			
		</>
	)
}

export default Project