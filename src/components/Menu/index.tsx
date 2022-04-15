import React from 'react'
import { Link } from 'react-router-dom'

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
			<Link to="/app/projects">
				<Logo src={LogoIcon} alt="Project Manager Icon" />
			</Link>

			<Buttons>
				<Button>
					<ButtonIcon src={NewProjectIcon} alt="New project icon" />
				</Button>

				<Button>
					<ButtonIcon src={FilterIcon} alt="Filter icon" />
				</Button>

				<Button>
					<Link to="/">
						<ButtonIcon src={LogoutIcon} alt="Log out icon" />
					</Link>
				</Button>
			</Buttons>
		</Container>
	)
}

export default Menu