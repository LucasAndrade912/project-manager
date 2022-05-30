import React, { useState } from 'react'
import { auth } from '../../firebase'

import { api } from '../../lib/api'

import { Checkbox, Checkmark, Container, TaskLabel } from './styles'

interface TaskProps {
	idProject: string
	idTask: number
	task: string
	finished: boolean
}

const Task = ({ idProject, idTask, task, finished }: TaskProps) => {
	const [isFinished, setIsFinished] = useState(finished)

	const updateTask = async () => {
		setIsFinished(!isFinished)

		const tokenId = await auth.currentUser?.getIdToken()

		await api.put('/tasks', {
			idProject,
			idTask,
			finished: !isFinished
		}, {
			headers: { 'Authorization': `Bearer ${tokenId}` }
		})
	}

	return (
		<Container>
			<Checkbox
				type="checkbox"
				checked={isFinished}
				onChange={updateTask}
			/>
			<Checkmark />
			<TaskLabel>
				{ task }
			</TaskLabel>
		</Container>
	)
}

export default Task