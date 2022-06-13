import React from 'react'

import { Overlay, Content } from './styles'

interface ModalProps {
  children: JSX.Element | null
}

const Modal = ({ children }: ModalProps) => {
	return (
		<Overlay>
			<Content>
				{ children }
			</Content>
		</Overlay>
	)
}

export default Modal