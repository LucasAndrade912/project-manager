/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */
import React, { useState, useEffect, createContext } from 'react'
import { createPortal } from 'react-dom'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Store from '../../store'
import { Menu, Modal, ProjectForm, TaskForm, TagForm } from '..'

import { Container } from './styles'

export type ModalType = 'project' | 'task' | 'tag'

interface OutletContext {
	openModal: (type: ModalType, idProject?: string) => void
	idProjectSelected: string
	setIdProjectSelected: React.Dispatch<React.SetStateAction<string>>
}

export const OutletContext = createContext<OutletContext>({
	openModal: () => { },
	idProjectSelected: '',
	setIdProjectSelected: () => { }
})

const App = () => {
	const [idProjectSelected, setIdProjectSelected] = useState('')
	const [modalType, setModalType] = useState<ModalType>('project')
	const [isModalOpened, setIsModalOpened] = useState(false)

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const openModal = (type: ModalType, idProject?: string) => {
		setModalType(type)
		setIsModalOpened(true)
		
		if (idProject) {
			setIdProjectSelected(idProject)
		}
	}

	const closeModal = () => {
		setIsModalOpened(false)
	}

	useEffect(() => {
		if (pathname === '/') {
			navigate('projects')
		}
	}, [])

	return (
		<Store>
			<Container>
				<Menu openModal={openModal} />

				<OutletContext.Provider value={{ openModal, idProjectSelected, setIdProjectSelected }}>
					<Outlet />
				</OutletContext.Provider>
			
				{ isModalOpened && createPortal(
					<Modal>
						{
							modalType === 'project' ? <ProjectForm closeModal={closeModal} /> :
							modalType === 'task' ? <TaskForm closeModal={closeModal} idProjectSelected={idProjectSelected} /> :
							modalType === 'tag' ? <TagForm closeModal={closeModal} /> : null
						}
					</Modal>,
					document.querySelector('#modal')!
				) }
			</Container>
		</Store>
	)
}

export default App