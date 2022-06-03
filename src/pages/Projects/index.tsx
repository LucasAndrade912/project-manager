import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProjectsGroup } from '../../components'
import { AppContext } from '../../components/App'
import { auth } from '../../firebase'
import { ProjectData } from '../../hooks/useFetchProjects'
import { api } from '../../lib/api'
import { AuthContext } from '../../routes'

import {
	Main,
	Title,
	AllProjects
} from './styles'


const Projects = () => {
	const navigate = useNavigate()
	const authContext = useContext(AuthContext)
	const { projects, setProjects } = useContext(AppContext)!

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
		if (!authContext?.isAuth) {
			navigate('/login')
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