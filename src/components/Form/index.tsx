import React from 'react'

import { CloseIcon } from '../../assets'

import { Header, Title, Image, Section, Label, Input, TextArea, Submit } from './styles'

interface FormProps {
	closeModal: () => void
}

const Form = ({ closeModal }: FormProps) => {
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
			</Section>

			<Submit>
				Criar Projeto
			</Submit>
		</form>
	)
}

export default Form