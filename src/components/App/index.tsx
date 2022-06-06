import React, { useState, useEffect, createContext } from 'react'
import { createPortal } from 'react-dom'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Menu, Modal, ProjectForm } from '..'
import { ProjectProps } from '../Project'
import { TagProps } from '../Tag'
import { useFetch } from '../../hooks/useFetch'

import { Container } from './styles'

export interface ProjectState {
	'to-do': ProjectProps[] | undefined
	'in-progress': ProjectProps[] | undefined
	'done': ProjectProps[] | undefined
}

interface AppContextProps {
	projects: ProjectState | undefined
	setProjects: React.Dispatch<React.SetStateAction<ProjectState | undefined>>
	tags: TagProps[] | undefined
}

export type ModalType = 'project' | 'task'

type ProjectFetch = { projects: ProjectProps[] }
type TagFetch = { tags: TagProps[] }

export const AppContext = createContext<AppContextProps | null>(null)

const App = () => {
	const [projects, setProjects] = useState<ProjectState>()
	const [tags, setTags] = useState<TagProps[]>()
	const [modalType, setModalType] = useState<ModalType>()
	const [isModalOpened, setIsModalOpened] = useState(false)

	const myProjects = useFetch<ProjectFetch>('/projects')?.projects
	const myTags = useFetch<TagFetch>('/tags')?.tags

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const openModal = (type: ModalType) => {
		setModalType(type)
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

		setTags(myTags)
	}, [myProjects, myTags])

	useEffect(() => {
		if (pathname === '/') {
			navigate('projects')
		}
	}, [])

	return (
		<Container>
			<Menu openModal={openModal} />

			<AppContext.Provider value={{ projects, setProjects, tags }}>
				<Outlet/>
			
				{ isModalOpened && createPortal(
					<Modal>
						{ modalType === 'project' ? <ProjectForm closeModal={closeModal} /> : <p>Hello World</p> }
					</Modal>,
				document.querySelector('#modal')!
				) }
			</AppContext.Provider>
		</Container>
	)
}

export default App