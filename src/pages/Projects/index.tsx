import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { Project, Status } from '../../components'
import { AuthContext } from '../../routes'

import {
	Main,
	Title,
	AllProjects,
	ProjectsWrapper
} from './styles'

const Projects = () => {
	const authContext = useContext(AuthContext)

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
						<Project />
						<Project />
					</ProjectsWrapper>

					<ProjectsWrapper>
						<Status status="in-progress" />
						<Project />
						<Project />
						<Project />
					</ProjectsWrapper>

					<ProjectsWrapper>
						<Status status="done" />
						<Project />
					</ProjectsWrapper>
				</AllProjects>
			</Main>
		</>
	)
}

export default Projects