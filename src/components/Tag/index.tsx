import React from 'react'

import { Container } from './styles'

export interface TagProps {
	id?: number
	tag_name: string
	color: {
		color_name: string
	}
}

const Tag = ({ tag_name, color }: TagProps) => {
	return (
		<Container color={color.color_name}>
			{ tag_name }
		</Container>
	)
}

export default Tag