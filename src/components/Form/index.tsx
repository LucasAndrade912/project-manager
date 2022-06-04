import React, { useState } from 'react'

import { CloseIcon } from '../../assets'
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
	Submit
} from './styles'

interface FormProps {
	tags: TagProps[] | undefined
	closeModal: () => void
}

const Form = ({ tags, closeModal }: FormProps) => {
	const [selectedTags, setSelectedTags] = useState<number[]>([])

	const selectTag = (id: number) => {
		if (!selectedTags.includes(id)) {
			setSelectedTags(prevState => [...prevState, id])
		} else {
			const copyState = selectedTags.filter(tagId => tagId !== id )
			setSelectedTags(copyState)
		}
	}

	return (
		<form>
			<Header>
				<Title>Crie seu Projeto</Title>

				<Image src={CloseIcon} alt="Close Button" onClick={closeModal} />
			</Header>
			
			<Section>
				<Label htmlFor="title">Título</Label>
				<Input id="title" placeholder="Título do projeto..." />
			</Section>

			<Section>
				<Label htmlFor="description">Descrição</Label>
				<TextArea id="description" placeholder="Descrição do projeto..." />
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

			<Submit>
				Criar Projeto
			</Submit>
		</form>
	)
}

export default Form