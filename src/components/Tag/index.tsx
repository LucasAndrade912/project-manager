import React from 'react'

import { ITag } from '../../types'
import { Container } from './styles'

const Tag = ({ name, color }: ITag) => {
	return (
		<Container color={color}>
			{ name }
		</Container>
	)
}

export default Tag