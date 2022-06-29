import { useEffect, useState } from 'react'

import { api } from '../lib/api'
import { auth } from '../firebase'

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