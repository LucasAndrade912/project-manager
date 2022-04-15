import React from 'react'
import { Link } from 'react-router-dom'

import { GoogleIcon, LogoIcon } from '../../assets'

import {
	Container,
	LoginWrapper,
	Title,
	Welcome,
	LoginButton,
	Icon,
	LogoWrapper,
	Logo
} from './styles'

const Login = () => {
	return (
		<Container>
			<LoginWrapper>
				<Title>Project Manager</Title>

				<Welcome>
					Gerencie seus projetos com Project Manager!
				</Welcome>

				<Link to="/app">
					<LoginButton>
						<Icon src={GoogleIcon} alt="Google Icon" />

							Log in with Google
					</LoginButton>
				</Link>
			</LoginWrapper>

			<LogoWrapper>
				<Logo src={LogoIcon} alt="Project Manager icon" />
			</LogoWrapper>
		</Container>
	)
}

export default Login