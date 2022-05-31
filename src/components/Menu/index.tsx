import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { auth } from '../../firebase'
import { LogoIcon, NewProjectIcon, FilterIcon, LogoutIcon } from '../../assets'

import {
	Container,
	Logo,
	Buttons,
	Button,
	ButtonIcon
} from './styles'

interface MenuProps {
	openModal: () => void
}

const Menu = ({ openModal }: MenuProps) => {
	const navigate = useNavigate()

	async function logOut() {
		await signOut(auth)
		navigate('/login')
	}

	return (
		<Container>
			<Link to="projects">
				<Logo src={LogoIcon} alt="Project Manager Icon" />
			</Link>

			<Buttons>
				<Button onClick={openModal}>
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