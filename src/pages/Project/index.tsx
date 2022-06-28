import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../../store'
import { Status, Tag, Task, UploadImage } from '../../components'
import { OutletContext } from '../../components/App'
import { ProjectProps } from '../../components/Project'
import { Main } from '../Projects/styles'

import {
	ProjectTitle,
	Image,
	ProjectDescription,
	Subtitle,
	AddTaskButton,
	Tasks
} from './styles'

const Project = () => {
	const { state: { projects } } = useContext(AppContext)
	const { openModal, idProjectSelected } = useContext(OutletContext)
	const [projectSelected, setProjectSelected] = useState<ProjectProps | null>(null)

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

		tasks?.sort((a: { id: number }, b: { id: number }) => a.id - b.id)

		return (
			<>
				<Main>
					{ image ? <Image src={image} alt="Project Image" /> : <UploadImage idProject={id} /> }
	
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