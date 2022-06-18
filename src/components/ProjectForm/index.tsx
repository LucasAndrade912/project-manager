import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { CloseIcon } from '../../assets'
import { usePost } from '../../hooks/usePost'
import { AppContext } from '../App'
import { TagProps } from '../Tag'

import {
	Header,
	Title,
	Image,
	Section,
	Label,
	Input,
	TextArea,
	Tags,
	Tag,
	Submit,
	ErrorMessage
} from './styles'

interface FormProps {
	closeModal: () => void
}

interface FormData {
	title: string
	description: string
}

const ProjectForm = ({ closeModal }: FormProps) => {
	const [selectedTags, setSelectedTags] = useState<number[]>([])
	const { dispatch, tags } = useContext(AppContext)!
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
	const request = usePost()

	const selectTag = (id: number) => {
		if (!selectedTags.includes(id)) {
			setSelectedTags(prevState => [...prevState, id])
		} else {
			const copyState = selectedTags.filter(tagId => tagId !== id )
			setSelectedTags(copyState)
		}
	}

	const onFormSubmit = async (data: FormData) => {
		const body = { ...data, idTags: selectedTags }
		
		try {
			const id = await request('/projects', body)
			
			dispatch({ type: 'ADD_PROJECT', payload: {
				id,
				title: data.title,
				description: data.description,
				status: 'to-do',
				tags: tags?.filter(tag => selectedTags.includes(tag.id!))
			} })
			
			closeModal()
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<Header>
				<Title>Crie seu Projeto</Title>

				<Image src={CloseIcon} alt="Close Button" onClick={closeModal} />
			</Header>
			
			<Section>
				<Label htmlFor="title">Título</Label>
				<Input
					id="title"
					placeholder="Título do projeto..."
					{ ...register('title', { required: 'Title is required' }) }
				/>
				{ errors.title && <ErrorMessage>{ errors.title.message }</ErrorMessage> }
			</Section>

			<Section>
				<Label htmlFor="description">Descrição</Label>
				<TextArea
					id="description"
					placeholder="Descrição do projeto..."
					{ ...register('description', { required: 'Description is required' }) }
				/>
				{ errors.description && <ErrorMessage>{ errors.description.message }</ErrorMessage> }
			</Section>

			<Section>
				<Label>Tags</Label>
				<Tags>
					{
						tags?.map(tag => (
							<Tag
								key={tag.id}
								color={tag.color.color_name}
								selected={selectedTags.includes(tag.id!)}
								onClick={() => selectTag(tag.id!)}
							>
								{ tag.tag_name }
							</Tag>
						))
					}
				</Tags>
			</Section>

			<Submit type="submit">
				Criar Projeto
			</Submit>
		</form>
	)
}

export default ProjectForm