import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { CloseIcon } from '../../assets'
import { usePost } from '../../hooks/usePost'
import { AppContext } from '../App'
import { Header, Title, Image, ErrorMessage } from '../ProjectForm/styles'

import { Field, InputField, SubmitButton } from './styles'

interface TaskFormProps {
  closeModal: () => void
}

const TaskForm = ({ closeModal }: TaskFormProps) => {
	const { register, handleSubmit, formState: { errors } } = useForm<{ task: string }>()
	const { dispatch, idProjectSelected } = useContext(AppContext)!
	const request = usePost()

	const onFormSubmit = async (data: { task: string }) => {
		const id = await request('/tasks', {
			idProject: idProjectSelected,
			taskName: data.task
		})

		dispatch({ type: 'ADD_TASK', payload: {
			idProject: idProjectSelected,
			idTask: id,
			task: data.task
		} })
		closeModal()
	}

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
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

				<SubmitButton type="submit">
          +
				</SubmitButton>
			</Field>
			{ errors.task && <ErrorMessage>{ errors.task.message }</ErrorMessage> }
		</form>
	)
}

export default TaskForm