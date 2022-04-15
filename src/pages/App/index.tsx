import React, { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Container } from './styles'
import { Menu } from '../../components'

const App = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if (pathname === '/app') {
			navigate('projects')
		}
	}, [])

	return (
		<Container>
			<Menu />
			<Outlet/>
		</Container>
	)
}

export default App