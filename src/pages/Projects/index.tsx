import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { Project, Status } from '../../components'
import { useFetchProjects } from '../../hooks/useFetchProjects'
import { AuthContext } from '../../routes'

import {
	Main,
	Title,
	AllProjects,
	ProjectsWrapper
} from './styles'

const Projects = () => {
	const authContext = useContext(AuthContext)
	const projects = useFetchProjects('/projects')

	const mapProjectsByStatus = (status: 'to-do' | 'in-progress' | 'done') => {
		return projects?.map(project => {
			if (project.status === status) {
				return (
					<Project
						key={project.id}
						title={project.title}
						description={project.description}
						image={project.image}
						tags={project.tags}
					/>
				)
			}
		})
	}

	const projectsWithStatusToDo = mapProjectsByStatus('to-do')
	const projectsWithStatusInProgress = mapProjectsByStatus('in-progress')
	const projectsWithStatusDone = mapProjectsByStatus('done')

	if (!authContext?.isAuth) {
		return <Navigate to="/" />
	}

	return (
		<>
			<Main>
				<Title>My Projects</Title>

				<AllProjects>
					<ProjectsWrapper>
						<Status status="to-do" />
						{ projectsWithStatusToDo }
					</ProjectsWrapper>

					<ProjectsWrapper>
						<Status status="in-progress" />
						{ projectsWithStatusInProgress }
					</ProjectsWrapper>

					<ProjectsWrapper>
						<Status status="done" />
						{ projectsWithStatusDone }
					</ProjectsWrapper>
				</AllProjects>
			</Main>
		</>
	)
}

export default Projects