import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProjectsGroup } from '../../components'
import { auth } from '../../firebase'
import { ProjectData, useFetchProjects } from '../../hooks/useFetchProjects'
import { api } from '../../lib/api'
import { AuthContext } from '../../routes'

import {
	Main,
	Title,
	AllProjects
} from './styles'

export interface ProjectsTypes {
	'to-do': ProjectData[] | undefined
	'in-progress': ProjectData[] | undefined
	'done': ProjectData[] | undefined
}

const Projects = () => {
	const [projects, setProjects] = useState<ProjectsTypes>()
	const navigate = useNavigate()
	const myProjects = useFetchProjects('/projects')
	const authContext = useContext(AuthContext)

	const mapProjectsByStatus = (status: 'to-do' | 'in-progress' | 'done') => {
		return myProjects?.filter(project => project.status === status && project)
	}

	const updateProject = async (data: ProjectData, boardStatus: 'to-do' | 'in-progress' | 'done') => {
		const updatedProject = {...data}
		updatedProject.status = boardStatus

		if (projects) {
			const copyProjects = {...projects}
			copyProjects[data.status] = copyProjects[data.status]?.filter(project => {
				return project.id !== data.id
			})
			copyProjects[boardStatus]?.unshift(updatedProject)

			setProjects(copyProjects)
		}

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
		setProjects({
			'to-do': mapProjectsByStatus('to-do'),
			'in-progress': mapProjectsByStatus('in-progress'),
			'done': mapProjectsByStatus('done')
		})
	}, [myProjects])

	useEffect(() => {
		if (!authContext?.isAuth) {
			navigate('/')
		}
	}, [authContext])

	return (
		<>
			<Main>
				<Title>My Projects</Title>

				<AllProjects>
					<ProjectsGroup
						status="to-do"
						data={projects?.['to-do']}
						updateData={updateProject}
					/>

					<ProjectsGroup
						status="in-progress"
						data={projects?.['in-progress']}
						updateData={updateProject}
					/>

					<ProjectsGroup
						status="done"
						data={projects?.done}
						updateData={updateProject}
					/>
				</AllProjects>
			</Main>
		</>
	)
}

export default Projects