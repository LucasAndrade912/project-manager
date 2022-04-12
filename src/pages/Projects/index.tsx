import React from 'react'

import { Project, Status, Menu } from '../../components'

import {
	Container,
	Main,
	Title,
	AllProjects,
	ProjectsWrapper
} from './styles'

const Projects = () => {
	return (
		<Container>
			<Menu />

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
		</Container>
	)
}

export default Projects