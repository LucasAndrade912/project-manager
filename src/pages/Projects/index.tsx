import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../lib/api'
import { auth } from '../../firebase'
import { AppContext } from '../../store'
import { formatStatus } from '../../utils'
import { AuthContext } from '../../routes'
import { useFetch } from '../../hooks/useFetch'
import { TagProps } from '../../components/Tag'
import { ProjectsGroup } from '../../components'
import { Color } from '../../store/reducers/color.reducer'
import { ProjectProps } from '../../components/ProjectCard'

import {
	Main,
	Title,
	AllProjects
} from './styles'

type ProjectFetch = { projects: ProjectProps[] }
type TagFetch = { tags: TagProps[] }
type ColorFetch = { colors: Color[] }

const Projects = () => {
	const navigate = useNavigate()
	const authContext = useContext(AuthContext)
	const { state: { projects } , dispatch } = useContext(AppContext)

	const allProjects = useFetch<ProjectFetch>('/projects')?.projects
	const allTags = useFetch<TagFetch>('/tags')?.tags
	const allColors = useFetch<ColorFetch>('/colors')?.colors

	const updateProject = async (data: ProjectProps, boardStatus: 'to-do' | 'in-progress' | 'done') => {
		dispatch({ type: 'UPDATE_PROJECT_STATUS', payload: {
			data,
			from: data.status === 'done' ? 'done' : formatStatus(data.status),
			to: boardStatus === 'done' ? 'done' : formatStatus(boardStatus)
		} })

		const tokenId = await auth.currentUser?.getIdToken()

		await api.put('/projects', {
			idProject: data.id,
			changes: {
				status: boardStatus
			}
		}, {
			headers: { 'Authorization': `Bearer ${tokenId}` }
		})
	}

	useEffect(() => {
		if (!authContext?.isAuth) {
			navigate('/login')
		}
	}, [authContext])

	useEffect(() => {
		dispatch({ type: 'SET_PROJECTS', payload: allProjects })
		dispatch({ type: 'SET_TAGS', payload: allTags })
		dispatch({ type: 'SET_COLORS', payload: allColors })
	}, [allProjects, allTags, allColors])

	return (
		<>
			<Main>
				<Title>My Projects</Title>

				<AllProjects>
					<ProjectsGroup
						status="to-do"
						data={projects.toDo}
						updateData={updateProject}
					/>

					<ProjectsGroup
						status="in-progress"
						data={projects.inProgress}
						updateData={updateProject}
					/>

					<ProjectsGroup
						status="done"
						data={projects.done}
						updateData={updateProject}
					/>
				</AllProjects>
			</Main>
		</>
	)
}

export default Projects