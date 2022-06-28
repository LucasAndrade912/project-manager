/* eslint-disable indent */
import React, { useState, useEffect, createContext, useReducer } from 'react'
import { createPortal } from 'react-dom'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Store from '../../store'
import { Menu, Modal, ProjectForm, TaskForm, TagForm } from '..'
import { TagProps } from '../Tag'
import { projectReducer, ProjectState, Action } from './projectState'

import { Container } from './styles'

interface AppContextProps {
	projects: ProjectState
	dispatch: React.Dispatch<Action>
	tags: TagProps[] | undefined
	setTags: React.Dispatch<React.SetStateAction<TagProps[] | undefined>>
	colors: Color[] | undefined
	setColors: React.Dispatch<React.SetStateAction<Color[] | undefined>>
	idProjectSelected: string
	setIdProjectSelected: React.Dispatch<React.SetStateAction<string>>
	openModal: (type: ModalType, idProject?: string) => void
}

export type ModalType = 'project' | 'task' | 'tag'

export interface Color {
	id: number
	color_name: string
}

export const AppContext = createContext<AppContextProps | null>(null)

const App = () => {
	const [projects, dispatch] = useReducer(projectReducer, {
		toDo: undefined,
		inProgress: undefined,
		done: undefined
	})
	const [tags, setTags] = useState<TagProps[]>()
	const [colors, setColors] = useState<Color[]>()
	const [idProjectSelected, setIdProjectSelected] = useState('')
	const [modalType, setModalType] = useState<ModalType>()
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

				<AppContext.Provider value={{ projects, dispatch, tags, setTags, colors, setColors, idProjectSelected, setIdProjectSelected, openModal }}>
					<Outlet/>
				
					{ isModalOpened && createPortal(
						<Modal>
							{
								modalType === 'project' ? <ProjectForm closeModal={closeModal} /> :
								modalType === 'task' ? <TaskForm closeModal={closeModal} /> :
								modalType === 'tag' ? <TagForm closeModal={closeModal} /> : null
							}
						</Modal>,
						document.querySelector('#modal')!
					) }
				</AppContext.Provider>
			</Container>
		</Store>
	)
}

export default App