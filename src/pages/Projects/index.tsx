import React from 'react'

import { LogoIcon, NewProjectIcon, FilterIcon, LogoutIcon } from '../../assets'
import { Project, Status } from '../../components'

import {
	Container,
	Menu,
	Logo,
	Buttons,
	Button,
	ButtonIcon,
	Main,
	Title,
	AllProjects,
	ProjectsWrapper
} from './styles'

const Projects = () => {
	return (
		<Container>
			<Menu>
				<Logo src={LogoIcon} alt="Project Manager Icon" />

				<Buttons>
					<Button>
						<ButtonIcon src={NewProjectIcon} alt="New project icon" />
					</Button>

					<Button>
						<ButtonIcon src={FilterIcon} alt="Filter icon" />
					</Button>

					<Button>
						<ButtonIcon src={LogoutIcon} alt="Log out icon" />
					</Button>
				</Buttons>
			</Menu>
			
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