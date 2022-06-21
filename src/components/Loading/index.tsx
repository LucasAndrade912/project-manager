import React from 'react'

import { Spinner } from './styles'

const Loading = ({ size }:  { size: string }) => {
	return <Spinner size={size} />
}

export default Loading