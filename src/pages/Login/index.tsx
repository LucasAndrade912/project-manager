import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'

import { AuthContext } from '../../routes'
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
	const authContext = useContext(AuthContext)
	const navigate = useNavigate()

	async function handleUserLogin() {
		try {
			await signInWithPopup(auth, provider)

			navigate('/projects')
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (authContext?.isAuth) {
			navigate('/projects')
		}
	}, [authContext])

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