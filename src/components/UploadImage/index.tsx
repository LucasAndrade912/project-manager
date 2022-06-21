import React, { useRef } from 'react'

import { Label } from './styles'

const UploadImage = () => {
	const inputFileRef = useRef<HTMLInputElement | null>(null)

	const handleChange = () => {
		const files = inputFileRef.current?.files

		if (files) {
			console.log(files[0])
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
				onChange={handleChange}
				ref={inputFileRef}
			/>
		</>
	)
}

export default UploadImage