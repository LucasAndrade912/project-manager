import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProjectsGroup } from '../../components'
import { AppContext, Color } from '../../components/App'
import { auth } from '../../firebase'
import { ProjectProps } from '../../components/Project'
import { api } from '../../lib/api'
import { formatStatus } from '../../utils'
import { AuthContext } from '../../routes'
import { useFetch } from '../../hooks/useFetch'
import { TagProps } from '../../components/Tag'

import {
	Main,
	Title,
	AllProjects
} from './styles'

type ProjectFetch = { projects: ProjectProps[] }
type TagFetch = { tags: TagProps[] }
type ColorFetch = {
	colors: Color[]
}

const Projects = () => {
	const navigate = useNavigate()
	const authContext = useContext(AuthContext)
	const { projects, dispatch, setTags, setColors } = useContext(AppContext)!

	const myProjects = useFetch<ProjectFetch>('/projects')?.projects
	const myTags = useFetch<TagFetch>('/tags')?.tags
	const myColors = useFetch<ColorFetch>('/colors')?.colors

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
		setTags(myTags)
		setColors(myColors)

		dispatch({ type: 'SET_PROJECTS', payload: myProjects })
	}, [myProjects, myTags, myColors])

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