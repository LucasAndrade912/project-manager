import React from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from './styles'
import { Menu } from '../../components'

const App = () => {
	return (
		<Container>
			<Menu />
			<Outlet/>
		</Container>
	)
}

export default App