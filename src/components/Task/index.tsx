import React from 'react'

import { ITask } from '../../types'
import { Checkbox, Checkmark, Container, TaskLabel } from './styles'

const Task = ({ task, finished }: ITask) => {
	return (
		<Container>
			<Checkbox type="checkbox" checked={finished} />
			<Checkmark />
			<TaskLabel>
				{ task }
			</TaskLabel>
		</Container>
	)
}

export default Task