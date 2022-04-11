import React from 'react'

import { LogoIcon, NewProjectIcon, FilterIcon, LogoutIcon } from '../../assets'

import { Container, Menu, Logo, Buttons, Button, ButtonIcon } from './styles'

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
		</Container>
	)
}

export default Projects