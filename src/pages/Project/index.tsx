import React, { useContext, useEffect, useState } from 'react'

import { Status, Tag, Task, UploadImage } from '../../components'
import { Main } from '../Projects/styles'
import { AppContext } from '../../components/App'
import { ProjectProps } from '../../components/Project'

import {
	ProjectTitle,
	Image,
	ProjectDescription,
	Subtitle,
	AddTaskButton,
	Tasks
} from './styles'

const Project = () => {
	const [projectSelected, setProjectSelected] = useState<ProjectProps | null>(null)
	const { projects, idProjectSelected, openModal } = useContext(AppContext)!

	useEffect(() => {
		const projectKeys = Object.keys(projects) as Array<'toDo' | 'inProgress' | 'done'>

		projectKeys.forEach(key => {
			projects[key]?.forEach(project => {
				if (project.id === idProjectSelected) {
					setProjectSelected(project)
				}
			})
		})
	}, [])

	if (projectSelected) {
		const { id, image, title, description, status, tags, tasks } = projectSelected

		return (
			<>
				<Main>
					{ image ? <Image src={image} alt="Project Image" /> : <UploadImage /> }
	
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
								tag_name={tag.tag_name}
								color={tag.color}
							/>
						))
					}
	
					<Subtitle>
						Tasks
	
						<AddTaskButton onClick={() => openModal('task', id)}>
							+ Add Task
						</AddTaskButton>
					</Subtitle>
	
					<Tasks>
						{
							tasks?.map(task => (
								<Task
									key={task.id}
									idProject={id}
									idTask={task.id}
									task={task.task_name}
									finished={task.finished}
								/>
							))
						}
					</Tasks>
				</Main>			
			</>
		)
	} else {
		return null
	}
} 

export default Project