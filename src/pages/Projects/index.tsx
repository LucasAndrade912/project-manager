import React from 'react'

import { LogoIcon, NewProjectIcon, FilterIcon, LogoutIcon } from '../../assets'

import { Container, Menu, Logo, Buttons, Button, ButtonIcon } from './styles'

const Projects = () => {
	return (
		<Container>
			<Menu>
				<Logo src={LogoIcon} alt="Logo" />

				<Buttons>
					<Button>
						<ButtonIcon src={NewProjectIcon} />
					</Button>

					<Button>
						<ButtonIcon src={FilterIcon} />
					</Button>

					<Button>
						<ButtonIcon src={LogoutIcon} />
					</Button>
				</Buttons>
			</Menu>
		</Container>
	)
}

export default Projects