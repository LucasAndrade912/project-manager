import React, { useRef } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { storage } from '../../firebase'

import { Label } from './styles'

const UploadImage = () => {
	const inputFileRef = useRef<HTMLInputElement | null>(null)

	const handleUploadImage = async () => {
		const files = inputFileRef.current?.files

		if (files) {
			const file = files[0]

			const storageRef = ref(storage, uuidV4())

			await uploadBytes(storageRef, file)
			const imageURL = await getDownloadURL(storageRef)

			console.log(imageURL)
		}
	}

	return (
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
	)
}

export default UploadImage