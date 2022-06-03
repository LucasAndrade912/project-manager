import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { api } from '../lib/api'

export function useFetch<T>(resource: string) {
	const [data, setData] = useState<T | null>(null)

	useEffect(() => {
		(async () => {
			const tokenId = await auth.currentUser?.getIdToken()

			const response = await api.get(resource, {
				headers: { 'Authorization': `Bearer ${tokenId}` }
			})

			setData(response.data)
		})()
	}, [])

	return data
}