import React, { useContext, useRef, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { Loading } from '..'
import { api } from '../../lib/api'
import { AppContext } from '../../store'
import { auth, storage } from '../../firebase'

import { Container, Label } from './styles'

interface UploadImageProps {
	idProject: string
}

const UploadImage = ({ idProject }: UploadImageProps) => {
	const { dispatch } = useContext(AppContext)
	const inputFileRef = useRef<HTMLInputElement | null>(null)
	const [isUploadingImage, setIsUploadingImage] = useState(false)

	const handleUploadImage = async () => {
		setIsUploadingImage(true)
		const files = inputFileRef.current?.files

		if (files) {
			const file = files[0]

			const storageRef = ref(storage, uuidV4())

			await uploadBytes(storageRef, file)
			const imageURL = await getDownloadURL(storageRef)

			const tokenId = await auth.currentUser?.getIdToken()

			await api.put('/projects', {
				idProject,
				changes: {
					image: imageURL
				}
			}, {
				headers: { 'Authorization': `Bearer ${tokenId}` }
			})

			dispatch({ type: 'UPDATE_PROJECT_IMAGE', payload: {
				id: idProject,
				image: imageURL
			} })

			setIsUploadingImage(false)
		}
	}

	return (
		<Container>
			{
				!isUploadingImage ? (
					<>
						<Label htmlFor="image-file">+ Add Cover</Label>
						<input
							type="file"
							id="image-file"
							accept=".png, .jpg, .jpeg"
							style={{ display: 'none' }}
							onChange={handleUploadImage}
							ref={inputFileRef}
						/>
					</>
				) : <Loading size="1.875rem" />
			}
		</Container>
	)
}

export default UploadImage