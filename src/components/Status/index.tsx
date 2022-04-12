import React from 'react'

import { IStatus } from '../../types'
import { Container, StatusColor, StatusTitle } from './styles'

const Status = ({ status }: IStatus) => {
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