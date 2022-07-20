import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import { ModalType } from '../App'
import { auth } from '../../firebase'
import {
	LogoIcon,
	NewProjectIcon,
	FilterIcon,
	LogoutIcon,
	MenuIcon,
	NewProjectBlackIcon,
	FilterBlackIcon,
	LogoutBlackIcon
} from '../../assets'

import {
	Container,
	Logo,
	Buttons,
	Button,
	ButtonIcon,
	MenuHamburger,
	MenuExpanded,
	MenuButton,
	MenuButtonIcon
} from './styles'

interface MenuProps {
	openModal: (type: ModalType) => void
}

const Menu = ({ openModal }: MenuProps) => {
	const [isMenuExpanded, setIsMenuExpanded] = useState(false)
	const navigate = useNavigate()

	async function logOut() {
		await signOut(auth)
		navigate('/login')
	}

	return (
		<>
			<Container>
				<MenuHamburger
					src={MenuIcon}
					alt="Menu Hamburger"
					onClick={() => setIsMenuExpanded(!isMenuExpanded)}
				/>

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

			{
				isMenuExpanded && (
					<MenuExpanded>
						<MenuButton title="Create new project" onClick={() => openModal('project')}>
							<MenuButtonIcon src={NewProjectBlackIcon} alt="New project icon" />
							Create new project
						</MenuButton>
						
						<MenuButton title="Create new tag" onClick={() => openModal('tag')}>
							<MenuButtonIcon src={FilterBlackIcon} alt="Filter icon" />
							Create new tag
						</MenuButton>
						
						<MenuButton title="Log out" onClick={logOut}>
							<MenuButtonIcon src={LogoutBlackIcon} alt="Log out icon" />
							Log out
						</MenuButton>
					</MenuExpanded>
				)
			}
		</>
	)
}

export default Menu