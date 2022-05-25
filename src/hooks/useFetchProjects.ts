import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { api } from '../lib/api'

interface AxiosResponseData {
	projects: ProjectData[]
}

interface TagProps {
	tag_name: string
	color: { color_name: string }
}

interface TaskProps {
	id: number
	task_name: string
	finished: boolean
}

export interface ProjectData {
	id: string
	title: string
	description: string
	status: 'to-do' | 'in-progress' | 'done'
	image?: string
	tags?: TagProps[]
	tasks?: TaskProps[]
}

export function useFetchProjects(resource: string) {
	const [data, setData] = useState<AxiosResponseData | null>(null)

	useEffect(() => {
		(async () => {
			const tokenId = await auth.currentUser?.getIdToken()

			const response = await api.get(resource, {
				headers: { 'Authorization': `Bearer ${tokenId}` }
			})

			setData(response.data)
		})()
	}, [])

	return data?.projects
}