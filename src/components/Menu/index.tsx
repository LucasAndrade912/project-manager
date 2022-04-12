import React from 'react'

import { LogoIcon, NewProjectIcon, FilterIcon, LogoutIcon } from '../../assets'

import {
	Container,
	Logo,
	Buttons,
	Button,
	ButtonIcon
} from './styles'

const Menu = () => {
	return (
		<Container>
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
		</Container>
	)
}

export default Menu