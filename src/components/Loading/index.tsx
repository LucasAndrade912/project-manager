import React from 'react'

import { Spinner } from './styles'

interface LoadingProps {
	size: string
	color?: string
}

const Loading = ({ size, color }:  LoadingProps) => {
	return <Spinner size={size} color={color} />
}

export default Loading