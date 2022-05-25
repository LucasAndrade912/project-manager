import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { LogoIcon, NewProjectIcon, FilterIcon, LogoutIcon } from '../../assets'

import {
	Container,
	Logo,
	Buttons,
	Button,
	ButtonIcon
} from './styles'
import { auth } from '../../firebase'

const Menu = () => {
	const navigate = useNavigate()

	async function logOut() {
		await signOut(auth)
		navigate('/')
	}

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

				<Button onClick={logOut}>
					<ButtonIcon src={LogoutIcon} alt="Log out icon" />
				</Button>
			</Buttons>
		</Container>
	)
}

export default Menu