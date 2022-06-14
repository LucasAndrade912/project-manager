/* eslint-disable indent */
import React, { useState, useEffect, createContext, useReducer } from 'react'
import { createPortal } from 'react-dom'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Menu, Modal, ProjectForm, TaskForm, TagForm } from '..'
import { ProjectProps } from '../Project'
import { TagProps } from '../Tag'
import { useFetch } from '../../hooks/useFetch'
import { projectReducer, ProjectState_, Action } from './projectState'

import { Container } from './styles'

export interface ProjectState {
	'to-do': ProjectProps[] | undefined
	'in-progress': ProjectProps[] | undefined
	'done': ProjectProps[] | undefined
}

interface AppContextProps {
	state: ProjectState_
	dispatch: React.Dispatch<Action>
	projects: ProjectState | undefined
	setProjects: React.Dispatch<React.SetStateAction<ProjectState | undefined>>
	tags: TagProps[] | undefined
	setTags: React.Dispatch<React.SetStateAction<TagProps[] | undefined>>
	colors: Color[] | undefined
	idProjectSelected: string
	setIdProjectSelected: React.Dispatch<React.SetStateAction<string>>
	openModal: (type: ModalType, idProject?: string) => void
}

export type ModalType = 'project' | 'task' | 'tag'

interface Color {
	id: number
	color_name: string
}

type ProjectFetch = { projects: ProjectProps[] }
type TagFetch = { tags: TagProps[] }
type ColorFetch = {
	colors: Color[]
}

export const AppContext = createContext<AppContextProps | null>(null)

const App = () => {
	const [state, dispatch] = useReducer(projectReducer, {
		toDo: undefined,
		inProgress: undefined,
		done: undefined
	})
	const [projects, setProjects] = useState<ProjectState>()
	const [tags, setTags] = useState<TagProps[]>()
	const [colors, setColors] = useState<Color[]>()
	const [idProjectSelected, setIdProjectSelected] = useState('')
	const [modalType, setModalType] = useState<ModalType>()
	const [isModalOpened, setIsModalOpened] = useState(false)

	const myProjects = useFetch<ProjectFetch>('/projects')?.projects
	const myTags = useFetch<TagFetch>('/tags')?.tags
	const myColors = useFetch<ColorFetch>('/colors')?.colors

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
		setColors(myColors)

		dispatch({ type: 'SET_PROJECTS', payload: myProjects })
	}, [myProjects, myTags, myColors])

	useEffect(() => {
		if (pathname === '/') {
			navigate('projects')
		}
	}, [])

	return (
		<Container>
			<Menu openModal={openModal} />

			<AppContext.Provider value={{ state, dispatch, projects, setProjects, tags, setTags, colors, idProjectSelected, setIdProjectSelected, openModal }}>
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
	)
}

export default App