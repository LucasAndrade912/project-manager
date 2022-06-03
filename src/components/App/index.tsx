import React, { useState, useEffect, createContext } from 'react'
import { createPortal } from 'react-dom'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Menu, Modal, Form } from '..'
import { ProjectData, useFetchProjects } from '../../hooks/useFetchProjects'

import { Container } from './styles'

export interface ProjectsTypes {
	'to-do': ProjectData[] | undefined
	'in-progress': ProjectData[] | undefined
	'done': ProjectData[] | undefined
}

interface AppContextProps {
	projects: ProjectsTypes | undefined
	setProjects: React.Dispatch<React.SetStateAction<ProjectsTypes | undefined>>
}

export const AppContext = createContext<AppContextProps | null>(null)

const App = () => {
	const [projects, setProjects] = useState<ProjectsTypes>()
	const [isModalOpened, setIsModalOpened] = useState(false)
	const myProjects = useFetchProjects('/projects')
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const openModal = () => {
		setIsModalOpened(true)
	}

	const closeModal = () => {
		setIsModalOpened(false)
	}

	const mapProjectsByStatus = (status: 'to-do' | 'in-progress' | 'done') => {
		return myProjects?.filter(project => project.status === status && project)
	}

	useEffect(() => {
		setProjects({
			'to-do': mapProjectsByStatus('to-do'),
			'in-progress': mapProjectsByStatus('in-progress'),
			'done': mapProjectsByStatus('done')
		})
	}, [myProjects])

	useEffect(() => {
		if (pathname === '/') {
			navigate('projects')
		}
	}, [])

	return (
		<Container>
			<Menu openModal={openModal} />

			<AppContext.Provider value={{ projects, setProjects }}>
				<Outlet/>
			</AppContext.Provider>

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