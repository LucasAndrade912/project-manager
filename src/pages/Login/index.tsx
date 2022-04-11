import React from 'react'

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

				<LoginButton>
					<Icon src={GoogleIcon} alt="Google Icon" />

					Log in with Google
				</LoginButton>
			</LoginWrapper>

			<LogoWrapper>
				<Logo src={LogoIcon} alt="Project Manager icon" />
			</LogoWrapper>
		</Container>
	)
}

export default Login