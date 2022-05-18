import React from 'react'
import { signInWithPopup } from 'firebase/auth'

import { auth, provider } from '../../firebase'
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
	async function handleUserLogin() {
		try {
			const { user } = await signInWithPopup(auth, provider)

			console.log(user)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Container>
			<LoginWrapper>
				<Title>Project Manager</Title>

				<Welcome>
					Gerencie seus projetos com Project Manager!
				</Welcome>

				<LoginButton onClick={handleUserLogin}>
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