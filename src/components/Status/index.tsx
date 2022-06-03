import React from 'react'

import { Container, StatusColor, StatusTitle } from './styles'

interface StatusProps {
  status: 'to-do' | 'in-progress' | 'done'
}

const Status = ({ status }: StatusProps) => {
	function formatStatus(status: string) {
		const firstLetterUpperCase = status[0].toUpperCase()
		const restOfTheFormattedString = status.slice(1).replace('-', ' ')

		return `${firstLetterUpperCase}${restOfTheFormattedString}`
	}

	return (
		<Container>
			<StatusColor status={status} />
			<StatusTitle>
				{ formatStatus(status) }
			</StatusTitle>
		</Container>
	)
}

export default Status