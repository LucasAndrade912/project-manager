import React, { useContext, useState } from 'react'
import { auth } from '../../firebase'

import { api } from '../../lib/api'
import { AppContext } from '../../store'

import { Checkbox, Checkmark, Container, TaskLabel } from './styles'

export interface TaskProps {
	idProject: string
	idTask: number
	task: string
	finished: boolean
}

const Task = ({ idProject, idTask, task, finished }: TaskProps) => {
	const { dispatch } = useContext(AppContext)
	const [isFinished, setIsFinished] = useState(finished)

	const updateTask = async () => {
		setIsFinished(!isFinished)
		dispatch({ type: 'UPDATE_TASK', payload: { id: idTask, finished: !isFinished } })

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