import React from 'react'

import { GoogleIcon, LogoIcon } from '../../assets'

import {
	Container,
	LoginWrapper,
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
				<h1>Project Manager</h1>

				<Welcome>
					Gerencie seus projetos com Project Manager!
				</Welcome>

				<LoginButton>
					<Icon src={GoogleIcon} alt="Google Icon" />

					Log in with Google
				</LoginButton>
			</LoginWrapper>

			<LogoWrapper>
				<Logo src={LogoIcon} alt="Logo" />
			</LogoWrapper>
		</Container>
	)
}

export default Login