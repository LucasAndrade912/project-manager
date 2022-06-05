import { auth } from '../firebase'
import { api } from '../lib/api'

export function usePost() {
	return async function (resource: string, body: unknown) {
		const tokenId = await auth.currentUser?.getIdToken()

		const { data } = await api.post(resource, body, {
			headers: { 'Authorization': `Bearer ${tokenId}` }
		})

		return data
	}
}