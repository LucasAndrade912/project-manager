import React from 'react'

import { Project, Status } from '../../components'

import {
	Main,
	Title,
	AllProjects,
	ProjectsWrapper
} from './styles'

const Projects = () => {
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