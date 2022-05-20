import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { api } from '../lib/api'

interface AxiosResponseData {
	projects: ProjectData[]
}

interface ProjectData {
	id: string
	title: string
	description: string
	status: 'to-do' | 'in-progress' | 'done'
	image?: string
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