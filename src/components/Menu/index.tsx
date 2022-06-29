import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { ModalType } from '../App'
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
	openModal: (type: ModalType) => void
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
				<Button title="Create new project" onClick={() => openModal('project')}>
					<ButtonIcon src={NewProjectIcon} alt="New project icon" />
				</Button>

				<Button title="Create new tag" onClick={() => openModal('tag')}>
					<ButtonIcon src={FilterIcon} alt="Filter icon" />
				</Button>

				<Button title="Log out" onClick={logOut}>
					<ButtonIcon src={LogoutIcon} alt="Log out icon" />
				</Button>
			</Buttons>
		</Container>
	)
}

export default Menu