import React, { FormEvent, useContext, useEffect, useState } from 'react'

import { AppContext } from '../../store'
import { CloseIcon } from '../../assets'
import { usePost } from '../../hooks/usePost'
import { Header, Title, Image, Submit } from '../ProjectForm/styles'

import { InputField, Container, Colors, Color, Tag } from './styles'

interface TagFormProps {
  closeModal: () => void
}

interface Color {
	id: number
	color_name: string
}

const TagForm = ({ closeModal }: TagFormProps) => {
	const { state: { colors }, dispatch } = useContext(AppContext)
	const [tagText, setTagText] = useState('')
	const [colorSelected, setColorSelected] = useState<Color>()
	const request = usePost()

	const selectColor = (id: number, color: string) => {
		setColorSelected({ id, color_name: color })
	}

	const changeText = (text: string) => {
		setTagText(text)
	}

	const handleCreateTag = async (event: FormEvent) => {
		event.preventDefault()

		const idTag: number | undefined = await request('/tags', {
			tagName: tagText,
			idColor: colorSelected?.id
		})

		if (colorSelected) {
			dispatch({ type: 'ADD_TAG', payload: {
				id: idTag,
				tag_name: tagText,
				color: { color_name: colorSelected.color_name }
			} })
		}

		closeModal()
	}

	useEffect(() => {
		if (colors) {
			const color = colors[0]

			setColorSelected({ id: color.id, color_name: color.color_name })
		}
	}, [])

	return (
		<form onSubmit={handleCreateTag}>
			<Header>
				<Title>
          Crie uma tag
				</Title>

				<Image src={CloseIcon} alt="Close button" onClick={closeModal} />
			</Header>

			{ colors && (
				<>
					<Container>
						<InputField
							placeholder="Texto da tag..."
							onChange={e => changeText(e.target.value)}
							value={tagText}
						/>

						<Colors>
							{ colors.map(color => (
								<Color
									key={color.id}
									color={color.color_name}
									onClick={() => selectColor(color.id, color.color_name)}
								/>
							)) }
						</Colors>
					</Container>

					<div style={{ textAlign: 'center' }}>
						<Tag
							color={colors.find(color => color.id === colorSelected?.id)?.color_name}
						>
							{ tagText || 'Example' }
						</Tag>
					</div>

					<Submit style={{ marginTop: 0 }} type="submit">
						Criar tag
					</Submit>
				</>
			) }
		</form>
	)
}

export default TagForm