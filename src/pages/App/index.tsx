import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Container } from './styles'
import { Menu, Modal, Form } from '../../components'

const App = () => {
	const [isModalOpened, setIsModalOpened] = useState(false)
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const openModal = () => {
		setIsModalOpened(true)
	}

	const closeModal = () => {
		setIsModalOpened(false)
	}

	useEffect(() => {
		if (pathname === '/app') {
			navigate('projects')
		}
	}, [])

	return (
		<Container>
			<Menu openModal={openModal} />
			<Outlet/>
			{ isModalOpened && createPortal(
				<Modal>
					<Form closeModal={closeModal} />
				</Modal>,
				document.querySelector('#modal')!
			) }
		</Container>
	)
}

export default App