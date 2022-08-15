import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import Loading from '../Loading'
import { CloseIcon } from '../../assets'
import { AppContext } from '../../store'
import { usePost } from '../../hooks/usePost'
import { Header, Title, Image, ErrorMessage } from '../ProjectForm/styles'

import { Field, InputField, SubmitButton } from './styles'

interface TaskFormProps {
  closeModal: () => void
	idProjectSelected: string
}

const TaskForm = ({ closeModal, idProjectSelected }: TaskFormProps) => {
	const { dispatch } = useContext(AppContext)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm<{ task: string }>()
	const request = usePost()

	const handleCreateTask = async (data: { task: string }) => {
		setIsSubmitting(true)

		const id = await request('/tasks', {
			idProject: idProjectSelected,
			taskName: data.task
		})

		dispatch({ type: 'ADD_TASK', payload: {
			idProject: idProjectSelected,
			idTask: id,
			task: data.task
		} })

		setIsSubmitting(false)
		closeModal()
	}

	return (
		<form onSubmit={handleSubmit(handleCreateTask)}>
			<Header>
				<Title>
          Crie uma tarefa
				</Title>

				<Image src={CloseIcon} alt="Close button" onClick={closeModal} />
			</Header>

			<Field>
				<InputField
					placeholder="Nome da tarefa..."
					{...register('task', { required: 'Task name is required' })}
				/>

				<SubmitButton type="submit" disabled={isSubmitting}>
					{ isSubmitting ? <Loading size="1rem" color="#FFF" /> : '+' }
				</SubmitButton>
			</Field>
			{ errors.task && <ErrorMessage>{ errors.task.message }</ErrorMessage> }
		</form>
	)
}

export default TaskForm